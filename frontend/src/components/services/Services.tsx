import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ClientsArea from "../home/ClientsArea";
import CounterArea from "../home/CounterArea";
import CtaArea from "../home/CtaArea";
import FeaturesArea from "../home/FeaturesArea";
import TestimonialArea from "../home/TestimonialArea";
import VedioArea from "../home/VedioArea";

 

const Services = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Services" subtitle="Services" />
      <FeaturesArea style_2={true} />
      <CounterArea style_3={true} />
      <ClientsArea />
      <TestimonialArea />
      <VedioArea />
      <CtaArea style_2={true} /> 
      <FooterOne />
    </>
  );
};

export default Services;