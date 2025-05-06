import { useState, useEffect } from "react";

export default function Preloader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Set a timer to hide the preloader after 10 seconds
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		// Clean up the timer when the component is unmounted
		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<>
			{isVisible && (
				<div className="preloader_wrap">
					<div className="preloader">
						{[...Array(20)].map((_, i) => (
							<span
								key={i}
								style={{ "--i": (i + 1).toString() } as React.CSSProperties}
							></span>
						))}
						<h2>Trvelo</h2>
						<div className="preloader_icon fa-solid fa-jet-fighter"></div>
					</div>
				</div>
			)}
		</>
	);
}
