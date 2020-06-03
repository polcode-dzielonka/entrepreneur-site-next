import PropTypes from "prop-types";
import Link from "next/link";
import SectionBar from "./SectionBar";
import styles from "./styles/mainHeadlineStyles.module.sass";
import LazyLoad from "react-lazyload";

const MainHeadline = ({ data }) => {
	const headlineData = data[0];
	const subHeadlineData = data.filter((x, index) => index !== 0);
	const { id } = headlineData;
	const overview = JSON.parse(headlineData.overview);
	const {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		urlDescription,
		srcset,
	} = overview[0];
	return (
		<section className={styles.headerSection}>
			<div className={styles.sectionHead}>
				<SectionBar title="Featured" titleColor="#fefefe" titleSize="1.25rem" />
			</div>
			<div className={styles.headlineContainer}>
				<article className={styles.headlineImageContainer}>
					<Link
						href={`/[url]/article/[id]`}
						as={`/${urlDescription}/article/${id}`}
					>
						<a className={styles.headlineImageMainWrapper}>
							<LazyLoad once={true}>
								<img
									className={styles.headlineImageMain}
									srcSet={srcset ? srcset : []}
									sizes="450px" //"330px"
									src={headlineImage}
									alt={headlineImageAlt}
								/>
							</LazyLoad>
						</a>
					</Link>
					<Link
						href={`/[url]/article/[id]`}
						as={`/${urlDescription}/article/${id}`}
					>
						<a className={styles.info}>
							<h1 className={styles.infoTitle}>
								<span className={styles.infoLink}>{headline}</span>
							</h1>
						</a>
					</Link>
				</article>
				<div className={styles.subHeadlineContainer}>
					{subHeadlineData.map((head, index) => {
						const overview = JSON.parse(head.overview);
						const { id } = head;
						const {
							headlineImage,
							headlineImageAlt,
							headline,
							urlDescription,
							srcset,
						} = overview[0];
						return (
							<article className={styles.subArticle} key={index}>
								<Link
									href={`/[url]/article/[id]`}
									as={`/${urlDescription}/article/${id}`}
								>
									<a className={styles.subHeadlineAnchor}>
										<div className={styles.subHeadlineImageWrap}>
											<LazyLoad once={true}>
												<img
													className={styles.subHeadlineImage}
													src={headlineImage}
													alt={headlineImageAlt}
													srcSet={srcset ? srcset : []}
													sizes="350px"
												/>
											</LazyLoad>
										</div>
										<div className={styles.subTitleContainer}>
											<div className={styles.subTitleWrap}>
												<h2 className={styles.subTitle}>{headline}</h2>
											</div>
											<div className={styles.subCategoryWrapper}>
												<h2 className={styles.subCategory}>{category}</h2>
											</div>
										</div>
									</a>
								</Link>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default MainHeadline;

MainHeadline.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
