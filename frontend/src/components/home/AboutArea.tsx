 

const AboutArea = () => {
  return (
    <>
    <section className="tr_about" style={{backgroundImage: `url(/assets/img/bg/about_bg.jpg)`}}>
			<div className="container">
				<div className="row">
					<div className="col-xl-6 wow fadeInLeft">
						<div className="about_image position-relative">
							<img src="assets/img/about/1.png" className="ab_img_1" alt="img" />
							<img src="assets/img/about/2.png" className="ab_img_2" alt="img" />
							<div className="about_badge">
								<span>Established In</span>
								<h3>1980</h3>
							</div>
							<img src="assets/img/about/plane_shape.png" alt="img" className="about_shape" />
						</div>
					</div> 
					
					<div className="col-xl-6 align-self-center wow fadeInRight">
						<div className="about_content ">
							<div className="section-heading">
								<span>About Our Company</span>
								<h2>Discover Every Corner of The <br /> 
								World With Us</h2>
							</div>
							
							<p>
								There are many variations of passages of Lorem Ipsum available, 
								but the  majority have suffered alteration in some form, by injected 
								humour, or  randomised words which don't look even slightly 
								believable. If you are  going to use a passage of Lorem Ipsum
							</p>
							<div className="d-flex gap-4 about_btm">
								<a href="#" className="green_btn">About Info <i className="ph ph-arrow-right"></i></a>
								<div className="phone_number align-self-center">
									<i className="ph ph-phone-call"></i> <a href="tel:+880325468756">+88032 546 87 56</a>
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

export default AboutArea;