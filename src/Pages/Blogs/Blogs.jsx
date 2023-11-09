import { Helmet } from "react-helmet-async";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import Blog3 from "./Blog3";


const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>JobBuzz | Blogs</title>
      </Helmet>

        <BlogOne/>
        <BlogTwo/>
        <Blog3/>
    </div>
  );
};

export default Blogs;
