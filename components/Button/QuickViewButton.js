import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles/quickViewButtonStyles.module.sass";

const QuickViewButton = ({
	label,
	href,
	refPath,
	imgSrc,
	handler,
	srcset,
	imageAlt,
}) => {
	return (
		<div className={styles.linkSection}>
			<button className={styles.linkButton} onClick={handler}>
				<Link href={refPath} as={href}>
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

QuickViewButton.defaultProps = {
	href: "/newsletter",
	handler: () => {},
};
QuickViewButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
	imageAlt: PropTypes.String,
	handler: PropTypes.Func,
	srcset: PropTypes.Array,
};

export default QuickViewButton;
