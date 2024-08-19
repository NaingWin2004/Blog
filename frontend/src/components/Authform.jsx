import { Link, Form, useSearchParams, useActionData,useNavigation } from "react-router-dom";

const Authform = () => {
    const data = useActionData();
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";
    return (
        <div className="mx-5 my-3">
            <Form
                className="px-3 py-2 grid gap-3 shadow mx-auto max-w-2xl"
                method="post"
            >
                <h1 className="font-bold text-xl">
                    {isLogin ? "Login your account" : "Create new account"}
                </h1>
                {data && data.errors && (
                    <ul className="text-red-600">
                        {Object.values(data.errors).map(err => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p className="text-red-600">{data.message}</p>}

                <div className="flex flex-col ">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="border border-black rounded outline-none px-2 focus:ring ring-gray-200"
                    />
                </div>
                <button className="mr-auto bg-black text-white font-bold px-3 py-1.5 w-1/3 active:bg-white active:text-black active:outline transition-all duration-75 active:scale-95">
                    {isSubmitting?"Submitting":isLogin ? "Login" : "Register"}
                </button>
                <div className="flex gap-2">
                    {isLogin ? (
                        <>
                            <p>Don't have account?</p>
                            <Link
                                to="/auth?mode=signup"
                                className="font-bold underline"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <p>Already have account?</p>
                            <Link
                                to="/auth?mode=login"
                                className="font-bold underline"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default Authform;
