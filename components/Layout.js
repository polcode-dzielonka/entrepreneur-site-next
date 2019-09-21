import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Menu from "./Menu";
import { theme } from "../theme/baseCss";

const Layout = props => {
	const { background } = props;
	const [menuOpen, setMenuOpen] = useState(false);
	const onClick = e => {
		setMenuOpen(!menuOpen);
	};
	return (
		<div className="top-layout">
			<Header menuOpen={menuOpen} onClick={e => onClick()} />
			{menuOpen && <Menu onClick={e => onClick()} />}
			<div className="page-layout">{props.children}</div>
			<Footer />
			<style jsx>{`
				:global(body) {
					margin: 0px;
					font-family: ${theme.font};
				}
				.page-layout {
					width: 90%;
					max-width: 788px;
					margin: 0 auto;
					margin-top: 65px;
				}
				.top-layout {
					margin: 0;
					background-color: ${background ? "#111" : "white"};
				}
				@media only screen and (max-width: 960px) {
					.page-layout {
						width: 100%;
						min-width: 100%;
						margin: 0 auto;
						margin-top: 65px;
					}
				}
			`}</style>
		</div>
	);
};

export default Layout;
