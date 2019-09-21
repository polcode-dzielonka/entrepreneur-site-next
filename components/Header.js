import Link from "next/link";
import MenuButton from "./MenuButton";
import { links, socialLinks } from "../data/data";
import { theme } from "../theme/baseCss";
const Header = ({ menuOpen, onClick }) => {
	return (
		<div className="site-header">
			<header>
				<MenuButton open={menuOpen} onClick={onClick} />
				{menuOpen && <div></div>}
				{!menuOpen && (
					<div className="header-nav">
						<nav className="nav-menu">
							<ul className="nav-menu-list">
								<li
									style={{
										color: "white",
										alignItems: "center",
										transform: "none",
									}}
								>
									logo
								</li>
								{links.map(({ href, label }, index) => (
									<li className="nav-menu-item" key={index}>
										<Link href={href}>
											<a className="nav-menu-link">{label}</a>
										</Link>
									</li>
								))}
							</ul>
							<ul className="nav-menu-list">
								<li className="nav-menu-item">
									<Link href="/newsletter">
										<a className="nav-menu-link">Newsletter</a>
									</Link>
								</li>
								{socialLinks.map(({ href, icon }, index) => (
									<li className="nav-menu-item" key={index}>
										<a href="https://www.bbc.co.uk" target="_blank">
											<img
												className="social-style"
												style={{ width: 22 }}
												src={icon}
											/>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				)}
			</header>
			<style jsx>{`
				.site-header {
					background: #101010;
					height: 4.25rem;
					position: fixed;
					top: 0;
					width: 100%;
					z-index: 10;
				}
				header {
					display: flex;
					flex-direction: row;
					height: 100%;
				}
				.header-nav {
					align-items: center;
					width: 100%;
				}
				.nav-menu {
					height: 100%;
					justify-content: space-between;
					margin-right: 4rem;
					display: flex;
				}
				.nav-menu-item {
					display: flex;
					align-items: center;
					text-align: center;
					padding: 0px 10px 0px 10px;
					justify-content: center;
					font-size: 1em;
					font-weight: 500;
					opacity: 1;
					transform: none;
					transition: 0.3s;
					height: 92%;
					width: 100%;
					margin-bottom: 0;
					list-style: none;
					border-bottom: 4px solid transparent;
				}

				.nav-menu-item:hover {
					border-bottom: 4px solid ${theme.primary};
					transition: 0.3s;
					width: 100%;
				}
				.nav-menu-link {
					color: #f5f4f4;
					text-transform: uppercase;
					text-decoration: none;
					font-family: ${theme.font};
				}
				.nav-menu-list {
					display: flex;
					flex-direction: row;
					margin: 0;
					height: 100%;
				}
				.social-style {
					width: 5;
					padding: 5;
				}
				@media only screen and (max-width: 960px) {
					.nav-menu-item {
						display: none;
					}
				}
			`}</style>
		</div>
	);
};

export default Header;
