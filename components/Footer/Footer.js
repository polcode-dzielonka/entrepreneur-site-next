import { footerLinks, socialLinks } from "../../data/data";
import Link from "next/link";
import styles from "./styles/footerStyles.module.sass";
import LazyLoad from "react-lazyload";
const Footer = ({ menuOpen, onClick }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerNav}>
				<nav>
					<ul className={styles.footerNavList}>
						{footerLinks.map((item, index) => {
							return (
								<li key={index} className={styles.listWrap}>
									<Link href={item.href}>
										<a className={styles.footerItem}>{item.label}</a>
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className={styles.footerNavList}>
						{socialLinks.map(({ href, icon, altName }, index) => {
							return (
								<li key={index} className={styles.linkWrapper}>
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.footerItemSocial}
									>
										<LazyLoad once={true}>
											<img
												className={styles.socialImage}
												src={icon}
												alt={altName}
											/>
										</LazyLoad>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<strong className={styles.footerBrand}>
					<span className={styles.footerBrandStyle}>WealthMack</span>
				</strong>
				<div className={styles.footerIcon}>
					<img
						className={styles.footerBrandImage}
						src="/static/business_motivation.svg"
						alt="wealthmack_logo"
					/>
				</div>
			</div>
			<div className={styles.footerCopy}>Copyright © 2019 wealthmack.com</div>
		</footer>
	);
};

export default Footer;
