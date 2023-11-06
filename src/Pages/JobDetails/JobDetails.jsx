import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const data = useLoaderData();
    const {_id,posted_the_job,Job_Title,Posting_Date,Application_Deadline,Salary_range,Applicants_Number,img_url}= data;
    console.log(data);
    return (
        <div className="card card-compact   bg-base-100 border">
  <div className="card-body">
  <figure><img src={img_url} className="w-full h-[420px] object-cover" alt="Shoes" /></figure>
    <h2 className="card-title">Job Title: {Job_Title}</h2>
    <p> Post By: {posted_the_job}</p>
    <p>Date: {Posting_Date}</p>
    <p>Deadline: {Application_Deadline}</p>
    <p>Salary Range: {Salary_range}</p>
    <p>Application Number: {Applicants_Number}</p>
    <div className="card-actions justify-end">
      <Link><button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobDetails;