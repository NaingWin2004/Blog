import { useLoaderData,redirect } from "react-router-dom";

import PostDetails from "../components/PostDetails.jsx";
const Details = () => {
    const post = useLoaderData();
    return (
        <div className="grid justify-center w-full">
            <PostDetails post={post} />
        </div>
    );
};

export default Details;

export const loader = async ({ request, params }) => {
    const res = await fetch(`http://localhost:8080/posts/${params.id}`);
    if (!res.ok) {
    } else {
        const data = await res.json();
        return data.post;
    }
};

export const action = async ({ request, params }) => {
    const res = await fetch(`http://localhost:8080/posts/${params.id}`, {
        method: "DELETE"
    });
    if (!res.ok) {
        throw new Error("");
    }
    return redirect("/")
};
