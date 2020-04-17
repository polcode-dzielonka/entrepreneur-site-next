import { mobileLinks } from "../../../data/data";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

import Link from "next/link";
const Menu = ({ onClick }) => {
	const menuItems = mobileLinks.map((val, index) => {
		return (
			<Link href={val.href} key={index}>
				<MenuItem delay={`${index * 0.1}s`} onClick={onClick}>
					{val.label}
				</MenuItem>
			</Link>
		);
	});

	return (
		<div
			style={{
				position: "fixed",
				zIndex: 50,
				background: "black",
				opacity: 0.95,
				left: 0,
				height: "100%",
				width: "100%",
			}}
		>
			<div
				style={{
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
					marginTop: 10,
					paddingBottom: "4.25rem",
				}}
			>
				{menuItems}
			</div>
		</div>
	);
};
Menu.propTypes = {
	onClick: PropTypes.func,
};
export default Menu;
