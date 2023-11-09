
import section from '../../../../images/section1.jpg'
const Section1 = () => {
    return (
        <div>
            <div className='mt-4 mb-6 text-center flex justify-center'>
            <img  className=' w- full h-[200px] lg:h-[400px]' src={section} alt="" />
        </div>
        <div className='text-center text-4xl font-bold mt-4 mb-4'>
            <h1>Our Success Story</h1>
        </div>
        </div>
    );
};

export default Section1;