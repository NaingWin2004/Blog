import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between px-3 py-2 items-center">
            <Link to="/">
                <h1 className="text-2xl font-black cursor-pointer">Blog.io</h1>
            </Link>
            <ul className="flex gap-2 justify-center items-center font-bold">
                <li className="cursor-pointer">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "bg-black text-white px-3 py-1.5" : ""
                        }
                    >
                        Post
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink
                        to="/create-post"
                        className={({ isActive }) =>
                            isActive ? "bg-black text-white px-3 py-1.5" : ""
                        }
                    >
                        CreatePost
                    </NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink
                        to="/auth?mode=login"
                        className={({ isActive }) =>
                            isActive ? "bg-black text-white px-3 py-1.5" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
