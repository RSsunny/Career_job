import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    return (
        <>
        
       <div className="max-w-7xl mx-auto px-5">
       <Header></Header>
        <Outlet></Outlet>
       </div>
        <Footer></Footer>
        
        </>
    );
};

export default Home;