/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const {user} = useAuth();

   const updateData = useLoaderData();

   const {
    posted_the_job,
    email,
    _id,
    Job_Title,
    cetegory,
    Posting_Date,
    Application_Deadline,
    Salary_range,
    Applicants_Number,
    Details_Button,
    img_url} = updateData;
    
//    console.log(updateData);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const posted_the_job = form.name.value;
        const Job_Title = form.title.value;
        const cetegory = form.cetegory.value;
        const Posting_Date = form.date.value;
        const Application_Deadline = form.deadline.value;
        const Salary_range = form.salary.value;
        const Applicants_Number = form.number.value;
        const Details_Button = form.description.value;
        const img_url = form.photo.value;
        form.reset();
    
        const newJob = {
          posted_the_job,
          Job_Title,
          cetegory,
          Posting_Date,
          Application_Deadline,
          Salary_range,
          Applicants_Number,
          Details_Button,
          img_url,
          email: user.email
        };
    
        
    
    
    
        fetch(`http://localhost:5000/api/v1/cetegorys/${_id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire(
            {
            title: "Updated",
            text: "Update Successfully",
            icon: "success",
            confirmButtonText: "Done"
            }
          )}

    })
      };
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div>
        <Helmet>
                    <title>Job Buzz | Update Job</title>
                </Helmet>
         <div className="bg-[#F4F3F0] p-24">
          <div>
            <h1 className="text-3xl font-bold text-center">Update Job</h1>
            <p className="text-center mb-10">Enter your details to Update a Job</p>
          </div>
          <form onSubmit={handleAddJob}>
            {/* form name and quantity row */}
            <div className="md:flex gap-8 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold"> User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="input input-bordered w-full"
                    defaultValue={posted_the_job}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Job Title</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    className="input input-bordered w-full"
                    defaultValue={Job_Title}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Job Cetegory</span>
                </label>
                <label className="input-group">
                  <select
                    name="cetegory"
                    id=""
                    className=" input input-bordered w-full"
                    defaultValue={cetegory}
                  >
                    <option value="Remote">Remote</option>
                    <option value="On Time Job">On Site Job</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Mern Stack">Mern Stack</option>
                  </select>
                </label>
              </div>
            </div>
    
            {/* form supplier test row */}
    
            <div className="md:flex gap-8 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Salary Range</span>
                </label>
                <label className="input-group">
                  <input
                    name="salary"
                    type="text"
                    placeholder="Salary Range"
                    className="input input-bordered w-full"
                    defaultValue={Salary_range}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Posting Date</span>
                </label>
                <label className="input-group">
                  <DatePicker          
                    name="date"
                    className=" input input-bordered w-full"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    defaultValue={Posting_Date}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Deadline</span>
                </label>
                <label className="input-group">
                  <DatePicker
                    name="deadline"
                    className=" input input-bordered w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    defaultValue={Application_Deadline}
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex gap-8 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Application Number
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    defaultValue={Applicants_Number}
                    name="number"
                    placeholder="Rating"
                    className="input input-bordered w-full"
                   
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold">Job Description</span>
                </label>
                <label className="input-group">
                  <textarea
                    className="textarea  input input-bordered w-full h-[100px]  "
                    name="description"
                    placeholder="Description"
                    defaultValue={Details_Button}
                  ></textarea>
                </label>
              </div>
            </div>
            {/* form photo url row */}
            <div className="">
              <div className="form-control md:w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="
                      Photo URL link"
                    className="input input-bordered w-full"
                    defaultValue={img_url}
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Job"
              className="btn btn-block bg-black border-none text-white"
            />
          </form>
        </div>
       </div>
    );
};

export default Update;