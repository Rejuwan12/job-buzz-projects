import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const data = useLoaderData();
    const {posted_the_job,Job_Title,Salary_range,Applicants_Number,img_url,Details_Button}= data;
    console.log(data);
    return (
     <div>
      <Helmet>
        <title>
          JobBuzz|Job Details
        </title>
      </Helmet>
         <div className="card card-compact   bg-base-100 border">
  <div className="card-body">
  <figure><img src={img_url} className="w-full h-[420px] object-cover" alt="Shoes" /></figure>
    <h2 className="card-title">Job Title: {Job_Title}</h2>
    <p>Post By: {posted_the_job}</p>
    <p>Salary Range: {Salary_range} Per Year</p>
    <p>Application Number: {Applicants_Number}</p>
    <p>Job Details: {Details_Button}</p>
    <div className="card-actions justify-end">
      <Link><button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>
     </div>
    );
};

export default JobDetails;