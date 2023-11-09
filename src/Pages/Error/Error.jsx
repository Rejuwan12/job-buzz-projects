import { Link } from 'react-router-dom';
import error from '../../../images/404.jpg'

const Error = () => {
    return (
        <div>
            
            <img className='lg:min-h-screen min-h-screen  w-full p-8' src={error} alt="" />
            <div>
            <Link to="/"><button className='btn btn-secondary ml-[140px] lg:ml-[690px]'> Go Home</button></Link>
            </div>
        </div>
    );
};

export default Error;