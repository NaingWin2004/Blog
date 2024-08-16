import { Form, Link } from "react-router-dom";

const PostFrom = () => {
    return (
        <Form
            method="post"
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
            <h1 className="font-bold">Create your post now</h1>
            <div className="flex flex-col ">
                <label htmlFor="form-title">Title</label>
                <input
                    type="text"
                    id="form-title"
                    name="title"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
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
                />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="form-date">Date</label>
                <input
                    type="date"
                    id="form-date"
                    name="date"
                    className="border border-black rounded outline-none px-2 focus:ring ring-gray-200 bg-white"
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
                ></textarea>
            </div>
            <button className="mr-auto bg-black text-white font-bold px-3 py-1.5 w-1/3 active:bg-white active:text-black active:outline transition-all duration-75 active:scale-95">
                Post
            </button>
        </Form>
    );
};

export default PostFrom;
