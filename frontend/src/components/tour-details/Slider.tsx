 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


import img_1 from "../../../public/assets/img/tdetails/1.jpg";
import img_2 from "../../../public/assets/img/tdetails/2.jpg";
import img_3 from "../../../public/assets/img/tdetails/3.jpg";
import img_4 from "../../../public/assets/img/tdetails/4.jpg";
import img_5 from "../../../public/assets/img/tdetails/5.jpg"; 

const images = [
  img_1, img_2, img_3, img_4, img_5,
  img_1, img_2, img_3, img_4, img_5,
]; 

 

const Slider = ({ setThumbsSwiper }: { setThumbsSwiper: (swiper: any) => void }) => {
    // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  
  return (
    <>
      
<Swiper
                    onSwiper={setThumbsSwiper} // Set thumbsSwiper state on initialization
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    centerInsufficientSlides={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="tour_slider_nav text-center"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index} className="thumb-slide" style={{ cursor: 'pointer' }}>
                        <img
                          src={image}
                          alt={`Thumb ${index + 1}`}
                          className="thumb-img"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
    </>
  );
};

export default Slider;