import { Link } from "react-router-dom";


const CetegoryCard = ({ data }) => {
    const {_id,posted_the_job,Job_Title,Posting_Date,Application_Deadline,Salary_range,Applicants_Number,img_url}= data;
    
    return (
        <div className="card card-compact w-96  bg-base-100 border">
  <div className="card-body">
  <figure><img src={img_url} className="w-full h-[220px] object-cover" alt="Shoes" /></figure>
    <h2 className="card-title"> {Job_Title}</h2>
    <p> Post By: {posted_the_job}</p>
    <p>Date: {Posting_Date}</p>
    <p>Deadline: {Application_Deadline}</p>
    <p>Salary Range: {Salary_range}Per Year</p>
    <p>Application Number: {Applicants_Number}</p>
    <div className="card-actions justify-end">
      <Link to={`/cetegorys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default CetegoryCard;
 