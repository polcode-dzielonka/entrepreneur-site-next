import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Header/Menu/Menu";
import CookieBanner from "../cookies/cookieBanner";
import DefaultHeader from "../Header/Head";
import PropTypes from "prop-types";
import styles from "./styles/layoutStyles.module.css";
const Layout = props => {
	const { background, children } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const onClick = e => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div
			className={styles.topLayout}
			styles={{ backgroundColor: background ? "#111" : "white" }}
		>
			<DefaultHeader />
			<Header menuOpen={menuOpen} onClick={e => onClick()} />
			{menuOpen && <Menu onClick={e => onClick()} />}
			<div className={styles.pageLayout}>{children}</div>
			<CookieBanner />
			<Footer />
			<style jsx>{`
				:global(body) {
					margin: 0px;
					font-family: ${theme.font};
				}
			`}</style>
		</div>
	);
};

Layout.propTypes = {
	background: PropTypes.Object,
	children: PropTypes.Object,
};

export default Layout;
