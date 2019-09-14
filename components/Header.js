import Link from "next/link";

const links = [
	{ href: "/about", label: "Success" },
	{ href: "/contact", label: "contact" },
	{ href: "/contact", label: "Development" },
	{ href: "/contact", label: "Motivation" },
	{ href: "/about", label: "Entrepreneur" },
	{ href: "/contact", label: "Quotes" },
];
// const moreLinks = [
// 	{ href: "/contact", label: "Development" },
// 	{ href: "/about", label: "Success" },
// 	{ href: "/contact", label: "Motivation" },
// 	{ href: "/about", label: "Entrepreneur" },
// 	{ href: "/contact", label: "Quotes" },
// ];

const Header = () => {
	return (
		<div className="site-header">
			<header>
				<div
					style={{
						color: "white",
						border: "1px solid white",
						width: "6rem",
						alignItems: "center",
					}}
				>
					logo
				</div>
				<div className="header-nav">
					<nav className="nav-menu">
						<ul className="nav-menu-list">
							{links.map(({ href, label }, index) => (
								<li className="nav-menu-item" key={index}>
									<Link href={href}>
										<a className="nav-menu-link">{label}</a>
									</Link>
								</li>
							))}
							{/* <li className="nav-menu-item">
								<span className="nav-menu-label-more">More</span>
							</li> */}
						</ul>
					</nav>
				</div>
			</header>
			<style jsx>{`
				.site-header {
					background: #101010;
					height: 4.25%;
					position: relative;
					padding: 20px;
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
				}
				.nav-menu {
					height: 100%;
				}

				.nav-menu-item {
					display: flex;
					align-items: center;
					text-align: center;
					padding: 0px 4px 0px 4px;
					justify-content: center;
					font-size: 0.85em;
					font-weight: 500;
					opacity: 1;
					transform: none;
					transition: 0.3s;
					margin-right: 1rem;
					height: 92%;
					width: 100%;
					margin-bottom: 0;
					list-style: none;
					border-bottom: 4px solid transparent;
				}

				.nav-menu-item:hover {
					border-bottom: 4px solid #ff4500;
					transition: 0.3s;
					width: 100%;
				}
				.nav-menu-link {
					color: #f5f4f4;
					text-transform: uppercase;
					text-decoration: none;
					font-family: Khand, Arial Narrow, arial, sans-serif;
				}
				.active {
					border: 10px solid blue;
				}
				.nav-menu-list {
					display: flex;
					// flex-direction: row;
					margin: 0;
					height: 100%;
				}
			`}</style>
		</div>
	);
};

export default Header;
// header {
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	position: relative;
// 	padding: 0;
// }
// .header-nav {
// 	order: 2;
// 	display: flex;
// 	flex-grow: 1;
// 	align-items: center;
// 	margin-left: 3rem;
// }
// .nav-menu {
// 	display: block;
// 	margin-bottom: 0;
// }
// .nav-menu-item {
// 	opacity: 1;
// 	margin-right: 1rem;
// 	transform: none;
// 	transition: 0.3s;
// 	margin-bottom: 0;
// 	height: 100%;
// }
// .nav-menu-item:after {
// 	content: "";
// 	display: block;
// 	margin-right: 1rem;
// 	margin: 0 auto;
// 	height: 100%;
// 	width: 0;
// 	position: relative;
// 	top: -4px;
// 	background: transparent;
// 	transition: width 0.3s ease, background-color 0.3s ease;
// }
// .nav-menu-item:hover {
// 	content: "";
// 	display: block;
// 	margin: 0 auto;
// 	margin-right: 1rem;
// 	height: 4px;
// 	position: relative;
// 	top: -4px;
// 	transition: width 0.3s ease, background-color 0.3s ease;
// 	background: #dba433;
// }
// .nav-menu-link {
// 	color: #f5f4f4;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	text-transform: uppercase;
// 	font-size: 0.85em;
// 	font-weight: 400;
// 	text-decoration: none;
// 	font-family: Khand, Arial Narrow, arial, sans-serif;
// }
// .nav-menu-list {
// 	display: flex;
// }
