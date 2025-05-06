import { Link } from "react-router-dom";
import MobileMenu from "../../layouts/MobileMenu";

 

const OffCanvas = ({ setIsOpen, isOpen }: any) => {
	return (
		<>
			<div className="fix-area">
				<div className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
					<div className="offcanvas__wrapper">
						<div className="offcanvas__content">
							<div className="offcanvas__top d-flex justify-content-between align-items-center">
								<div className="offcanvas__logo">
									<Link to="/">
										<img src="assets/img/logo.svg" alt="edutec" />
									</Link>
								</div>
								<div className="offcanvas__close">
									<button onClick={() => setIsOpen(false)}>
										<i className="fas fa-times"></i>
									</button>
								</div>
							</div>
							<div className="mobile-menu fix mb-3 mean-container">
							 <MobileMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className={`offcanvas__overlay ${isOpen ? "overlay-open" : ""}`} onClick={() => setIsOpen(false)}></div>
		</>
	);
};

export default OffCanvas;
