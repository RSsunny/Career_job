import { useLoaderData } from "react-router-dom";
import Title from "../Title/Title";
import CatagoryJob from "../CatagorisJob/CatagoryJob";
import FeturesJob from "../FetursJob/FeturesJob";


const FristPage = () => {
    const banner=useLoaderData()
    const {image, title, details}=banner
    
    return (
        <>
        <div className="flex justify-between items-center my-10">
            <div className="space-y-4">
                <h1 className="text-7xl font-extrabold max-w-[570px]">{title}</h1>
                <h1 className="text-7xl font-extrabold">Dream Job</h1>
                <p className="max-w-[470px]">{details}</p>
                <button className="px-4 py-2 border border-red-500 font-bold">Get Started</button>
            </div>
            <div className="h-[500px]">
               <img className="h-full w-full" src={image} alt="" />
            </div>
        </div>

        <Title title='Job Category List' details='Explore thousands of job opportunities with all the information you need. Its your future'></Title>

        <CatagoryJob></CatagoryJob>

        <Title title="Featured Jobs" details="Explore thousands of job opportunities with all the information you need. Its your future"></Title>

        <FeturesJob></FeturesJob>

        </> 
        
    );
};

export default FristPage;