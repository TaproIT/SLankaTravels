 
import Count from '../common/Count';
 

type DataType = {
  id: number;
  icon: string;
  count: number;
  title: string;
  image: string;
}[]


const counter_data:DataType = [
  {
    id: 1,
    icon: "ph ph-smiley",
    count: 85974,
    title: "Satisfied Clients",
    image: "/assets/img/counter-up/1.jpg",
  },
  {
    id: 2,
    icon: "ph ph-star",
    count: 9875,
    title: "Positive Review",
    image: "/assets/img/counter-up/2.jpg",
  },
  {
    id: 3,
    icon: "ph ph-heart",
    count: 5647,
    title: "Satisfied Clients",
    image: "/assets/img/counter-up/3.jpg",
  },
  {
    id: 4,
    icon: "ph ph-trophy",
    count: 1200,
    title: "Winning Awards",
    image: "/assets/img/counter-up/4.jpg",
  },
];


const CounterArea = ({style_2, style_3}:any) => {
  return (
    <>
    <section className={`counter_up ${style_2 ? 'pt100' : style_3 ? '' : 'section-padding'}`}>	
			<div className="container">
				<div className="row">
          {counter_data.map((item, i) => (
					<div key={i} className="col-xl-3 col-md-6 col-12 wow fadeInUp">
						<div className="counter_item" style={{backgroundImage: `url(${item.image})`}}>
							<i className={item.icon}></i>
							<h4><span className="count"><Count number={item.count} /></span>+</h4>
							<p>{item.title}</p>
						</div>
					</div>	
          ))}
				</div>
			</div>
		</section>
    </>
  );
};

export default CounterArea;