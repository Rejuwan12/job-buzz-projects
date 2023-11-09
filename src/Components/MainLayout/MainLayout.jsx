import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-[#F4F3F0]">
            <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;