import { useState } from "react";
import package_data from "../../data/package-data";
import { Link } from "react-router-dom";

 


// data
const categories = ["All", ...new Set(package_data.map((item) => item.category))];
const perView = 6;

 

const TourPackages = ({style_2}:any) => {

  const [activeCategory, setActiveCategory] = useState("All");
	const [items, setItems] = useState(package_data);
	const [next, setNext] = useState(perView);

	const filterItems = ( cateItem: string ) => {
		setActiveCategory(cateItem);
		setNext(perView);
		if (cateItem === "All") {
			return setItems(package_data);
		} else {
			const findItems = package_data.filter((findItem) => {
				return findItem.category == cateItem;
			});
			setItems(findItems);
		}
	};
	//   handleLoadMore
	// const handleLoadMore = () => {
	// 	setNext((value) => value + 2);
	// };



  return (
    <>
    <section className={`wow fadeInUp ${style_2 ? 'tour-packages' : 'tour_packages'}`}>

			<div className="container">
				<div className="row">

					{style_2 ? null :
					<div className="col-xl-12 text-center wow fadeInUp">
						<div className="section-heading">
							<span>Popular Tour</span>
							<h2>Amazing Tour Places</h2>
						</div>
					</div>		
					
					}
					
					<div className="col-xl-12">
					{style_2 ? null : 
						<ul className="package_nav">
              {categories.map((cate, i) => (
                <li key={i} onClick={() => filterItems(cate)} 
                className={`filter ${cate === activeCategory ? "mixitup-control-active" : ""}`}>{cate}</li>
              ))} 
						</ul>

					}
						
						
						<div className="packages_wrap  wow fadeInUp">		
							<div className="row tour_items">
              {items.slice(0, next).map((item, i) =>(
								<div className="col-xl-4 col-md-6 col-12 mix" key={i}>
									<div className="package_item">
										<div className="pack_image">
											<img src={item.image} alt="img" style={{height: 'auto'}} />
											<div className="pac_badge">
												<span className="feat">{item.badge}</span>
												<span className="day">5 Days</span>
											</div>
											
											<Link to="/tour-details" className="tour_btn"><i className="fa-regular fa-eye"></i></Link>
										</div>	
										
										<div className="pack_content">
											<h3><Link to="/tour-details">{item.title}</Link></h3>
											<div className="pac_location d-flex gap-2">
                        <i className="ph ph-map-pin-area align-self-center">
                          </i> <span className="align-self-center">{item.location}</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$ {item.price} / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> {item.rating}</span>
											</div>
										</div>				
									</div>
								</div>	

              ))} 
	
							</div>
						</div>	
						
						{style_2 ? 
						
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
						
						: 
						
						<div className="text-center mt-4  wow fadeInUp">
							<Link to="/tour" className="green_btn">Explore More <i className="ph ph-arrow-right"></i></Link>
						</div>
						}	
					</div>	
				</div>
			</div>
		</section>
    </>
  );
};

export default TourPackages;