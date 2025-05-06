 
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import tour_data from '../../data/tour-data';

const TourArea = () => {
  return (
    <>
    <section className="travel_category pb100 wow fadeInUp">
			<div className="container">
        <div className="row">
         <div className="col-sm-6">
						<div className="section-heading">
							<span>Popular Destination</span>
							<h2>Trendy Travel  Locations</h2>
						</div>
					</div>

          <div className="col-sm-6 text-sm-end align-self-center">
            <div className="tour_cat_arrw">
              <button type="button" className="tvrprev">
                <i className="ph ph-arrow-left"></i>
              </button>
              
              <button type="button" className="tvrnext">
                <i className="ph ph-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

				<div className="row">
					<div className="col-12">
						<Swiper
              spaceBetween={30} 
              slidesPerView={6} 
              loop={true}
              navigation={{
                nextEl: '.tvrnext',
                prevEl: '.tvrprev',
              }}
              modules={[Navigation]}
              breakpoints={ {
                0: {
                  slidesPerView: 1,
                  navigation: false,
                },
                440: {
                  slidesPerView: 2,
                  navigation: false,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1199: {
                  slidesPerView: 6,
                },
              }}
             className="trcategory_slider">
              {tour_data.map((item, i) => (
							<SwiperSlide key={i} className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(${item.image})` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>{item.name}</h4>
									<span>{item.places} Places</span>
								</a>
							</SwiperSlide>	

              ))}       



            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev"><i className="ph ph-arrow-left"></i></button>
              <button type="button" role="presentation" className="owl-next"><i className="ph ph-arrow-right"></i></button>
            </div>
						</Swiper>
 


					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default TourArea;