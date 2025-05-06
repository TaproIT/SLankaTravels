 

const BlogDetailsArea = () => {
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
								
								<div className="entry-content">
									<h2>Why Choosing the Right Hotel Can Improve Your Travel Experience</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut eros a arcu aliquam rhoncus. Curabitur ac mi ipsum. Ut et risus tortor. Proin sagittis facilisis dictum. Donec convallis egestas quam at vulputate. Sed sodales arcu sit amet velit aliquet bibendum. Cras eu efficitur lorem. Proin quis ligula pulvinar, sagittis enim a, laoreet magna. Etiam vitae dapibus tortor. Curabitur porttitor massa eget sem sollicitudin aliquam. Etiam efficitur lorem in libero tristique, sit amet lacinia lorem bibendum. Nulla magna nulla, porta vel mauris id, pulvinar tempor mi. Sed feugiat bibendum diam sit amet sagittis. 								
									</p>						

									<p>
										Pellentesque iaculis eros id maximus tincidunt. Vivamus commodo porta ipsum, aliquam suscipit nisi malesuada vitae. Maecenas ullamcorper lorem a nulla finibus imperdiet. Sed lobortis augue id odio bibendum, id commodo purus placerat. Etiam scelerisque eros leo, at bibendum elit vestibulum nec. Mauris ac ipsum fermentum, condimentum dui et, semper ipsum. Praesent suscipit urna vitae nisi rutrum, nec ornare risus consequat. Cras feugiat, mi in ultrices mollis, urna massa facilisis est, et blandit justo lacus in neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sit amet orci augue. Mauris iaculis nisl ut quam rutrum, quis tempus est accumsan. Nulla facilisi. 
									</p>							
									
									<blockquote>
										Sed lobortis augue id odio bibendum, id commodo purus placerat. Etiam scelerisque eros leo, at bibendum elit vestibulum nec. Mauris ac ipsum fermentum, condimentum dui et, semper ipsum. Praesent suscipit urna vitae nisi rutrum, nec ornare risus consequat. Cras feugiat, mi in ultrices mollis, urna massa facilisis est, et blandit justo lacus in neque. 
									</blockquote>
									
									<p>
										Ut sit amet mollis magna, a dictum orci. Mauris consectetur, justo et convallis mattis, mauris justo venenatis lorem, vel lobortis est massa id ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id dignissim nisl, id varius metus. Etiam sollicitudin eleifend nisl, sit amet auctor urna eleifend a. Pellentesque maximus auctor varius. Sed euismod pretium magna nec ornare. Ut mauris odio, dignissim euismod metus sit amet, rutrum consequat arcu. Nulla in elit dolor.
									</p>
								</div>	
							</div>
						</div>
						
						<div className="comments">
							<h2 className="bdtitle">Comments - 03</h2>
							
							<ul className="comment-list">
								<li className="comment wow fadeInUp">
									<div className="single-comment">
										<div className="float-start com-img">
											<img src="assets/img/blog/avator/1.jpg" alt="" />
											<h4><a href="#">Robert Smith</a></h4>
											<span className="cdate">13 Jan, 2025</span>
											
											<a href="#" className="creplay"><i className="ph ph-arrow-bend-up-left"></i></a>
											
										</div>
										<div className="com-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem. 
											</p>
										</div>
									</div>
								</li>			
								
								<li className="comment">
									<ul className="children">
										<li className="comment wow fadeInUp">
											<div className="single-comment">
												<div className="float-start com-img">
													<img src="assets/img/blog/avator/2.jpg" alt="" />
													<h4><a href="#">John Doe</a></h4>
													<span className="cdate">13 Jan, 2025</span>
													<a href="#" className="creplay"><i className="ph ph-arrow-bend-up-left"></i></a>
												</div>
												<div className="com-content">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem. 
													</p>
												</div>
											</div>
											
											<ul className="children">
												<li className="comment wow fadeInUp">
													<div className="single-comment">
														<div className="float-start com-img">
															<img src="assets/img/blog/avator/3.jpg" alt="" />
															<h4><a href="#">Mr Pitter</a></h4>
															<span className="cdate">13 Jan, 2025</span>
															<a href="#" className="creplay"><i className="ph ph-arrow-bend-up-left"></i></a>
														</div>
														<div className="com-content">
															<p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem. 
															</p>
														</div>
													</div>
												</li>
											</ul>
										</li>
									</ul>									
								</li>										
							</ul>
						</div> 
						
						<div className="comment-form wow fadeInUp">
							<h2 className="bdtitle">Comment</h2>
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="d-flex name_email">
									<p>
										<label htmlFor="name">Your Name *</label>
										<input type="text" id="name" placeholder="Enter your Name" className="form-control" name="name" />
									</p>

									<p>
										<label htmlFor="email">Your Email *</label>
										<input type="email" id="email" placeholder="Enter your Email" className="form-control" name="email" />
									</p>	
								</div>
								<p>
									<label htmlFor="website">Your Website</label>
									<input type="url" id="website" placeholder="Enter your Website" className="form-control" name="website" />
								</p>			

								<p>
									<label htmlFor="message">Your Comment *</label>
									<textarea id="message" className="form-control" placeholder="Write Message"  name="comment"></textarea>
								</p>
								<p>
									<input type="submit" id="submit" value="Comment" />
								</p>
							</form>
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
									<div className="pp_img" style={{backgroundImage: "url(assets/img/blog/1.jpg)"}}></div>
									<div className="ppost_content">
										<p><a href="#">The ultimate southwest USA road trip itinerary</a></p>
										<span><i className="ri-time-line"></i> 24 Jan , 2025</span>	
									</div>
								</li>			

								<li>
									<div className="pp_img" style={{backgroundImage: "url(assets/img/blog/2.jpg)"}}></div>
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

export default BlogDetailsArea;