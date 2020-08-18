import Link from "next/link";
import MenuButton from "./Menu/MenuButton";
import { links, socialLinks } from "../../data/data";
import { PropTypes } from "prop-types";
import styles from "./styles/headerStyles.module.sass";
const Header = ({ menuOpen, onClick }) => {
	return (
		<header className={styles.siteHeader}>
			<nav className={styles.mobileNav}>
				<div className={styles.mobileLinks}>
					<div className={styles.mobileNavMenuItem}>
						<div className={styles.iconWrapper}>
							<Link href={"/"}>
								<a>
									<img
										src="/static/business_motivation.svg"
										className={styles.headerIcon}
										alt="wealthmack_logo"
									/>
								</a>
							</Link>
						</div>
						<MenuButton open={menuOpen} onClick={onClick} />
					</div>
				</div>
			</nav>
			{!menuOpen && (
				<nav className={styles.navbar}>
					<div className={styles.headLinks}>
						<div className={styles.logoWrapper}>
							<Link href={"/"}>
								<a>
									<img
										src="/static/business_motivation.svg"
										className={styles.headerIcon}
										alt="wealthmack_logo"
									/>
								</a>
							</Link>
						</div>
						<div className={styles.linkWrapper}>
							{links.map(({ href, label }, index) => (
								<Link href={href} key={index}>
									<a className={`${styles.navMenuItem} nav-menu-item-link`}>
										<span className={styles.navMenuLink}>{label}</span>
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className={styles.headSocialLinks}>
						<div className={styles.socialWrapper}>
							{socialLinks.map(({ href, icon, altName }, index) => (
								<div
									className={`${styles.socialNavMenuItem} social-menu-item-link`}
									key={index}
								>
									<a href={href} target="_blank" rel="noopener noreferrer">
										<img
											className={styles.socialStyles}
											src={icon}
											alt={altName}
										/>
									</a>
								</div>
							))}
						</div>
					</div>
				</nav>
			)}
			<style jsx>{`
				.nav-menu-item-link {
					width: calc(100% / ${links.length});
				}
				.social-menu-item-link {
					width: calc(100% / ${socialLinks.length});
				}
			`}</style>
		</header>
	);
};

Header.propTypes = {
	onClick: PropTypes.func.isRequired,
	menuOpen: PropTypes.Boolean,
};

export default Header;
