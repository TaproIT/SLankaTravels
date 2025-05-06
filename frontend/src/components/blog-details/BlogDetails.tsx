import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import BlogDetailsArea from "./BlogDetailsArea";

 

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
       <BlogDetailsArea />
      <FooterOne />
    </>
  );
};

export default BlogDetails;