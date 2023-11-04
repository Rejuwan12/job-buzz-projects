import error from '../../../images/404.jpg'

const Error = () => {
    return (
        <div>
            <img className='lg:min-h-screen p-8' src={error} alt="" />
        </div>
    );
};

export default Error;