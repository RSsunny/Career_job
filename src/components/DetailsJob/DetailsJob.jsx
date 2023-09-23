import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplidJob } from "../../Utility/LocalStorage";

const DetailsJob = () => {
    const jobDetails=useLoaderData()
    const {id}=useParams()
    const intId=parseInt(id)
    const job=jobDetails.find(job=>job.id===intId) 
    const {job_description,job_responsibility,experiences,salary,job_title,contact_information,educational_requirements}=job
    const {phone, email ,address}=contact_information
    console.log(job);
    const handleApply=()=>{
        saveApplidJob(intId)
        toast('you have applied')
    }
    return (
        <>
        <h1 className="text-center text-4xl font-bold py-20 bg-gray-400 text-black">Job Details</h1>
        <div className="flex gap-5 md:py-20 lg:px-32 bg-white text-black">
            <div className="basis-8/12 space-y-6">
                <p><span className="text-xl font-bold">Job Description:</span> {job_description}</p>
                <p><span className="text-xl font-bold">Job Responsibility:</span> {job_responsibility}</p>
                <p><span className="text-xl font-bold">Educational Requirements:</span>{educational_requirements}</p>
                <p><span className="text-xl font-bold">Experiences:</span> {experiences}</p>
            </div>
            <div className="basis-4/12 bg-blue-200 px-4 py-4">
                <h1 className="border-b border-black py-3 text-center  text-xl mb-5">Job Details</h1>
                <div>
                    <h1 className="">Salary: {salary} (Per Month)</h1>
                    <h1 className=" my-1">Job Title :{job_title} </h1>
                </div>
                <h1 className=" my-1">Contact Information</h1>
                <div>
                    <h1 className=" my-1">Phone :{phone}</h1>
                    <h1 className=" my-1">Email : {email}</h1>
                    <h1 className=" my-1">Address: {address}</h1>
                </div>
                <div  className="text-center mt-5">
                    <button onClick={handleApply} className="bg-[#7E90FE] px-6 py-2 font-bold text-xl rounded-md text-black">Apply Now</button>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
        </>
     
    );
};

export default DetailsJob;