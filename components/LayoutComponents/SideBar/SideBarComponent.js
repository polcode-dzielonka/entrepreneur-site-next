import Link from "next/link";
import LazyLoad from "react-lazyload";
import styles from "./styles/sideBarComponentStyles.module.sass";
import CloudImage from "../../Image/cloudImage";
import { getImagePath } from "../../helper/imageUrlHelper";

const SideBarContent = ({
	key,
	headlineImage,
	headlineImageAlt,
	headlineImagePath,
	headlineImageCrop,
	headlineImageCropInfo,
	headline,
	category,
	refPath,
	contentLink,
}) => {
	const prefetchItem = project => {
		// return fetch(`https://api.github.com/repos/${project}`).then(data => {
		// 	mutate(`/api/data?id=${project}`, data, false);
		// 	return data;
		// });
		// console.log("SHABBA", project);
	};

	return (
		<article
			// onMouseEnter={() => prefetchItem(contentLink)}
			className={styles.sideContent}
			key={key}
		>
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
									imageCrop={headlineImageCrop}
									imageCropInfo={headlineImageCropInfo}
									layout={"sideLarge"}
								/>
							</div>
						</LazyLoad>
					</div>
				</a>
			</Link>
			<div className={styles.sideTitleInfo}>
				<h1 className={styles.sideTitle}>
					<Link href={refPath} as={contentLink}>
						<a className={styles.infoLink}>{headline}</a>
					</Link>
					<h2 className={styles.sideTitle}>
						<Link href={refPath} as={contentLink}>
							<a className={styles.categoryLink}>{category}</a>
						</Link>
					</h2>
				</h1>
			</div>
		</article>
	);
};
export default SideBarContent;
