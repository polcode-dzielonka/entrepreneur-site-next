import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles/quickViewButtonStyles.module.sass";
const SlideLinkButton = ({
	label,
	href,
	imgSrc,
	handler,
	srcset,
	imageAlt,
}) => {
	return (
		<div className={styles.linkSection}>
			<button className={styles.linkButton} onClick={handler}>
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
							<div className={styles.linkLabel}>{label} </div>
						</div>
						<div className={styles.arrowWrapper}>
							<img
								className={styles.arrow}
								src={"/static/fatArrowRightWhitex128.png"}
								alt="right-arrow"
							/>
						</div>
					</a>
				</Link>
			</button>
		</div>
	);
};

SlideLinkButton.defaultProps = {
	href: "/newsletter",
	handler: () => {},
};
SlideLinkButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
	imageAlt: PropTypes.String,
	handler: PropTypes.Func,
	srcset: PropTypes.Array,
};

export default SlideLinkButton;
