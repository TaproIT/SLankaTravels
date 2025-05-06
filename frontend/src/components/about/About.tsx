import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import AboutArea from "../home/AboutArea";
import ClientsArea from "../home/ClientsArea";
import CounterArea from "../home/CounterArea";
import CtaArea from "../home/CtaArea";
import FeaturesArea from "../home/FeaturesArea";
import TestimonialArea from "../home/TestimonialArea";
import VedioArea from "../home/VedioArea";

 

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About" subtitle="About" />
      <AboutArea />
      <CounterArea style_2={true} />
      <ClientsArea />
      <TestimonialArea />
      <FeaturesArea />
      <VedioArea />
      <CtaArea style_2={true} />
      <FooterOne />
    </>
  );
};

export default About;