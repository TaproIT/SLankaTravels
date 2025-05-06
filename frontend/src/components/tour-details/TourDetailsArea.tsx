 
// import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';


import img_1 from "../../../public/assets/img/tdetails/1.jpg";
import img_2 from "../../../public/assets/img/tdetails/2.jpg";
import img_3 from "../../../public/assets/img/tdetails/3.jpg";
import img_4 from "../../../public/assets/img/tdetails/4.jpg";
import img_5 from "../../../public/assets/img/tdetails/5.jpg";  
// import Slider from './Slider';

const images = [
  img_1, img_2, img_3, img_4, img_5,
  img_1, img_2, img_3, img_4, img_5,
]; 



const TourDetailsArea = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);





  return (
    <>
      		<section className="tour_details section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-12 wow fadeIn">
						<div className="single_tour_details">
							<div className="tdetails_meta">
								<span className="tmeta">
									<i className="fa-solid fa-map-location-dot"></i> Basel city in Northwest Switzerland
								</span>		

								<span className="tmeta">
									<i className="fa-regular fa-clock"></i> 5 days 4 Nights
								</span>		
							</div>  
 

 
    <div className="stour_image"> 
			{/* thumbs={{ swiper: thumbsSwiper }} */}
      <Swiper
        loop={true}
        spaceBetween={10} 
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: '.slick-next',
          prevEl: '.slick-prev',
        }}
        className="tour_slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`} 
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      <button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
      <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>

      </Swiper>
  

      {/* <Swiper
        onSwiper={setThumbsSwiper}
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
          <SwiperSlide key={index} className="thumb-slide" style={{cursor: 'pointer'}}>
            <img
              src={image}
              alt={`Thumb ${index + 1}`}               
              className="thumb-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>  */}
			{/* <Slider setThumbsSwiper={setThumbsSwiper} /> */}



   
    </div>
 
 
 



							
							<div className="tour_entry_content">
								<h3 className="tdtitle">About This Tour</h3>
								<p>Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempo Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Seddo Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur a dipisicing elit at leo dignissim congue.
								 sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempo Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. </p>							
							</div>
							
							 
							<div className="tour-map">		
								<iframe height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50431.01496117057!2d144.9372018671769!3d-37.81441383014957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1572172541109!5m2!1sen!2sbd"></iframe>
							</div>
												
						</div>					
					</div>
					
					<div className="col-lg-4 col-12 wow fadeIn">
						<div className="tour_widget">
							<h2 className="tw_title">Tour Information</h2>
							<ul className="tw_info">
								<li><span>Country:</span> Switzerland</li>
								<li><span>Language:</span> English</li>
								<li><span>Currency:</span> Dollar</li>
								<li><span>Area:</span> 5500km3</li>
								<li><span>Time:</span> June, April, May, September </li>
							</ul>
							
							<div className="tw_price">
								<h3>Package Price: <span>$780</span></h3>
							</div>
							<h2 className="tw_title">Extra Services</h2>
							<ul className="textra_service">
								<li><i className="ph ph-bed"></i> Delux Room</li>
								<li><i className="ph ph-swimming-pool"></i> Swimming Pool</li>
								<li><i className="ph ph-barbell"></i> Gym</li>
								<li><i className="ph ph-wifi-high"></i> Free Wifi</li>
							</ul>
						</div>
						
						<div className="booking_form tour_widget">
							<h2 className="tw_title">Tour Booking Form</h2>
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="check_in">
									<label htmlFor="checkin_field">Check - In*</label>
									<div className="trdate_picker date" id="tr_dpicker1">
										<input type="text" className="form-control" placeholder="Check In Date" id="checkin_field"/>
										<span className="input-group-append">
											<i className="fa-solid fa-calendar-days"></i>
										</span>
									</div>
								</div>		

								<div className="check_out">
									<label htmlFor="checkout_field">Check - Out*</label>
									<div className="trdate_picker date" id="tr_dpicker2">
										<input type="text" className="form-control" placeholder="Check Out Date" id="checkout_field"/>
										<span className="input-group-append">
											<i className="fa-solid fa-calendar-days"></i>
										</span>									
									</div>
								</div>		

								<div className="adut_box">
									<label>Adult*</label>
									<select>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
									</select>
								</div>
								
								<button type="submit">Booking Now <i className="ph ph-arrow-right"></i></button>
							</form>	
						</div>											
					</div> 
				</div> 
			</div> 
		</section>
		 
		
		 
		<section className="related-tour pb100">
			<div className="container">
				<div className="row">
					<div className="col-xl-12 text-center wow fadeInUp">
						<div className="section-heading">
							<span>Related Tour</span>
							<h2>Amazing Tour Places</h2>
						</div>
					</div> 		
				</div>	
				
				<div className="row">
					<div className="col-xl-4 col-md-6 col-12 wow fadeInUp">
						<div className="package_item">
							<div className="pack_image">
								<img src="assets/img/tour/1.jpg" alt="img" />
								<div className="pac_badge">
									<span className="feat">Featured</span>
									<span className="day">5 Days</span>
								</div>
								
								<Link to="/tour-details" className="tour_btn"><i className="fa-regular fa-eye"></i></Link>
							</div>	
							
							<div className="pack_content">
								<h3><Link to="/tour-details">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</Link></h3>
								<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
								<div className="pack_btm d-flex">
									<span className="pack_price">$245 / <small>Person</small></span>
									<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
								</div>
							</div>				
						</div>
					</div> 			

					<div className="col-xl-4 col-md-6 col-12 wow fadeInUp">
						<div className="package_item">
							<div className="pack_image">
								<img src="assets/img/tour/2.jpg" alt="img" />
								<div className="pac_badge">
									<span className="feat">Featured</span>
									<span className="day">5 Days</span>
								</div>
								
								<Link to="/tour-details" className="tour_btn"><i className="fa-regular fa-eye"></i></Link>
							</div>	
							
							<div className="pack_content">
								<h3><Link to="/tour-details">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</Link></h3>
								<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
								<div className="pack_btm d-flex">
									<span className="pack_price">$245 / <small>Person</small></span>
									<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
								</div>
							</div>				
						</div>
					</div> 

					<div className="col-xl-4 col-md-6 col-12 wow fadeInUp">
						<div className="package_item">
							<div className="pack_image">
								<img src="assets/img/tour/3.jpg" alt="img" />
								<div className="pac_badge">
									<span className="feat">Featured</span>
									<span className="day">5 Days</span>
								</div>
								
								<Link to="/tour-details" className="tour_btn"><i className="fa-regular fa-eye"></i></Link>
							</div>	
							
							<div className="pack_content">
								<h3><Link to="/tour-details">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</Link></h3>
								<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
								<div className="pack_btm d-flex">
									<span className="pack_price">$245 / <small>Person</small></span>
									<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
								</div>
							</div>				
						</div>
					</div> 	
				</div>	
			</div>
		</section>
    </>
  );
};

export default TourDetailsArea;
 