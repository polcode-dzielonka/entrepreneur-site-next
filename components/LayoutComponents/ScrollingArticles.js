import PropTypes from "prop-types";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import CloudImage from "../Image/cloudImage";
import { getImagePath } from "../helper/imageUrlHelper";
import styles from "./styles/scrollingArticleStyles.module.sass";
const ScrollingArticles = ({ data }) => {
	return data.map((article, index) => {
		const {
			id,
			headlineImage,
			headlineImageAlt,
			headlineImagePath,
			headlineImageCrop,
			headlineImageCropInfo,
			headline,
			category,
			kicker,
			urlDescription,
		} = article;

		// if (index === 0) {
		// 	return (
		// 		<article key={index} className={styles.largeImageContainer}>
		// 			<Link
		// 				href={`/[category]/[url]/article/[id]`}
		// 				as={`/${category}/${urlDescription}/article/${id}`}
		// 			>
		// 				<a className={styles.largeImageMainWrapper}>
		// 					<LazyLoad once={true}>
		// 						<div className={styles.largeImageMain}>
		// 							<CloudImage
		// 								imagePath={
		// 									headlineImagePath
		// 										? headlineImagePath
		// 										: getImagePath(headlineImage)
		// 								}
		// 								imageAlt={headlineImageAlt}
		// 								layout={"headline"}
		// 								imageCrop={headlineImageCrop}
		// 								imageCropInfo={headlineImageCropInfo}
		// 							/>
		// 						</div>
		// 					</LazyLoad>
		// 				</a>
		// 			</Link>
		// 			<div className={styles.largeInfoFirst}>
		// 				<div className={styles.infoTitle}>
		// 					<Link
		// 						href={`/[category]/[url]/article/[id]`}
		// 						as={`/${category}/${urlDescription}/article/${id}`}
		// 					>
		// 						<a className={styles.infoLink}>{headline}</a>
		// 					</Link>
		// 					{headline.length < 70 && (
		// 						<h2 className={styles.infoTitle}>
		// 							<Link
		// 								href={`/[category]/[url]/article/[id]`}
		// 								as={`/${category}/${urlDescription}/article/${id}`}
		// 							>
		// 								<a className={styles.categoryLink}>{category}</a>
		// 							</Link>
		// 						</h2>
		// 					)}
		// 				</div>
		// 			</div>
		// 		</article>
		// 	);
		// }

		return (
			<article className={styles.headerSection} key={index}>
				<Link
					href={`/[category]/[url]/article/[id]`}
					as={`/${category}/${urlDescription}/article/${id}`}
				>
					<a className={styles.scrollImageAnchor}>
						<div className={styles.scrollImageWrapper}>
							<LazyLoad once={true}>
								<div className={styles.scrollImageMain}>
									<CloudImage
										imagePath={
											headlineImagePath
												? headlineImagePath
												: getImagePath(headlineImage)
										}
										imageAlt={headlineImageAlt}
										layout={"scrolling"}
										imageCrop={headlineImageCrop}
										imageCropInfo={headlineImageCropInfo}
									/>
								</div>
							</LazyLoad>
							<div className={styles.scrollTitleContainer}>
								<div className={styles.scrollTitlePad}>
									<div className={styles.scrollCategoryWrapper}>
										<div className={styles.scrollCategory}>{category}</div>
									</div>
									<div className={styles.scrollTitleWrap}>
										<h3 className={styles.scrollTitle}>{headline}</h3>
									</div>
									<div className={styles.scrollKickerWrapper}>
										<p className={styles.scrollKicker}>{kicker}</p>
									</div>
								</div>
							</div>
						</div>
					</a>
				</Link>
			</article>
		);
	});
};
export default ScrollingArticles;

ScrollingArticles.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
