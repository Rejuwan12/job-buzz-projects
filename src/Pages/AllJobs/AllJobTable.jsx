import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const AllJobTable = ({data}) => {
    const {_id,posted_the_job,Job_Title,Posting_Date,Application_Deadline,Salary_range}= data;
    return (
       <div>
        <Helmet>
          <title>JobBuzz | All Job Title</title>
        </Helmet>
         <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-center" >             
              <th>Name</th>
              <th>Job</th>
              <th>Salary Range</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200 text-center">  
             <td>{posted_the_job}</td>
              <td>{Job_Title}</td>
              <td>{Salary_range}</td>
              <td>{Posting_Date}</td>
              <td>{Application_Deadline}</td>
              <td><Link to={`/cetegorys/${_id}`}><button className="btn btn-sm">Details</button></Link></td>
            </tr> 
          </tbody>
        </table>
      </div>
       </div>
    );
};

export default AllJobTable;