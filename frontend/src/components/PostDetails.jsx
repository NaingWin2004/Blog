import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
    const { id, image, title, date, description } = post;
    const submit = useSubmit();
    const postDelete = () => {
        const confirmStatus = window.confirm(
            "Are you sure what to delete this post?"
        );
        if (confirmStatus) {
            submit(null,{method:"delete"});
        }
    };
    return (
        <div className="px-2 py-1 flex flex-col max-w-2xl items-center">
            <Link to="/" className="self-end cursor-pointer">
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
            <h1 className="text-xl font-bold py-2">{title}</h1>
            <p className="text-gray-500 flex">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                </svg>
                {date}
            </p>
            <img
                src={image}
                alt={title}
                className="max-w-screen-sm w-full  object-cover py-2
                "
            />
            <p className="md:text-center">{description}</p>
            <div className="flex ml-auto gap-5 my-5">
                <Link to={`edit-post`}>
                    <button className="mr-auto bg-black text-white font-bold px-3 py-1.5  active:bg-white active:text-black active:outline transition-all duration-75 active:scale-95">
                        Edit
                    </button>
                </Link>
                <button
                    className="mr-auto bg-black text-white font-bold px-3 py-1.5  active:bg-white active:text-black active:outline transition-all duration-75 active:scale-95"
                    onClick={postDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
