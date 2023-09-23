import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getApply } from "../../Utility/LocalStorage";
import ApplayJobDetails from "./ApplayJobDetails";
import { Select, Option } from "@material-tailwind/react";

const AppliJob = () => {
    const allJob=useLoaderData()
    const [applayjob,setApplayJob]=useState([])
    const [displayJob,setDisplayjob]=useState([])
    useEffect(()=>{
        const storJobId=getApply()
        if(allJob.length>0){
            const jobApply=allJob.filter(job=> storJobId.includes(job.id))
            setApplayJob(jobApply)
            setDisplayjob(jobApply)
           
        }
    },[allJob])

    const handleFilter=filter=>{
        if(filter==='All'){
            setDisplayjob(applayjob)
        }else if (filter==='Remote'){
            const remoteJob=applayjob.filter(job=>job.remote_or_onsite==='Remote')
            setDisplayjob(remoteJob)
        }else if(filter==='Onsite'){
            const onsite=applayjob.filter(job=>job.remote_or_onsite==='Onsite')
            setDisplayjob(onsite);
        }
    }
   
   


    return (
        <div className="bg-white">
        
        <h1 className="text-center text-4xl font-bold py-20 bg-gray-400 text-black">Applied Jobs</h1>
        <div className='text-right pt-5 px-5 mb-20 '>
               
            <div className=" w-12 ">
                <Select className=""
                    label="Filter"
                    animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                    }}
                >
                    <Option onClick={()=>handleFilter('All')} className="text-center">All</Option>
                    <Option onClick={()=>handleFilter('Remote')} className="text-center">Remote</Option>
                    <Option onClick={()=>handleFilter('Onsite')} className="text-center">Onsite</Option>
                    
                </Select>
            </div>


        </div>
        <div className="pb-10">
            {
                displayJob?.map(job=><ApplayJobDetails key={job.id} job={job}></ApplayJobDetails>)
            }
        </div>
        </div>
    );
};

export default AppliJob;