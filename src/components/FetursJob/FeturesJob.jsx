// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import FetureCard from "./FetureCard";


const FeturesJob = () => {
    // const data=useLoaderData()
    // console.log(data);
    const [feture,setFetures]=useState([])
    const [dataLength,setDataLength]=useState(4)
   
    useEffect(()=>{
        fetch('/public/jobs.json')
            .then(res=>res.json())
            .then(data=>setFetures(data))
    },[])
    
    return (
        <>
        <div className="grid grid-cols-2 justify-between gap-8 my-5">
            {
                feture.slice(0 , dataLength)?.map(feture=><FetureCard key={feture.id} feture={feture}></FetureCard>)
            }
           
        </div>
         <div className={`text-center my-10 text-black ${dataLength===6 && 'hidden'} `}>
         <button onClick={()=>setDataLength(feture.length)} className='px-4 py-2 font-extrabold text-xl bg-[#7E90FE] rounded-md'>See All Jobs</button>
        </div>
        </>
    );
};

export default FeturesJob;