import PostFrom from "../components/PostFrom.jsx";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "react-router-dom";
const Create = () => {
    return (
        <div className="mx-5">
            <PostFrom header={"Create your post now"} btnText={"Post"} />
        </div>
    );
};

export default Create;

export const action = async ({ request, params }) => {
    const data = await request.formData();
    const postData = {
        id: uuidv4(),
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    };
    const res = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
            "CONTENT-TYPE": "application/json"
        },
        body: JSON.stringify(postData)
    });
    if (res.status === 422) {
        return res;
    }
    if (!res.ok) {
        //code
    }
    return redirect("/");
};
