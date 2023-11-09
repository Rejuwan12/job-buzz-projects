import banner from '../../../../images/bannerr.jpg'
import { AiOutlineSearch } from "react-icons/ai";
const Banner = () => {
    return (
       <div className='space-x-14'>
         <div className='relative'>
            <img src={banner} className='w-full h-[250px] object-cover lg:h-[625px]' alt="" />
        </div>
        <div className='absolute lg:top-[270px] top-[120px] text-white'>
            <h1 className='lg:text-5xl text-2xl ml-4  top-8 text-green-200 font-bold flex lg:ml-[350px] '>The Easiest Way To <br /> Get Your New Job
            </h1>
            <p className='lg:ml-[330px] lg:mt-2  lg:mb-2 p-2 font-normal text-yellow-400' > Whatever your life’s work is, do it well.  A man should do his job <br /> so well that the living, the dead, and the unborn could do it no better.</p>
            <div>
            <form>
            <input type="text" placeholder='Search Your Job' className="input border-none lg:w-[470px] lg:ml-[340px] relative text-black  " />
            <div>
                <button type='submit' className='lg:ml-[760px] ml-[200px] -mt-[48px] text-lg p-[14px] lg:p-[16px] rounded-r-lg bg-[#b5463c]  absolute text-black lg:-mt-[49px]'><AiOutlineSearch/></button>
            </div>
            </form>
            </div>
           
        </div>
        <div className='text-center text-4xl font-bold mt-4'>
            <h1>Jobs By Cetegory</h1>
        </div>
       </div>
        
    );
};

export default Banner;