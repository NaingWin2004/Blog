import { redirect } from "react-router-dom";

export const getExpDuration = () => {
    const expDate = localStorage.getItem("exp");
    const expDateInMili = new Date(expDate);
    const currentDateInMili = new Date();
    const duration = expDateInMili - currentDateInMili;

    return duration;
};
export const auth = () => {
    let token = localStorage.getItem("token");

    if (!token) {
        return null;
    }

    const duration = getExpDuration();
    if (duration < 0) {
        return "TOKEN EXP";
    }
    return token;
};

export const tokenLoader = () => {
    return auth();
};

export const checkToken = () => {
    const token = auth();

    if (!token) {
        return redirect("/auth?mode=login");
    }
    return token;
};
