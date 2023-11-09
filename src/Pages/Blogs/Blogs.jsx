import { Helmet } from "react-helmet-async";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import Blog3 from "./Blog3";
import pic from '../../../images/bloggs.jpg'
import pic2 from '../../../images/nextJS.jpg'
import pic3 from '../../../images/explain.jpg'

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>JobBuzz | Blogs</title>
      </Helmet>
        <img className=" w-full h-[550px] object-cover" src={pic} alt="" />
        <BlogOne/>
        <img className=" w-full h-[550px] object-cover mt-8" src={pic2} alt="" />
        <BlogTwo/>
        <img className=" w-full h-[550px] object-cover mt-8" src={pic3} alt="" />
        <Blog3/>
    </div>
  );
};

export default Blogs;
