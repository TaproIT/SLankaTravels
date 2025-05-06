import FooterOne from "../../layouts/FooterOne";
import HeaderOne from "../../layouts/HeaderOne";
import AboutArea from "./AboutArea";
import BlogArea from "./BlogArea";
import ClientsArea from "./ClientsArea";
import CounterArea from "./CounterArea";
import CtaArea from "./CtaArea";
import FeaturesArea from "./FeaturesArea";
import FilterArea from "./FilterArea";
import HeroArea from "./HeroArea";
import TestimonialArea from "./TestimonialArea";
import TourArea from "./TourArea";
import TourPackages from "./TourPackages";
import VedioArea from "./VedioArea";

 

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroArea />
      <FilterArea />
      <TourArea />
      <AboutArea />
      <CounterArea />
      <TourPackages />
      <ClientsArea />
      <TestimonialArea />
      <FeaturesArea />
      <VedioArea />
      <BlogArea />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default HomeOne;