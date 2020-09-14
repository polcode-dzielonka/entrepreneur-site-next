import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles/homeButtonStyles.module.sass";
const SlideLinkButton = ({ label, href }) => {
	return (
		<div className={styles.linkSection}>
			<div className={styles.linkButton}>
				<Link href={href}>
					<a className={styles.quickViewLink}>
						<div className={styles.label}>
							<div className={styles.linkLabel}>{label}</div>
						</div>
						<div className={styles.arrowWrapper}>
							<img
								className={styles.arrow}
								src={"/static/newFatArrowRightWhitex128.png"}
								alt="right-arrow"
							/>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

SlideLinkButton.defaultProps = {
	href: "/",
};
SlideLinkButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
};

export default SlideLinkButton;
