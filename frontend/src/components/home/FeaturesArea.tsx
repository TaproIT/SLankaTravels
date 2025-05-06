 

const FeaturesArea = ({style_2}:any) => {
  return (
    <>
      		<section className="features section-padding wow fadeInUp">
			<div className="container">
				{style_2 ? null :
				
				<div className="row">
					<div className="col-12 wow fadeInUp">
						<div className="section-heading text-center">
							<span>Special Features</span>
							<h2>Our Tour Features</h2>
						</div>
					</div>
				</div>
				}
				
				<div className="row">
					<div className="col-xl-3 col-md-6 col-12 wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-wifi-high"></i>
							<div className="feature_content">
								<h3>Use Free Wifi</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>	

					<div className="col-xl-3 col-md-6 col-12 wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-shield-plus"></i>
							<div className="feature_content">
								<h3>Special Security</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>		

					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-person-simple-swim"></i>
							<div className="feature_content">
								<h3>Swimming & Fishing</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>					
					
					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-barbell"></i>
							<div className="feature_content">
								<h3>Gym Center</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>		

					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-bed"></i>
							<div className="feature_content">
								<h3>Luxury Room</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>		

					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-tent"></i>
							<div className="feature_content">
								<h3>Night Campaign</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>	

					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-person-simple-bike"></i>
							<div className="feature_content">
								<h3>Cycling Trips</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>	

					<div className="col-xl-3 col-md-6 col-12  wow fadeInUp">
						<div className="feature_item">
							<i className="ph ph-solar-panel"></i>
							<div className="feature_content">
								<h3>Solar Energy System</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default FeaturesArea;