 
import  { useState } from 'react';
import menu_data from '../data/menu-data';
import { Link } from 'react-router-dom';

const MobileMenu = () => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  return (
    <>
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span><span><span></span></span></span>
          </a>
          
          <nav className="mean-nav">
								<ul >
                  {menu_data.map((item, i) => (
                    <li key={i} className={`${navTitle === item.title ? "dropdown-opened" : ""}`} >
                      <Link to={item.link}>{item.title} 
                    {item.has_dropdown && <i className="fa-solid fa-chevron-down"></i>} 

                    </Link>
										{item.has_dropdown &&  (
                      <ul className="sub-menu" style={{
                        display: navTitle === item.title ? "block" : "none",
                      }}>
                        {item.sub_menus?.map((sub_item, index) => (
                          <li key={index}><Link to={sub_item.link}>{sub_item.title}</Link></li>
                        ))} 
										</ul>
                    )} 
                    {item.has_dropdown && <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} onClick={() => openMobileMenu(item.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}><i className="far fa-plus"></i></a>}
                </li>


                  ))}
									 
								</ul>
							</nav>
            </div>
    </>
  );
};

export default MobileMenu;