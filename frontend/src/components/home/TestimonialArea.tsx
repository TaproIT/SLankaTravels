 
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialArea = () => {
  return (
    <>
      		<section className="testimonials" style={{backgroundImage: "url(/assets/img/bg/rev_bg.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 wow fadeInLeft">
						<div className="testimonials_image">
							<div className="row">
								<div className="col-sm-6 text-center">
									<img src="assets/img/review/1.png" className="test_image1" alt="img" />
									<img src="assets/img/review/2.png" className="test_image3" alt="img" />
								</div>
								
								<div className="col-sm-6 align-self-center text-center">
									<img src="assets/img/review/3.png" className="test_image2" alt="img" />
									<div className="test_arrow">
										<span className="tarrow_left"><i className="ph ph-arrow-left"></i></span>
										<span className="tarrow_right"><i className="ph ph-arrow-right"></i></span>
									</div>	
								</div>	
	
							</div>
						</div>
					</div>	

					<div className="col-lg-6 align-self-center overflow wow fadeInRight">
						<div className="section-heading mb-40 position-relative">
							<span>Testimonials</span>
							<h2>Our Valuable Customer Says</h2>
							<hr />
							<img src="assets/img/icons/quote.svg" className="test_quote" alt="" />
						</div>
						
						<Swiper 
							spaceBetween={30}
							loop={true}
							slidesPerView={1}
							navigation={{
								nextEl: '.tarrow_right',
								prevEl: '.tarrow_left',
							}} 
							modules={[Navigation]}
							
							className="test_slider"> 
								<SwiperSlide className="swiper-slide">
									<div className="testimonials_item">
										<div className="test_rating">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										
										<p>
											“ Contrary to popular belief, Lorem Ipsum is not simply 
											random text. It  has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ”																									
										</p>
										<h4>Masum Billah</h4>
										<span className="designation">CEO of ABC LTD</span>
									</div>
								</SwiperSlide>	

								<SwiperSlide className="swiper-slide">
									<div className="testimonials_item">
										<div className="test_rating">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										
										<p>
											“ Contrary to popular belief, Lorem Ipsum is not simply 
											random text. It  has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ”																									
										</p>
										<h4>Muntasir Billah</h4>
										<span className="designation">CEO of ABC LTD</span>
									</div>
								</SwiperSlide>							

								<SwiperSlide className="swiper-slide">
									<div className="testimonials_item">
										<div className="test_rating">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										
										<p>
											“ Contrary to popular belief, Lorem Ipsum is not simply 
											random text. It  has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ”																									
										</p>
										<h4>Mutasim Billah</h4>
										<span className="designation">CEO of ABC LTD</span>
									</div>
								</SwiperSlide> 
						</Swiper>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default TestimonialArea;