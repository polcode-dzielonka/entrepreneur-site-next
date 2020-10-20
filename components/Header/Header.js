import Link from "next/link";
import MenuButton from "./Menu/MenuButton";
import { links, socialLinks } from "../../data/data";
import { PropTypes } from "prop-types";
import styles from "./styles/headerStyles.module.sass";
const Header = ({ menuOpen, onClick }) => {
	return (
		<header className="Header">
			<nav className={styles.navigation}>
				<div className={styles.logo}>
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
				<div className={styles.headLinks}>
					<div className={styles.linkWrapper}>
						{links.map(({ href, label }, index) => (
							<Link href={href} key={index}>
								<a className={styles.navMenuItem}>
									<span className={styles.navMenuLink}>{label} </span>
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.headSocialLinks}>
					<div className={styles.socialWrapper}>
						{socialLinks.map(({ href, icon, altName }, index) => (
							<div className={styles.socialNavMenuItem} key={index}>
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
				<div className={styles.burger}>
					<MenuButton open={menuOpen} onClick={onClick} />
				</div>
			</nav>
			<style jsx>
				{`
					.Header {
						position: fixed;
						top: 0; /* Stick it to the top */
						max-height: 70px;
						width: 100vw;

						display: grid;

						/* Cosmetics */
						background-color: #101010;
						z-index: 1000;
						height: 3.45rem;
						align-items: center;
						justify-items: center;
					}
				`}
			</style>
		</header>
	);
};

Header.propTypes = {
	onClick: PropTypes.func.isRequired,
	menuOpen: PropTypes.Boolean,
};

export default Header;
