import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Components/Home/Home";
import AllJobs from './../Pages/AllJobs/AllJobs';
import AddJob from './../Pages/AddJob/AddJob';
import AppliedJob from './../Pages/AppliedJob/AppliedJob';
import Blogs from './../Pages/Blogs/Blogs';
import MyJob from './../Pages/MyJob/MyJob';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement: <Error/>,
        children:
            [
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/allJobs',
                    element: <AllJobs/>
                },
                {
                    path:'/addJob',
                    element: <PrivateRoute>
                         <AddJob/>
                    </PrivateRoute>
                },
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/appliedJob',
                    element: <PrivateRoute>
                        <AppliedJob/>
                    </PrivateRoute>
                },
                {
                    path:'/blogs',
                    element: <Blogs/>
                },
                {
                    path:'/myJob',
                    element:
                    <PrivateRoute>
                        <MyJob/>
                    </PrivateRoute> 
                },
                {
                    path:'/login',
                    element: <Login/>
                },
                {
                    path:'/register',
                    element: <Register/>
                }

            ]
        }
        
])
export default router;