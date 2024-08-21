import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
    const { id, image, title, date } = post;
    return (
        <div className="mx-1 px-1 my-2 md:mx-3 shadow hover:shadow-xl">
            <Link to={`${id}`}>
                <img
                    src={image}
                    alt={title}
                    className="max-w-full w-full max-h-56 lg:max-h-[500px] object-cover cursor-pointer
                "
                />
            </Link>
            <Link to={`${id}`}>
                <p className="text-xl font-bold cursor-pointer">{title}</p>
            </Link>
            <p className="flex items-center py-2">
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
            {/*<hr className="border border-gray-300 rounded-full" />*/}
        </div>
    );
};

export default PostItem;
