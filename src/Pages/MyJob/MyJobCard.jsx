/* eslint-disable react/prop-types */

import { reload } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobCard = ({ job }) => {
  const {
    posted_the_job,
    _id,
    cv_Link,
    Job_Title,
    cetegory,
    Posting_Date,
    Application_Deadline,
    Salary_range,
    img_url,
  } = job;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/api/v1/cetegorys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Delete",
            text: "Deleted successfully",
            icon: "question",
            confirmButtonText: "Done",
          }).then(() => {
            location.reload();
          });
        }
      });
  };
  return (
    <div>
      <div>
        <Helmet>
          <title>JobBuzz | All Job Title</title>
        </Helmet>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[350px] h-[300px] border-r-2 rounded-xl"
              src={img_url}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{Job_Title}</h2>
            <div className="flex items-center">
              <p>
                Posted By: <span className="font-bold">{posted_the_job}</span>
              </p>

              <p className="bg-[#88bc49a4] text-lg font-semibold w-12 rounded-xl text-center">
                {cetegory}
              </p>
            </div>
            <div>
              <p>
                Salary Range:{" "}
                <span>
                  $<span className="font-bold">({Salary_range})</span> /year
                </span>
              </p>
            </div>
            <div className="flex">
              <p className="flex-[1]">
                Posted Date:<span className="font-bold">{Posting_Date}</span>
              </p>
              <p className="flex-[2]">
                Deadline:{" "}
                <span className="font-bold">{Application_Deadline}</span>
              </p>
            </div>
            <a href={cv_Link} className="link font-bold">
              Your Resume Link
            </a>

            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn bg-red-600 text-white font-bold"
              >
                Delete
              </button>
              <Link to={`/update/${_id}`}>
                <button className="btn bg-green-500 text-white">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobCard;
