import Link from "next/link";
import LazyLoad from "react-lazyload";
import styles from "./styles/sideBarComponentStyles.module.sass";
const SideBarContent = ({
	key,
	type,
	headlineImage,
	headlineImageAlt,
	headline,
	category,
	url,
	refPath,
	contentLink,
	srcset,
}) => {
	return (
		<article className={styles.sideContent} key={key}>
			<Link href={refPath} as={contentLink}>
				<a className={styles.sideHeadlineAnchor}>
					<div className={styles.sideImageWrapper}>
						<LazyLoad once={true}>
							<img
								className={styles.sideImageMain}
								src={headlineImage}
								alt={headlineImageAlt}
								srcSet={srcset ? srcset : []}
								sizes="180px"
							/>
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
