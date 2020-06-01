import { mobileLinks } from "../../../data/data";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import styles from "../styles/menuStyles.module.sass";
import Link from "next/link";
const Menu = ({ onClick }) => {
	const menuItems = mobileLinks.map((val, index) => {
		return (
			<Link href={val.href} key={index}>
				<a className={styles.mobileAnchor}>
					<MenuItem delay={`${index * 0.1}s`} onClick={onClick}>
						{val.label}
					</MenuItem>
				</a>
			</Link>
		);
	});

	return (
		<div className={styles.topMenu}>
			<div className={styles.itemWrap}>{menuItems}</div>
		</div>
	);
};
Menu.propTypes = {
	onClick: PropTypes.func,
};
export default Menu;
