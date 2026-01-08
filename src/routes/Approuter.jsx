import React from 'react'
import Landing from "../pages/Landing/Landing"
import About from "../pages/About/About"
import Contact from "../pages/Contact Us/Contact"
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Contact",
        element: <Contact />
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
