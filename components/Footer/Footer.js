import { footerLinks, socialLinks } from "../../data/data";
import Link from "next/link";
import { theme } from "../../theme/baseCss";

const Footer = ({ menuOpen, onClick }) => {
	return (
		<footer className="footer">
			<div className="footer-nav">
				<nav>
					<ul className="footer-nav-list">
						{footerLinks.map((item, index) => {
							return (
								<li key={index}>
									<Link href={item.href}>
										<a className="footer-item">{item.label}</a>
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className="footer-nav-list">
						{socialLinks.map(({ href, icon }, index) => {
							return (
								<li key={index}>
									<a href={href} target="_blank" className="footer-item-social">
										<img
											style={{
												width: "30%",
											}}
											src={icon}
										></img>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<strong className="footer-brand">
					<span className="footer-brand-style">WealthMack</span>
				</strong>
			</div>
			<div className="footer-copy">Copyright © 2019 wealthmack.com</div>
			<style jsx>{`
				.footer {
					padding-top: 5rem;
					background: #111;
				}
				.footer-brand {
					display: block;
					text-align: center;
					margin-bottom: 4.5rem;
					width: 100%;
					position: relative;
					z-index: 1;
					font-size: 1.1em;
					font-weight: 400;
					color: #fff;
					text-transform: uppercase;
					letter-spacing: 1px;
				}
				.footer-brand:before {
					border-top: 0.5px solid hsla(0, 0%, 100%);
					content: "";
					margin: 0 auto;
					position: absolute;
					top: 40%;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					z-index: -1;
				}
				.footer-brand-style {
					background: #111;
					padding: 0 1rem;
				}
				.footer-copy {
					font-size: 0.95em;
					font-weight: 400;
					color: #fff;
					background: #161616;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 2.5rem 0;
				}
				.footer-nav {
					width: 100%;
					max-width: 1098px;
					margin: 0 auto;
				}
				.footer-nav-list {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
					margin-bottom: 3rem;
					text-align: center;
					padding: 0;
				}
				.footer-item {
					font-family: ${theme.font};
					color: #fff;
					cursor: pointer;
					padding: 25px 25px;
					font-size: 0.95rem;
					font-weight: 300;
					text-decoration: none;
					list-style: none;
					align-items: center;
					text-transform: uppercase;
				}
				.footer-item-social {
					font-family: ${theme.font};
					color: #fff;
					cursor: pointer;
					text-decoration: none;
					list-style: none;
					width: 30%;
				}
				li {
					list-style-type: none;
				}
				@media only screen and (max-width: 643px) {
					.footer-item {
						font-size: 0.95rem;
						font-weight: 300;
						text-decoration: none;
						list-style: none;
						display: flex;
					}
				}
			`}</style>
		</footer>
	);
};

export default Footer;
