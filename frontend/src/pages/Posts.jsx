import { useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem.jsx";
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="grid md:grid-cols-2">
            {posts.length > 0 &&
                posts.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;

export const loader = async () => {
    const res = await fetch("http://localhost:8080/posts");
    if (!res.ok) {
    } else {
        const data = await res.json();
        return data.posts;
    }
};
