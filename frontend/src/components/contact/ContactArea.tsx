 

const ContactArea = () => {
  return (
    <>
      	<section className="contact-area section-padding">
			<div className="container">					
				<div className="row">
					<div className="col-xl-5 col-md-5 col-12 wow fadeInUp">
						<div className="contact-info">
							<div className="cinfo-item">
								<i className="ph ph-map-pin-area"></i>
								<div className="cinfo_content">
									<h3>Our Location</h3>
									<p>
										3600 Las Vegas Blvd S, Las<br />
										Vegas, NV
									</p>
								</div>
							</div>			

							<div className="cinfo-item">
								<i className="ph ph-envelope-simple"></i>
								<div className="cinfo_content">
									<h3>Email Us</h3>
									<p>
										<a href="mailto:support@example.com">support@example.com</a><br />
										<a href="mailto:sales@example.com">sales@example.com</a>
									</p>
								</div>
							</div>

							<div className="cinfo-item">
								<i className="ph ph-headphones"></i>
								<div className="cinfo_content">
									<h3>Phone Number</h3>
									<p>
										<a href="tel:+9901254789658">+9901254789658</a><br />
										<a href="tel:+9901254789658">+9901254769688</a>
									</p>
								</div>
							</div>
						</div>
					</div>
						
					<div className="col-xl-7 col-md-7 col-12 align-self-center wow fadeInUp">
						<div className="contact-form">
							<div className="section-heading">
								<span>Get In Touch</span>
								<h2>Send us a Message</h2>
							</div>
							
							<form id="contact-form" onSubmit={e => e.preventDefault()}>								
								<ul className="contact-form-wrap">									
									<li><input type="text" placeholder="Name" name="name" id="name" /></li>
									<li><input type="email" placeholder="Email" name="email" id="email" /></li>
									<li><input type="tel" placeholder="Phone" name="phone" id="phone" /></li>
									<li><input type="text" placeholder="Address" name="address" id="address" /></li>
									<li><textarea placeholder="Message" rows={6} name="message"></textarea></li>								
								</ul>								
								<button type="submit" className="cbtn">Send Message <i className="ph ph-paper-plane-tilt"></i></button>
							</form>
							<p className="form-message mt-4 text-center"></p>
						</div>
					</div>	

					<div className="col-12 pt100 wow fadeInUp">
						<div className="contact_map">
							<iframe height="600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50431.01496117057!2d144.9372018671769!3d-37.81441383014957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1572172541109!5m2!1sen!2sbd"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default ContactArea;