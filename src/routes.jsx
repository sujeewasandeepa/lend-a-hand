import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";

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
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])