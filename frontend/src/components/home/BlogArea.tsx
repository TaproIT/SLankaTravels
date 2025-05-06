import { Link } from "react-router-dom";

 

const BlogArea = () => {
  return (
    <>
      <section className="tr_blog section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12 wow fadeInUp">
						<div className="section-heading">
							<span>Travel tips & advice</span>
							<h2>News & views from Travelo</h2>
						</div>
					</div>	

					<div className="col-md-6 col-12 text-start text-md-end  wow fadeInUp">
						<a href="#" className="green_btn">Explore More <i className="ph ph-arrow-right"></i></a>
					</div>
				</div>
				
				<div className="row">
					<div className="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div className="blog_item">
							<div className="blog_image">
								<img src="assets/img/blog/1.jpg" alt="img" />
								<div className="blog_date">5 Jan, 2025</div>
							</div>
							
							<div className="blog_content">
								<div className="blog_meta">
									<span><i className="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i className="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><Link to="/blog-details">The ultimate southwest USA road trip itinerary</Link></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
								</p>
							</div>
						</div>
					</div>						
					
					<div className="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div className="blog_item">
							<div className="blog_image">
								<img src="assets/img/blog/2.jpg" alt="img" />
								<div className="blog_date">5 Jan, 2025</div>
							</div>
							
							<div className="blog_content">
								<div className="blog_meta">
									<span><i className="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i className="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><Link to="/blog-details">The ultimate southwest USA road trip itinerary</Link></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
								</p>
							</div>
						</div>
					</div>						
					
					<div className="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div className="blog_item">
							<div className="blog_image">
								<img src="assets/img/blog/3.jpg" alt="img" />
								<div className="blog_date">5 Jan, 2025</div>
							</div>
							
							<div className="blog_content">
								<div className="blog_meta">
									<span><i className="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i className="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><Link to="/blog-details">The ultimate southwest USA road trip itinerary</Link></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
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

export default BlogArea;