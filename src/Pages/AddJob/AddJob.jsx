import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div className="bg-[#F4F3F0] p-24">
        <div>
          <h1 className="text-3xl font-bold text-center">Add a Job</h1>
          <p className="text-center mb-10">Enter your details to Add a Job</p>
        </div>
        <form>
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
                  name="name"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Job Cetegory</span>
              </label>
              <label className="input-group">
              <select
                  name="brand"
                  id=""
                  className=" input input-bordered w-full"
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
                  name="price"
                  type="number"
                  placeholder="Salary Range"
                  className="input input-bordered w-full"
                />
              </label>
              
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Posting Date</span>
              </label>
              <label className="input-group">
              <DatePicker className=" input input-bordered w-full" selected={endDate} onChange={(date) => setEndDate(date)} />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Deadline</span>
              </label>
              <label className="input-group">
              <DatePicker className=" input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-8 mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Application Number</span>
              </label>
              <label className="input-group">
             
                <input
                  type="number"
                  defaultValue={'0'}
                  name="rating"
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
              <textarea className="textarea  input input-bordered w-full h-[100px]  " name="details" placeholder="Bio"></textarea>
              
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
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Job"
            className="btn btn-block bg-black border-none text-white"
          />
        </form>
      </div>
    );
};

export default AddJob;