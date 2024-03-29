import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import DetailsModal from "../Modal/DetailsModal";


const JobDetails = () => {
   const [showModal, setShowModal] = useState(false);

  const handleApply = () => {
  setShowModal(true)
  }
    const data = useLoaderData();
    const {posted_the_job,Job_Title,Salary_range,Applicants_Number,img_url,Details_Button}= data;
    console.log(Object.keys(data).toString());
    
    return (
     <div>
      <Helmet>
        <title>
          JobBuzz|Job Details
        </title>
      </Helmet>
         <div className="card card-compact   bg-base-100 border">
  <div className="card-body">
  <figure><img src={img_url} className="w-full h-[520px] sm:object-cover p-8 " alt="Shoes" /></figure>
    <h2 className="card-title">Job Title: {Job_Title}</h2>
    <p>Post By: {posted_the_job}</p>
    <p>Salary Range: {Salary_range} Per Year</p>
    <p>Application Number: {Applicants_Number}</p>
    <p>Job Details: {Details_Button}</p>
    <div className="card-actions justify-end">
      <Link><button onClick={handleApply} className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div> 
   <DetailsModal data={data} showModal={showModal} setShowModal={setShowModal}>

   </DetailsModal>
</div>
     </div>
    );
};

export default JobDetails;