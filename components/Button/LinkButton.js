import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles/homeButtonStyles.module.css";
const SlideLinkButton = ({ label, href, imgSrc, srcset, imageAlt }) => {
	return (
		<div className={styles.linkSection}>
			<div className={styles.scrollText}>
				Continue Scrolling to Keep Reading
			</div>
			<div className={styles.scrollText}>
				Click the button below to start the Slideshow.
			</div>
			<div className={styles.linkButton}>
				<Link href={href}>
					<a className={styles.quickViewLink}>
						<div className={styles.imgWrapper}>
							<img
								src={imgSrc}
								srcSet={srcset}
								sizes="150px"
								className={styles.quickViewImage}
								alt={imageAlt}
							/>
						</div>
						<div className={styles.label}>
							<div className={styles.linkLabel}>{label}</div>
						</div>
						<div className={styles.arrowWrapper}>
							<img
								className={styles.arrow}
								alt="right-arrow"
								src={"/static/fatArrowRightBlackx128.png"}
							/>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

SlideLinkButton.defaultProps = {
	href: "/newsletter",
};
SlideLinkButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
	imageAlt: PropTypes.String,
	srcset: PropTypes.array,
};

export default SlideLinkButton;
