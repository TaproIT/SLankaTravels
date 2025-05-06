import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import FilterArea from "../home/FilterArea";
import TourPackages from "../home/TourPackages";

const Tour = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb
				style_2={true}
				title="Tour Packages"
				subtitle="Tour Packages"
			/>
			<FilterArea />
			<TourPackages style_2={true} />
			<FooterOne />
		</>
	);
};

export default Tour;
