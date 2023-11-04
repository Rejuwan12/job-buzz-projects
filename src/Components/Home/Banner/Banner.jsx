import banner from '../../../../images/banner.jpg'
import { AiOutlineSearch } from "react-icons/ai";
const Banner = () => {
    return (
       <div className='space-x-14'>
         <div className='relative'>
            <img src={banner} className='w-full h-[525px]' alt="" />
        </div>
        <div className='absolute top-[220px] text-white'>
            <h1 className='text-4xl text-green-200  font-bold flex ml-[200px] '>Find Your Job
             And  <br /> Make Sure Goal</h1>
            <p className='ml-[200px] font-normal text-yellow-400' > Whatever your life’s work is, do it well. <br /> A man should do his job so well that the living, the dead, <br /> and the unborn could do it no better.</p>
            <div>
            <form>
            <input type="text" placeholder='Search Your Job' className="input border-none w-full ml-[200px] relative text-black  " />
            <div>
                <button type='submit' className='ml-[760px] text-lg p-3 rounded-lg bg-green-400 absolute text-black -mt-[45px]'><AiOutlineSearch/></button>
            </div>
            </form>
            </div>
        </div>
       </div>
    );
};

export default Banner;