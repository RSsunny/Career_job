
import PropTypes from 'prop-types';
const Title = ({title,details }) => {
    return (
        <div className="text-center space-y-4 mb-10 mt-20">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="">{details}</p>
        </div>
    );
};
Title.propTypes={
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,

}
export default Title;