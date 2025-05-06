import { useEffect } from "react";
import Preloader from "../components/common/Preloader";
import BackToTop from "../components/common/ScrollToTop";

import WOW from "wow.js";
// import "animate.css";
 
const Wrapper = ({ children }: any) => {

  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow", // Default class for animations
      animateClass: "animated", // Class to trigger animations
      offset: 0, // Distance before triggering animation
      mobile: true, // Enable on mobile devices
      live: true, // Apply to dynamically added elements
    });

    wow.init();

    return () => {
      wow.sync();
    };
  }, []);


	return <>
  <Preloader />
  {children}
  <BackToTop />
  
  </>;
};

export default Wrapper;
