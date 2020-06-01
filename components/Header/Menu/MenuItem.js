import { useState } from "react";
import styles from "../styles/menuItemStyles.module.sass";
const MenuItem = ({ delay, onClick, children }) => {
	const [hover, setHover] = useState(false);
	return (
		<div className={`${styles.menuContainer} `}>
			<div
				className={`${styles.menuItem} menu-item`}
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
			<div className={`${styles.line} line-item`} />
			<style jsx>{`
				.container {
					animation-delay: ${delay};
				}
				.menu-item {
					color: ${hover ? "gray" : "#fafafa"};
					animation-delay: delay;
				}
				.line-item {
					animationdelay: ${delay};
				}
			`}</style>
		</div>
	);
};
export default MenuItem;
