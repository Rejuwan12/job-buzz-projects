import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const CetegoryCard = ({ data }) => {
    const {user}= useAuth();
    const {_id,posted_the_job,Job_Title,Posting_Date,Application_Deadline,Salary_range,Applicants_Number,img_url, cetegory}= data;

    

    const handleDetails = () => {
      // const toastId = toast.loading('login first')
      if(!user){
        toast.error('please login first')
      }
    }
    return (
        <div className="card card-compact w-96  bg-base-100 border">
  <div className="card-body">
  <motion.figure 
  initial={{ scale: 2 }}
  animate={{ rotate: 360, scale: 1,  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    
  }}><img src={img_url} className="w-full h-[220px] object-cover" alt="Shoes" /></motion.figure>
    <h2 className="card-title"> {Job_Title}</h2>
    <p> Post By: {posted_the_job}</p>
    <p> Job Type: {cetegory}</p>
    <p>Date: {Posting_Date}</p>
    <p>Deadline: {Application_Deadline}</p>
    <p>Salary Range: {Salary_range}Per Year</p>
    <p>Application Number: {Applicants_Number}</p>
    <div className="card-actions justify-end">
      <Link to={`/cetegorys/${_id}`}><button onClick={handleDetails} className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default CetegoryCard;
 