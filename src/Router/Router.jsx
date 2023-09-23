import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import FristPage from "../components/Home/FristPage";
import CatagoryJob from "../components/CatagorisJob/CatagoryJob";
import FeturesJob from "../components/FetursJob/FeturesJob";
import DetailsJob from "../components/DetailsJob/DetailsJob";
import AppliJob from "../components/Appliid Job/AppliJob";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Home></Home>,
        children:[

            {
                path: '/',
                loader:()=>fetch('/public/Banner.json'),
                element: <FristPage></FristPage>
            },
            {
                path : '/',
                // loader: ()=>fetch('Catagories.json'),
                element:<CatagoryJob></CatagoryJob>
            },
            {
               path: '/',
            //    loader: ()=>fetch('../../public/Json/jobs.json'),
               element: <FeturesJob></FeturesJob> 
            },
            {
                path: '/details/:id',
                element:<DetailsJob></DetailsJob>,

                loader: ()=>fetch('/public/jobs.json')
            },
            {
                path: '/appli',
                element:<AppliJob></AppliJob>,
                loader: ()=>fetch('/public/jobs.json')
                
            }
        ]
    }
])

export default router;