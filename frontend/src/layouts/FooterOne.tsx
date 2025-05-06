 
const FooterOne = () => {
  return (
    <>
      <footer className="tr_footer wow fadeIn" style={{backgroundImage: "url(/assets/img/bg/footer.jpg)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="footer_about">
							<img src="assets/img/logo-white.svg" alt="img" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis  imperdiet 
								titor sodales vulputate
							</p>
							<span>Connect with us</span>
							<ul className="social_link">
								<li><a href="#"><i className="ph ph-facebook-logo"></i></a></li>
								<li><a href="#"><i className="ph ph-x-logo"></i></a></li>
								<li><a href="#"><i className="ph ph-instagram-logo"></i></a></li>
								<li><a href="#"><i className="ph ph-youtube-logo"></i></a></li>
							</ul>
						</div>
					</div>

					<div className="col-xl-9 col-md-8 col-sm-6">
						<div className="row">
							<div className="col-xl-2 col-lg-4 col-md-6 col-12">
								<div className="footer_widget">
									<h3 className="footer-title">About Trvelo</h3>
									<ul>
										<li><a href="#">Faq's </a></li>
										<li><a href="#">Privacy Policy </a></li>
										<li><a href="#">Term & Conditions  </a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Contact</a></li>
									</ul>
								</div>	
							</div>	

							<div className="col-xl-2 col-lg-4 col-md-6 col-12">
								<div className="footer_widget">
									<h3 className="footer-title">Useful Links</h3>
									<ul>
										<li><a href="#">Faq's </a></li>
										<li><a href="#">Privacy Policy </a></li>
										<li><a href="#">Term & Conditions  </a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Contact</a></li>
									</ul>
								</div>									
							</div>	

							<div className="col-xl-4 col-lg-4 col-md-6 col-12">
								<div className="footer_widget">
									<h3 className="footer-title">Quick Contact</h3>
									<div className="footer_contact">										
										<p>
											<i className="ph ph-map-pin-area"></i>
											<span>3600 Las Vegas Blvd S, Las <br />Vegas, NV</span> 
										</p>	

										<p>
											<i className="ph ph-phone-call"></i>
											<span><a href="tel:+9856554544">+9856 55 45 44</a></span> 
										</p>			

										<p>
											<i className="ph ph-envelope-simple"></i>
											<span><a href="mailto:support@example.com">support@example.com</a></span> 
										</p>
									</div>
								</div>
							</div>
							
							<div className="col-xl-4 col-lg-12 col-md-6 col-12">
								<div className="footer_widget subscription_form">
									<h3 className="footer-title">Subscribe To Newsletter</h3>
									<form id="newsletter_form" onSubmit={e => e.preventDefault()}>
										<input type="email" placeholder="Please Enter Email" />
										<button type="submit"><i className="ph ph-rocket-launch"></i></button>
									</form>
									<span>Don’t Spam, Please enter Real Email</span>
									<p className="form-message mt-4 text-center"></p>
								</div>
							</div>	
							
						</div>
					</div>	
				</div>
				
				<div className="row">
					<div className="col-12">
						<div className="tr_copyright text-center">
							<p>Copyright © {new Date().getFullYear()} Trvelo All Right Reserved.</p>
						</div>
					</div>	
				</div>
			</div>
		</footer>	
    </>
  );
};

export default FooterOne;