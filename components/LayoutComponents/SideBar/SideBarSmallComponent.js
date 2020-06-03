import Link from "next/link";
import LazyLoad from "react-lazyload";
import styles from "./styles/sideBarSmallComponentStyles.module.sass";

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
								sizes="150px"
							/>
						</LazyLoad>
					</div>
				</a>
			</Link>
			<div className={styles.sideTitleInfo}>
				<Link href={refPath} as={contentLink}>
					<a className={styles.infoLink}>{headline}</a>
				</Link>
				<div className={styles.sideTitle}>
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
export default SideBarContent;
