 

const CtaArea = ({style_2} : any) => {
  return (
    <>
      	<section className={`container pb100 wow fadeInUp ${style_2 ? 'section-padding' : ''}`}>
			<div className="tr_cta" style={{backgroundImage: "url(/assets/img/bg/cta.jpg)"}}>
				<div className="row">
					<div className="col-lg-5 d-md-none d-lg-block">
						<div className="cta_img" style={{backgroundImage: "url(/assets/img/cta/cta2.png)"}}></div>
					</div> 

					<div className="col-lg-7 align-self-center">
						<div className="cta_content">
							<span>Ready to Start?</span>
							<h2>Discover Incredible<br />
							Deals Just for You!</h2>
							<a href="#" className="green_btn">Explore More <i className="ph ph-arrow-right"></i></a>
							<img src="assets/img/cta/mail-icon.svg" alt="img" className="cta_shape" />
						</div>
					</div> 
				</div>
			</div>
		</section>
    </>
  );
};

export default CtaArea;