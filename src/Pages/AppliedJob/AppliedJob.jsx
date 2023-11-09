import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';

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
        <div className="flex justify-end p-4 ">
            <button onClick={() => toPDF()} className="btn btn-outline  text-red-600">Download PDF</button>
        </div>
            
      <div ref={targetRef}>
    
       <div className="mt-4 mb-4">
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