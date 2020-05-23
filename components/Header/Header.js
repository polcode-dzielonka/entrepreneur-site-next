import Link from "next/link";
import MenuButton from "./Menu/MenuButton";
import { links, socialLinks } from "../../data/data";
import { theme } from "../../theme/baseCss";
import { PropTypes } from "prop-types";
const Header = ({ menuOpen, onClick }) => {
	return (
		<>
			<header className="site-header">
				<nav className="mobile-nav">
					<div className="mobile-links">
						<div className="mobile-nav-menu-item">
							<div className="icon-wrapper">
								<Link href={"/"}>
									<img
										src="/static/business_motivation.svg"
										className="header-icon"
										alt="wealthmack_logo"
									/>
								</Link>
							</div>
							<MenuButton open={menuOpen} onClick={onClick} />
						</div>
					</div>
				</nav>
				{!menuOpen && (
					<nav className="navbar">
						<div className="head-links">
							<div
								style={{
									width: "25%",
									height: "100%",
								}}
							>
								<Link href={"/"}>
									<img
										src="/static/business_motivation.svg"
										className="header-icon"
										alt="wealthmack_logo"
									/>
								</Link>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "80%",
									marginLeft: "0.5rem",
								}}
							>
								{links.map(({ href, label }, index) => (
									<Link href={href} key={index}>
										<div className="nav-menu-item">
											<a className="nav-menu-link">{label}</a>
										</div>
									</Link>
								))}
							</div>
						</div>
						<div className="head-social-links">
							<Link href="/newsletter">
								<div className="news-nav-menu-item">
									<a className="nav-menu-link">Newsletter</a>
								</div>
							</Link>
							{socialLinks.map(({ href, icon, altName }, index) => (
								<div className="social-nav-menu-item" key={index}>
									<a href={href} target="_blank" rel="noopener noreferrer">
										<img
											className="social-style"
											style={{ width: 22 }}
											src={icon}
											alt={altName}
										/>
									</a>
								</div>
							))}
						</div>
					</nav>
				)}
			</header>
			<style jsx>{`
				.head-links {
					width: 50%;
					display: flex;
					flex-direction: row;
					cursor: pointer;
				}
				.head-social-links {
					display: flex;
					flex-direction: row;
					margin-left: auto;
					cursor: pointer;
				}
				.header-icon {
					// height: 9rem;
					width: 5.8rem;
					border: 1px solid #fefefe;
					background-color: "#000000";
				}

				.icon-wrapper {
					width: 90%;
					height: 100%;

					// padding-bottom: 15px;
				}
				.mobile-nav {
					display: flex;
					flex-direction: row;
					height: 100%;
					width: 100%;
					margin: 0 auto;
				}
				.mobile-links {
					width: 100%;
					height: 100%;
					display: flex;
					cursor: pointer;
				}
				.mobile-nav-menu-item {
					display: flex;
					flex-direction: row;
					align-items: center;
					width: 100%;
					border-bottom: 4px solid transparent;
				}
				.navbar {
					display: flex;
					flex-direction: row;
					height: 100%;
					max-width: ${theme.contentMaxWidth};
					width: 100%;
					margin: 0 auto;
				}
				.nav-menu-item {
					display: flex;
					align-items: center;
					width: calc(100% / ${links.length});
					border-bottom: 4px solid transparent;
				}

				.nav-menu-item:hover {
					animation: hoverEffect;
					animation-duration: 1s;
					border-bottom: 4px solid ${theme.primary};
				}
				.nav-menu-link {
					color: #f5f4f4;
					text-transform: uppercase;
					text-decoration: none;
					font-family: ${theme.font};
					margin: 0 auto;
				}
				.news-nav-menu-item {
					width: 60%;
					margin-right: 1rem;
					padding: 0px 20px 0px 20px;
					display: flex;
					align-items: center;
					text-align: center;
					border-bottom: 4px solid transparent;
				}
				.news-nav-menu-item:hover {
					animation: hoverEffect;
					animation-duration: 1s;
					border-bottom: 4px solid ${theme.primary};
				}
				.site-header {
					background: ${theme.secondary};
					height: ${theme.mobileHeaderSize};
					position: fixed;
					top: 0;
					width: 100%;
					z-index: 10;
				}

				.social-nav-menu-item {
					display: flex;
					align-items: center;
					text-align: center;
					padding: 8px 15px 0px 15px;
					border-bottom: 4px solid transparent;
				}

				@keyframes hoverEffect {
					from {
						border-bottom: 4px solid transparent;
					}
					to {
						border-bottom: 4px solid ${theme.primary};
					}
				}

				@media only screen and (min-width: 1001px) {
					.mobile-nav {
						display: none;
					}
					.site-header {
						height: ${theme.headerSize};
					}
				}

				@media only screen and (max-width: 1247px) {
					.header-icon {
						height: 100%;
						width: 5.5rem;
						border: 1px solid #fefefe;
						background-color: #000000;
					}
					.mobile-nav-menu-item {
						border-bottom: none;
					}
				}
				@media only screen and (max-width: 1246px) and (min-width: 960px) {
					.head-social-links {
						margin-right: 1.75rem;
					}
					.header-icon {
						width: 5.5rem;
						height: 3.25rem;
						margin-left: 1.4rem;
					}
				}

				@media only screen and (max-width: 1000px) {
					.navbar {
						display: none;
					}
					.header-icon {
						width: 5rem;
						height: 2.98rem;
						margin-left: 1rem;
					}
				@media only screen and (max-width: 670px) {

					.header-icon {
						margin-left: 0rem;
					}
				}
			`}</style>
		</>
	);
};

Header.propTypes = {
	onClick: PropTypes.func.isRequired,
	menuOpen: PropTypes.Boolean,
};

export default Header;
