import { relative } from "upath";
import { links, socialLinks } from "../data/data";
import MenuItem from "./MenuItem";

const Menu = ({ onClick }) => {
	const menuItems = links.map((val, index) => {
		return (
			<MenuItem key={index} delay={`${index * 0.1}s`} onClick={onClick}>
				{val.label}
			</MenuItem>
		);
	});

	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				height: "100%",
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				background: "black",
				opacity: 0.95,
				color: "#fafafa",
				transition: "height 0.3s ease",
				zIndex: 2,
				marginTop: 65,
			}}
		>
			{menuItems}
		</div>
	);
};

export default Menu;
