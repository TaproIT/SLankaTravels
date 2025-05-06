 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import client_img_1 from "../../../public/assets/img/clients/1.png";
import client_img_2 from "../../../public/assets/img/clients/2.png";
import client_img_3 from "../../../public/assets/img/clients/3.png";
import client_img_4 from "../../../public/assets/img/clients/4.png";
import client_img_5 from "../../../public/assets/img/clients/5.png";
import client_img_6 from "../../../public/assets/img/clients/6.png";

const clients_dat = [
	{ id: 1, img: client_img_1 },
	{ id: 2, img: client_img_2 },
	{ id: 3, img: client_img_3 },
	{ id: 4, img: client_img_4 },
	{ id: 5, img: client_img_5 },
	{ id: 6, img: client_img_6 },
	{ id: 1, img: client_img_1 },
	{ id: 2, img: client_img_2 },
	{ id: 3, img: client_img_3 },
	{ id: 4, img: client_img_4 },
	{ id: 5, img: client_img_5 },
	{ id: 6, img: client_img_6 },
];

 

const ClientsArea = () => {
	return (
		<>
			<div className="tr_clients wow fadeInUp">
				<div className="container-fluid">
					<Swiper 
					loop={true}
					slidesPerView={6}
					spaceBetween={100} 
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						440: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						992: {
							slidesPerView: 5,
						},
						1199: {
							slidesPerView: 6,
						},
					}}
					autoplay={true}
					speed={100}
					modules={[Autoplay]}
					className="clients_slider owl-carousel">
						{clients_dat.map((item, i) => (
							<SwiperSlide className="client_item" key={i}>
								<a href="#">
									<img src={item.img} alt="img" />
								</a>
							</SwiperSlide>
						))}
					</Swiper> 

				</div>
			</div>
		</>
	);
};

export default ClientsArea;
