import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles/quickViewButtonStyles.module.sass";
import CloudImage from "../Image/cloudImage";
import { getImagePath } from "../helper/imageUrlHelper";

const QuickViewButton = ({
	label,
	href,
	refPath,
	imgSrc,
	handler,
	imagePath,
	imageAlt,
}) => {
	return (
		<div className={styles.linkSection}>
			<button className={styles.linkButton} onClick={handler}>
				<Link href={refPath} as={href}>
					<a className={styles.quickViewLink}>
						<div className={styles.imgWrapper}>
							<div className={styles.quickViewImage}>
								<CloudImage
									imagePath={imagePath ? imagePath : getImagePath(imgSrc)}
									imageAlt={imageAlt}
									layout={"nextButton"}
								/>
							</div>
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
	imagePath: PropTypes.Array,
};

export default QuickViewButton;
