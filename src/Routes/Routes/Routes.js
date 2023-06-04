import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home";
import Products from "../../Products/Products";
import Login from "../../Login/Login";
import ErrorImage from "../../Images/404.png"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <div >
                   <img className="lg:max-w-[600px] w-full mx-auto my-16"  src={ErrorImage} alt="Image Not Found" />
                </div>
            }
        ]
    }
]);

