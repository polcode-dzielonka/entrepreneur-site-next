import Link from "next/link";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import styles from "./styles/mainContentStyles.module.sass";
const MainScrollingContent = ({
	category,
	headline,
	headlineImage,
	headlineImageAlt,
	index,
	srcset,
	contentLink,
}) => {
	return (
		<article className={styles.sideContent} key={index}>
			<Link href={contentLink}>
				<a className={styles.sideHeadlineAnchor}>
					<div className={styles.sideImageWrapper}>
						<LazyLoad once={true}>
							<img
								className={styles.sideImageMain}
								src={headlineImage}
								alt={headlineImageAlt}
								srcSet={srcset ? srcset : []}
								sizes="330px"
							/>
						</LazyLoad>
					</div>
				</a>
			</Link>
			<div className={styles.sideTitleInfo}>
				<h1 className={styles.sideTitle}>
					<Link href={contentLink}>
						<a className={styles.infoLink}>{headline}</a>
					</Link>
					<h2 className={styles.sideTitle}>
						<Link href={contentLink}>
							<a className={styles.categoryLink}>{category}</a>
						</Link>
					</h2>
				</h1>
			</div>
		</article>
	);
};
MainScrollingContent.propTypes = {
	category: PropTypes.String,
	headline: PropTypes.String,
	headlineImage: PropTypes.String,
	headlineImageAlt: PropTypes.String,
	index: PropTypes.int,
	srcset: PropTypes.array,
};
export default MainScrollingContent;
