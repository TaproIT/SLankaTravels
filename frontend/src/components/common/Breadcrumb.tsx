import { Link } from "react-router-dom";

 

const Breadcrumb = ({title, subtitle, style_2} : any) => {
	return (
		<>
			<section
				className={`main_banner ${style_2 ? "tour_banner" : ""}`}
				style={{ backgroundImage: "url(assets/img/bg/banner_bg.jpg)" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<h1>{title}</h1>
							<p>
								<Link to="/">Home </Link> {" "}
								<i className="ph ph-caret-double-right"></i> {subtitle}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Breadcrumb;
