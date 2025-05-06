import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/home/HomeOne";
import About from "./components/about/About";
import Tour from "./components/tour/Tour";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blog-details/BlogDetails";
import TourDetails from "./components/tour-details/TourDetails";
import ErrorBoundary from "./components/common/ErrorBoundary";
import CustomError from "./components/common/CustomError";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },
	{ path: "/about", element: <About /> },
	{ path: "/tour", element: <Tour /> },
	{ path: "/services", element: <Services /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/blog-details", element: <BlogDetails /> },
	{
		path: "/tour-details",
		element: <TourDetails />,
		errorElement: <CustomError />,
	},
	{ path: "/contact", element: <Contact /> },

	// { path: "*", element: <NotFound /> },
]);

function App() {
	return (
		<ErrorBoundary>
			<Wrapper>
				<RouterProvider router={router} />
			</Wrapper>
		</ErrorBoundary>
	);
}

export default App;
