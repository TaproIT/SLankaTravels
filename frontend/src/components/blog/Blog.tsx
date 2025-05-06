import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import BlogArea from "./BlogArea";

const Blog = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Blog" subtitle="Blog" />
			<BlogArea />
			<FooterOne />
		</>
	);
};

export default Blog;
