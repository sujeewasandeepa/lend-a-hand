import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";

export default createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            }
        ]
    }
])