import PostFrom from "../components/PostFrom.jsx";
import { useRouteLoaderData } from "react-router-dom";
const Edit = () => {
    const post = useRouteLoaderData("post-detail");
    return (
        <div className="mx-5">
            <PostFrom
                header={"Edit your post now"}
                btnText={"Update"}
                oldPost={post}
                method={"patch"}
            />
        </div>
    );
};

export default Edit;
