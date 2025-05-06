import { Link } from "react-router-dom";

const BlogArea = () => {
  return (
    <>
              <section className="blog-list section-padding">
			<div className="container">				
				<div className="row">
					<div className="col-xl-8 col-lg-6 col-12 wow fadeIn">
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
								<h3><Link to="/blog-details">Why Choosing the Right Hotel Can Improve Your Travel Experience</Link></h3>
								<p>
									Choosing the right hotel can be the defining factor that elevates your travel experience. From enhancing your comfort to providing amenities that meet your needs, a good hotel can transform a trip into an enjoyable, memorable adventure. Here’s how selecting the right accommodation... 
								</p>
							</div>
						</div>											

						<div className="col-12 text-center">
							<div className="tr-pagination">
								<a href="#"><i className="fa-solid fa-arrow-left"></i></a>
								<a href="#">1</a>
								<a href="#">2</a>
								<a href="#" className="current">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#"><i className="fa-solid fa-arrow-right"></i></a>
							</div>
						</div>	
					</div>
					
					<div className="col-xl-4 col-lg-6 col-12 sidebar-area wow fadeIn">
						<div className="single-widget search_widget">
							<h3 className="widget-title">Search</h3>
							<form onSubmit={(e) => e.preventDefault()}>
								<input type="text" className="form-control" placeholder="Search here" />
								<button type="submit" className=""><i className="ph ph-magnifying-glass"></i></button>
							</form>
						</div>			

						<div className="single-widget category-widget">
							<h3 className="widget-title">Category</h3>
							<ul>
								<li><a href="#">Travel</a></li>
								<li><a href="#">Trip</a></li>
								<li><a href="#">Sea</a></li>
								<li><a href="#">Hiking</a></li>
								<li><a href="#">Mountain</a></li>
							</ul>
						</div>					

						<div className="single-widget ppost_widget">
							<h3 className="widget-title">Popular Posts</h3>
							<ul>
								<li>
									<div className="pp_img" style={{backgroundImage: "url(/assets/img/blog/1.jpg)"}}></div>
									<div className="ppost_content">
										<p><a href="#">The ultimate southwest USA road trip itinerary</a></p>
										<span><i className="ri-time-line"></i> 24 Jan , 2025</span>	
									</div>
								</li>			

								<li>
									<div className="pp_img" style={{backgroundImage: "url(/assets/img/blog/2.jpg)"}}></div>
									<div className="ppost_content">
										<p><a href="#">The ultimate southwest USA road trip itinerary</a></p>
										<span><i className="ri-time-line"></i> 24 Feb , 2025</span>	
									</div>
								</li>
							</ul>
						</div>
						
						<div className="single-widget">
							<h3 className="widget-title">Tags</h3>
							<div className="tags-clouds">
								<a href="#">trip</a>
								<a href="#">beach</a>
								<a href="#">sea</a>
								<a href="#">cycle</a>
								<a href="#">mountain</a>
								<a href="#">travel</a>
								<a href="#">tent</a>
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