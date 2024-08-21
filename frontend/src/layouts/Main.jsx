import {
    Outlet,
    useLoaderData,
    useSubmit,
    useNavigation
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import { getExpDuration } from "../util/auth";

import Loader from "../components/Loader.jsx";
const Main = () => {
    const token = useLoaderData();
    const submit = useSubmit();
    const { state } = useNavigation();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "TOKEN EXP") {
            submit(null, { action: "/logout", method: "POST" });
        }

        const duration = getExpDuration();
        setTimeout(() => {
            submit(null, { action: "/logout", method: "POST" });
        }, [duration]);
    }, [token, submit]);
    return (
        <>
            <Navbar />
            {state === "loading" ? <Loader /> : <Outlet />}
        </>
    );
};

export default Main;
