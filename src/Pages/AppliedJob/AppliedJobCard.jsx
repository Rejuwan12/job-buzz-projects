/* eslint-disable react/prop-types */


const AppliedJobCard = ({job}) => {
    console.log(job);
    const {
        posted_the_job,
        user_Name,
        cv_Link,
        Job_Title,
        cetegory,
        Posting_Date,
        
     Application_Deadline,
    Salary_range,

   
    img_url,
    user_Email

        } = job;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-[350px] h-[300px] border-r-2 rounded-xl object-cover' src={img_url} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Job_Title}</h2>
                <div className='flex items-center'>
                    <p>Posted By: <span className='font-bold'>{posted_the_job}</span></p>
                    <p>Applied By: <span className='font-bold'>{user_Name}</span></p>
                    <p className='bg-lime-500 text-lg font-semibold w-12 rounded-xl text-center'>{cetegory}</p>
                </div>
                <div>
                    <p>Salary Range: <span>$<span className='font-bold'>({Salary_range})</span> /year</span></p>
                </div>
                <div className='flex'>
                    <p className='flex-[1]'>Posted Date:<span className='font-bold'>{Posting_Date}</span></p>
                    <p className='flex-[2]'>Deadline: <span className='font-bold'>{Application_Deadline}</span></p>
                </div>
                <a href={cv_Link} className="link font-bold">Your Resume Link</a>
                <p>
                    Your Email: <span className='font-bold'>{user_Email}</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600 text-white font-bold">Applied</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCard;