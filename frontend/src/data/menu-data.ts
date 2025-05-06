
const menu_data = [
  {
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
  {
		id: 2,
		title: "About",
		link: "/about",
		has_dropdown: false,
	},
  {
		id: 3,
		title: "Tour",
		link: "/tour",
		has_dropdown: false,
	},
  {
		id: 4,
		title: "Services",
		link: "/services",
		has_dropdown: false,
  },
  {
    id: 5,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog List" }, 
      { link: "/blog-details", title: "Blog Details" }, 
      { link: "/tour", title: "Tour" }, 
      { link: "/tour-details", title: "Tour Details" }, 
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  }

]

export default menu_data;