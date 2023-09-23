import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle} from "react-icons/ai";
import { Link} from 'react-router-dom';
const FetureCard = ({feture}) => {
   
    const {id,logo,job_title,company_name,job_type,remote_or_onsite,salary,location}=feture
    return (
        <div className='bg-gray-200 text-black p-10 space-y-5'>
            <img src={logo} alt="" />
            <h1 className='text-2xl font-extrabold'>{job_title}</h1>
            <p className='text-xl font-semibold'>{company_name}</p>
            <div className='flex gap-4'>
                <button className='px-4 py-2 border border-[#7E90FE] text-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                <button className='px-4 py-2 border border-[#7E90FE] text-[#7E90FE] font-extrabold'>{job_type}</button>
            </div>
            <div className='flex items-center gap-5 '>
                <div className='flex items-center gap-2'>
                    <CiLocationOn className='text-2xl'></CiLocationOn>
                    <h1 className='text-xl font-medium'>{location}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineDollarCircle className='text-2xl'></AiOutlineDollarCircle>
                    <h1 className='text-xl font-medium'>{salary}</h1>
                </div>
            </div>
          
            <Link to={`/details/${id}`} >
                <button className='mt-5 px-4 py-2 font-extrabold text-xl bg-[#7E90FE] rounded-md'>View Details</button>
            </Link>
            
        </div>
    );
};
FetureCard.propTypes={
    feture: PropTypes.object.isRequired
}
export default FetureCard;