import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "react-router-dom";
const PostFrom = ({ header, btnText, oldPost, method }) => {
    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <Form
            method={method}
            className="px-3 py-2 grid gap-3 shadow mx-auto max-w-2xl"
        >
            <Link to="/" className="ml-auto cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
            </Link>
            <h1 className="font-bold">{header}</h1>

            {data && data.errors && (
                <ul className="text-red-600 text-center font-bold">
                    {Object.values(data.errors).map(err => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            {data && data.message && (
                <p className="text-red-600">{data.message}</p>
            )}
            <div className="flex flex-col ">
                <label htmlFor="form-title">Title</label>
                <input
                    type="text"
                    id="form-title"
                    name="title"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
                    defaultValue={oldPost ? oldPost.title : ""}
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="form-image">Image Url</label>
                <input
                    type="text"
                    id="form-image"
                    name="image"
                    placeholder="https://www.example.com"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
                    defaultValue={oldPost ? oldPost.image : ""}
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="form-date">Date</label>
                <input
                    type="date"
                    id="form-date"
                    name="date"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200 bg-white"
                    defaultValue={oldPost ? oldPost.date : ""}
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="form-description">Description</label>
                <textarea
                    rows="5"
                    cols="30"
                    id="form-description"
                    name="description"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
                    defaultValue={oldPost ? oldPost.description : ""}
                ></textarea>
            </div>
            <button className="mr-auto bg-black text-white font-bold px-3 py-1.5 w-1/3 active:bg-white active:text-black active:outline transition-all duration-75 active:scale-95">
                {isSubmitting?"Submitting":btnText}
            </button>
        </Form>
    );
};

export default PostFrom;
export const action = async ({ request, params }) => {
    const data = await request.formData();
    const method = request.method;
    const postData = {
        id: uuidv4(),
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    };
    let url = "http://localhost:8080/posts";

    if (method === "PATCH") {
        url = `http://localhost:8080/posts/${params.id}`;
    }
    const res = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });
    if (res.status === 422 || res.status === 401) {
        const resData = await res.json();
        return resData;
    }

    if (!res.ok) {
        throw new Error("Something went wrong!");
    }
    return redirect("/");
};
