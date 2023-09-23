
import PropTypes from 'prop-types';
const JobCard = ({data}) => {
    
    const {category_name,availability,logo}=data
    return (
        <div className='bg-gray-300 text-black p-10 space-y-4'>
            <img src={logo} alt="" />
            <div>
            <h1 className='text-xl font-extrabold '>{category_name}</h1>
            <p>{availability}</p>
            </div>
        </div>
    );
};
JobCard.propTypes={
    data: PropTypes.object.isRequired
}
export default JobCard;