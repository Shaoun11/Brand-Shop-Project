import { Outlet } from "react-router-dom";
import Header from "./src/Components/Header/Header";
import { Toaster } from "react-hot-toast";

const Mainlayout = () => {
    return (
        <div>
          <Header></Header>  
          <Outlet></Outlet>
          <Toaster></Toaster>
        </div>
    );
};

export default Mainlayout;