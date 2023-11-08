import axios from "axios";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";
import { AiOutlineSearch } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/cetegorys")
      .then((res) => setTotalData(res.data));
  }, []);
  console.log(totalData);

  const handleSearchJobs = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredJob = totalData.filter(
      (blog) => blog.Job_Title.toLowerCase() === enteredSearchValue
    );

    setTotalData(filteredJob);
  };

  return (
    <div>
        <Helmet>
            <title> JobBuzz | All Jobs</title>
        </Helmet>
      <div className="p-8 bg-[#c5b1bbcc] text-center mb-5 mt-4">
        <form onSubmit={handleSearchJobs}>
          <input
            type="text"
            name="search"
            placeholder="Search Your Job"
            className="input border-none w-[550px] ml-[px] relative text-black  "
          />
          <div>
            <button
              type="submit"
              className="ml-[220px] text-lg p-3 rounded-lg bg-green-400 absolute text-black -mt-[45px]"
            >
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
      <div>
        {totalData?.map((data) => (
          <AllJobTable key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
