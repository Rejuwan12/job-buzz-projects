import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import MyJobCard from "./MyJobCard";



const MyJob = () => {
    const {user} = useAuth();

  const [myJobs , setMyJobs]= useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/cetegorys?email=${user.email}`)
        .then(res => setMyJobs(res.data))
    },[user])
    console.log(myJobs);
  
    return (
        <div>
            <Helmet>
                <title>JobBuzz | My Job</title>
            </Helmet>
            <div className="mt-4 mb-4 py-4">
                {
                    myJobs.map(job => <MyJobCard key={job._id} job={job}/> )
                }
            </div>
        </div>
    );
};

export default MyJob;