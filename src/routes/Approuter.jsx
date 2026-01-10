import React from 'react'
import Landing from "../pages/Landing/Landing"
import About from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/Home",
        element: <About />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

const Approuter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Approuter
