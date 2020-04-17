import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Header/Menu/Menu";
import { theme } from "../../theme/baseCss";
import CookieBanner from "../cookies/cookieBanner";
import DefaultHeader from "../Header/Head";
import PropTypes from "prop-types";

const Layout = props => {
	const { background, children } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const onClick = e => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="top-layout">
			<DefaultHeader />
			<Header menuOpen={menuOpen} onClick={e => onClick()} />
			{menuOpen && <Menu onClick={e => onClick()} />}
			<div className="page-layout">{children}</div>
			<CookieBanner />

			<Footer />
			<style jsx>{`
				:global(body) {
					margin: 0px;
					font-family: ${theme.font};
				}
				.page-layout {
					margin-top: ${theme.headerSize};
				}
				.top-layout {
					margin: 0;
					background-color: ${background ? "#111" : "white"};
				}
				@media only screen and (max-width: 1000px) {
					.page-layout {
						width: 100%;
						margin: 0 auto;
						margin-top: ${theme.mobileHeaderSize};
					}
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
