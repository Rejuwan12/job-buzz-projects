import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';
import logo from '../../../images/google.png'
import AppliedJobCard from "./AppliedJobCard";

const AppliedJob = () => {
    const data = useLoaderData();
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    console.log(data);

    return (
        <div>
        <Helmet>
          <title>JobBuzz | Applied Job</title>
        </Helmet>
        <div>
            <button onClick={() => toPDF()} className="btn ">Download PDF</button>
        </div>
            
      <div ref={targetRef}>
    
       <div>
       {
            data.map(job => <AppliedJobCard key={job._id
            } job={job}/>)
        }
       </div>
      </div>
      
       </div>
    );
};

export default AppliedJob;