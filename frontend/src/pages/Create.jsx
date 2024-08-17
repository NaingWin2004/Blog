import PostFrom from "../components/PostFrom.jsx";

const Create = () => {
    return (
        <div className="mx-5">
            <PostFrom header={"Create your post now"} btnText={"Post"} method={"post"}/>
        </div>
    );
};

export default Create;
