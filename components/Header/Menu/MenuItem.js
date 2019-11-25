import { useState } from "react";
import { theme } from "../../../theme/baseCss";
const MenuItem = ({ delay, onClick, children }) => {
	const [hover, setHover] = useState(false);
	const styles = {
		container: {
			opacity: 1,
			animation: "1s appear forwards",
			position: "relative",
			animationDelay: delay,
		},
		menuItem: {
			// fontFamily: `'Open Sans', sans-serif`,
			textDecoration: "none",
			fontFamily: theme.font,
			fontSize: "1.1rem",
			padding: "1rem 0",
			margin: "0 5%",
			cursor: "pointer",
			color: hover ? "gray" : "#fafafa",
			transition: "color 0.2s ease-in-out",
			animation: "0.5s slideIn forwards",
			animationDelay: delay,
			textTransform: "uppercase",
		},
		line: {
			width: "90%",
			height: "1px",
			background: "gray",
			margin: "0 auto",
			animation: "0.5s shrink forwards",
			animationDelay: delay,
		},
	};
	return (
		<div style={styles.container}>
			<div
				style={styles.menuItem}
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
				onClick={onClick}
			>
				{children}
			</div>
			<div style={styles.line} />
		</div>
	);
};
export default MenuItem;
