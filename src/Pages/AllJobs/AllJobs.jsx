import axios from "axios";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";
import { AiOutlineSearch } from "react-icons/ai";


const AllJobs = () => {
    const [totalData , setTotalData] = useState([]);
    
  
    useEffect(()=>{
      axios.get('http://localhost:5000/api/v1/cetegorys')
      .then(res => setTotalData(res.data))
    },[])
    console.log(totalData);
    // const filterData = totalData?.filter(data => data.Job_Title == tabData);
    // console.log(filterData);
    return (
       <div>
       <div className="p-8 bg-gray-500 text-center mb-5 mt-4">
       <form>
            <input type="text" placeholder='Search Your Job' className="input border-none  w-[550px] ml-[px] relative text-black  " />
            <div>
                <button type='submit' className='ml-[220px] text-lg p-3 rounded-lg bg-green-400 absolute text-black -mt-[45px]'><AiOutlineSearch/></button>
            </div>
            </form>
       </div>
        <div>
        {
            totalData?.map(data => <AllJobTable key={data._id} data={data}/>)
        }
        </div>
       </div>
    );
};

export default AllJobs;