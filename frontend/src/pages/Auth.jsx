import Authform from "../components/Authform.jsx";
import { redirect } from "react-router-dom";

const Auth = () => {
    return <Authform />;
};

export default Auth;
export const action = async ({ request }) => {
    const data = await request.formData();
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode");

    if (mode !== "login" && mode !== "signup" && mode !== "answer") {
        throw new Error(
            "Invalid mode. Please use 'login', 'signup' or 'answer'"
        );
    }

    const authData = {
        email: data.get("email"),
        password: data.get("password")
    };

    const res = await fetch(`${import.meta.env.VITE_API_URL}/${mode}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authData)
    });

    if (res.status === 422 || res.status === 401) {
        const resData = await res.json();
        return resData;
    }

    if (!res.ok) {
        throw new Error("Something went wrong!");
    }

    const resData = await res.json();
    const token = resData.token;
    localStorage.setItem("token", token);
    const expDate = new Date();
    expDate.setHours(expDate.getHours() + 1);
    localStorage.setItem("exp", expDate.toISOString());
    return redirect("/");
};
