import { Outlet } from "react-router-dom";
import Header from "./src/Components/Header/Header";

const Mainlayout = () => {
    return (
        <div>
          <Header></Header>  
          <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;