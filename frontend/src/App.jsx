import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Posts, { loader as postLoader } from "./pages/Posts.jsx";
import Create from "./pages/Create.jsx";
import Details, {
    action as deleteAction,
    loader as postDetailsLoader
} from "./pages/Details.jsx";
import Edit from "./pages/Edit.jsx";
import Errors from "./pages/Errors.jsx";
import { action as postAction } from "./components/PostFrom.jsx";
import Auth, { action as authAction } from "./pages/Auth.jsx";
import { loader as logoutLoader } from "./components/Logout.js";
import { tokenLoader, checkToken } from "./util/auth.js";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            errorElement: <Errors />,
            id: "root",
            loader: tokenLoader,
            children: [
                { index: true, element: <Posts />, loader: postLoader },
                {
                    path: "/create-post",
                    element: <Create />,
                    action: postAction,
                    loader: checkToken
                },
                { path: "/auth", element: <Auth />, action: authAction },
                { path: "/logout", loader: logoutLoader },
                {
                    path: ":id",
                    id: "post-detail",
                    loader: postDetailsLoader,
                    children: [
                        {
                            index: true,
                            element: <Details />,
                            action: deleteAction
                        },
                        {
                            path: "edit-post",
                            element: <Edit />,
                            action: postAction,
                            loader: checkToken
                        }
                    ]
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
export default App;
