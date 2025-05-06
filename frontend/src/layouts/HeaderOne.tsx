 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu_data from '../data/menu-data';
import OffCanvas from '../components/common/OffCanvas';

const HeaderOne = () => {

	const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      	<header id="tr_header">
			<div className="container">
				<div className="row">
					<div className="col-xl-2 col-md-3 align-self-center">
						<div className="site_logo">
							<Link to="/"><img src="assets/img/logo.svg" alt="Trvelo" /></Link>	
						</div>
					</div> 

					<div className="col-xl-10 col-md-9">
						<div className="header_right d-flex justify-content-end">
							<nav className="main-menu align-self-center d-none d-xl-block">
								<ul>
									{menu_data.map((item, i ) => (
										<React.Fragment key={i}>
										<li>
											<Link to={item.link}>
											{item.title} 
											{item.has_dropdown && <i className="fa-solid fa-chevron-down"></i>} 
											</Link>
										{item.has_dropdown &&  ( 
											<ul className="sub-menu">
												{item.sub_menus?.map((sub_item, index) => (
													<li key={index}><Link to={sub_item.link}>{sub_item.title}</Link></li>
												))} 
											</ul> 
										)}
										</li>


											</React.Fragment>

									))} 
								</ul>
							</nav>
							
							<div className="call_us d-flex align-self-center">
								<i className="ph ph-headset align-self-center"></i>
								<div className="call_content align-self-center">
									<span>Call Us</span>
									<a href="tel:+8801546857487">+8801546857487</a>
								</div>
							</div>
							
							<a href="#" className="green_btn align-self-center">Login / Register <i className="ph ph-arrow-right"></i></a>
							<div className="header__hamburger d-xl-none my-auto">
								<div className="sidebar__toggle" onClick={() => setIsOpen(!isOpen)}>
									<i className="ph ph-list"></i>
								</div>
							</div>							
						</div>
					</div> 
				</div>
			</div>
		</header>

		<OffCanvas  isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HeaderOne;