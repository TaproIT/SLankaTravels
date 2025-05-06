import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import TourDetailsArea from "./TourDetailsArea";

 

const TourDetails = () => {
  return (
    <>
            <HeaderOne />
      <Breadcrumb title="Tour Details" subtitle="Tour Details" />
       <TourDetailsArea />
      <FooterOne />
    </>
  );
};

export default TourDetails;