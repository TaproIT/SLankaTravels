 
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const HeroArea = () => {
  return (
    <>
      		<section className="tr_slider_wrap text-center wow fadeInUp">
			<div className="container-fluid">
				<Swiper  
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.hs_next_arrow',
          prevEl: '.hs_prev_arrow',
        }}
        pagination={{
          el: ".hero_pagination",
          clickable: true,
        }}
        effect="fade"
        modules={[Navigation, Pagination, EffectFade]}
        breakpoints={{
          1299: {
            slidesPerView: 1,
          },
          1199: {
            slidesPerView: 1,
          },					
          1024: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
          },			
      
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="tr_slider"> 
						<SwiperSlide className="swiper-slide">
							<div className="slider_item" style={{backgroundImage: "url(assets/img/slider/1.jpg)"}}>
								<div className="container">
									<span className="subheading active_animation">Best Choice for Family</span>
									<h1 className="heading active_animation">Embark on Your Next <br /> Adventure Today !</h1>
									<p className="active_animation">There are many variations of passages of Lorem Ipsum available, but the <br /> 
									majority have suffered alteration in some form</p>
									<a href="#" className="yellow_btn active_animation">Explore More <i className="ph ph-arrow-right"></i></a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="slider_item" style={{backgroundImage: "url(assets/img/slider/2.jpg)"}}>
								<div className="container">
									<span className="subheading active_animation">The Perfect Choice for Family</span>
									<h1 className="heading active_animation">Begin Your Next <br /> Adventure Today !</h1>
									<p className="active_animation">There are many variations of passages of Lorem Ipsum available, but the <br /> 
									majority have suffered alteration in some form</p>
									<a href="#" className="yellow_btn active_animation">Explore More <i className="ph ph-arrow-right"></i></a>
								</div>
							</div>
						</SwiperSlide>		 
					
					<div className="hs_prev_arrow harrow" style={{cursor: "pointer"}}><i className="ph ph-caret-left"></i></div>
					<div className="hs_next_arrow harrow" style={{cursor: "pointer"}}><i className="ph ph-caret-right"></i></div>
				</Swiper>
			</div>
		</section>
    </>
  );
};

export default HeroArea;