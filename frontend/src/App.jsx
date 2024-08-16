import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Posts, { loader as postLoader } from "./pages/Posts.jsx";
import Create, { action as createAction } from "./pages/Create.jsx";
import Details, { action as deleteAction,loader as postDetailsLoader } from "./pages/Details.jsx";
import Edit from "./pages/Edit.jsx";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                { index: true, element: <Posts />, loader: postLoader },
                {
                    path: "/create-post",
                    element: <Create />,
                    action: createAction
                },
                {
                    path: "/post-details/:id",
                    element: <Details />,
                    loader: postDetailsLoader,
                    action:deleteAction
                },
                {
                    path: "/edit-post/:id",
                    element: <Edit />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
export default App;
