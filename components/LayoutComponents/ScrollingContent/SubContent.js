import Link from "next/link";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import styles from "./styles/subContentStyles.module.sass";
import CloudImage from "../../Image/cloudImage";
import { getImagePath } from "../../helper/imageUrlHelper";

const SubScrollingContent = ({
	category,
	headline,
	headlineImage,
	headlineImageAlt,
	headlineImagePath,
	index,
	contentLink,
	refPath,
}) => {
	return (
		<article className={styles.sideContent} key={index}>
			<Link href={refPath} as={contentLink}>
				<a className={styles.sideHeadlineAnchor}>
					<div className={styles.sideImageWrapper}>
						<LazyLoad once={true}>
							<div className={styles.sideImageMain}>
								<CloudImage
									imagePath={
										headlineImagePath
											? headlineImagePath
											: getImagePath(headlineImage)
									}
									imageAlt={headlineImageAlt}
									layout={"sideLarge"}
								/>
							</div>
						</LazyLoad>
					</div>
				</a>
			</Link>
			<div className={styles.sideTitleInfo}>
				<div className={styles.sideTitle}>
					<Link href={refPath} as={contentLink}>
						<a className={styles.infoLink}>{headline}</a>
					</Link>
					<div className={styles.sideTitle}>
						<Link href={refPath} as={contentLink}>
							<a className={styles.categoryLink}>{category}</a>
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};
SubScrollingContent.propTypes = {
	category: PropTypes.String,
	headline: PropTypes.String,
	headlineImagePath: PropTypes.String,
	headlineImage: PropTypes.String,
	headlineImageAlt: PropTypes.String,
	index: PropTypes.int,
};
export default SubScrollingContent;
