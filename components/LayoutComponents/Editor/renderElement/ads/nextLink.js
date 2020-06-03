import PropTypes from "prop-types";
import Link from "next/link";
import styles from "../styles/ads/nextLinkStyles.module.sass";
import sideHelper from "../../../../helper/sideBarHelper";

const NextLink = ({ data, type, id }) => {
	const {
		headlineImage,
		headlineImageAlt,
		headline,
		brief,
		url,
		refPath,
		contentLink,
		srcset,
	} = sideHelper(data, type, true, id);
	return (
		<div className={styles.linkSection}>
			<div className={styles.scrollText}>{headline}</div>
			<div className={styles.linkButton}>
				<Link href={refPath} as={contentLink}>
					<a className={styles.quickViewLink}>
						<div className={styles.imgWrapper}>
							<img
								src={headlineImage}
								className={styles.quickViewImage}
								srcSet={srcset ? srcset : []}
								sizes="150px"
								alt={headlineImageAlt}
							/>
						</div>
						<div className={styles.label}>
							<div className={styles.linkLabel}>{headline}</div>
							<div className={styles.linkLabelBrief}>{brief}</div>
						</div>
						<div className={styles.arrowWrapper}>
							<img
								className={styles.arrow}
								src={"/static/right-arrow.svg"}
								alt="right-arrow"
							/>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

NextLink.defaultProps = {
	url: "/",
	image: process.env.SITE_IMAGE,
	title: "Next:",
};
NextLink.propTypes = {
	brief: PropTypes.String,
	headline: PropTypes.String,
	image: PropTypes.String,
	url: PropTypes.String,
	title: PropTypes.String,
	imageAlt: PropTypes.String,
	srcset: PropTypes.Array,
};

export default NextLink;
