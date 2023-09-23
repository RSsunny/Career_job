import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const CatagoryJob = () => {
    // const catagoris=useLoaderData();
    // const {image, title,details}=catagoris
    const [catagoris,setCatagoris]=useState([])
    useEffect(()=>{
        fetch('/public/Catagories.json')
            .then(res=>res.json())
            .then(data=>setCatagoris(data))
    },[])
   
    return (
        <div className="flex items-center  justify-between gap-5 mb-10">
            {
                catagoris?.map(data=><JobCard key={data.id} data={data}></JobCard>)
            }
        </div>
    );
};

export default CatagoryJob;