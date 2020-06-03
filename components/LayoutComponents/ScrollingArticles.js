import PropTypes from "prop-types";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import styles from "./styles/scrollingArticleStyles.module.sass";
const ScrollingArticles = ({ data }) => {
	return data.map((article, index) => {
		const { id } = article;

		const overview = JSON.parse(article.overview);
		const {
			headlineImage,
			headlineImageAlt,
			headline,
			category,
			kicker,
			urlDescription,
			srcset,
		} = overview[0];

		if (index === 0) {
			return (
				<article key={index} className={styles.largeImageContainer}>
					<Link
						href={`/[url]/article/[id]`}
						as={`/${urlDescription}/article/${id}`}
					>
						<a className={styles.largeImageMainWrapper}>
							<LazyLoad once={true}>
								<img
									className={styles.largeImageMain}
									src={headlineImage}
									alt={headlineImageAlt}
									srcSet={srcset ? srcset : []}
									sizes="330px"
								/>
							</LazyLoad>
						</a>
					</Link>
					<div className={styles.largeInfoFirst}>
						<div className={styles.infoTitle}>
							<Link
								href={`/[url]/article/[id]`}
								as={`/${urlDescription}/article/${id}`}
							>
								<a className={styles.infoLink}>{headline}</a>
							</Link>
							{headline.length < 70 && (
								<h2 className={styles.infoTitle}>
									<Link
										href={`/[url]/article/[id]`}
										as={`/${urlDescription}/article/${id}`}
									>
										<a className={styles.categoryLink}>{category}</a>
									</Link>
								</h2>
							)}
						</div>
					</div>
				</article>
			);
		}

		return (
			<article className={styles.headerSection} key={index}>
				<Link
					href={`/[url]/article/[id]`}
					as={`/${urlDescription}/article/${id}`}
				>
					<a className={styles.scrollImageAnchor}>
						<div className={styles.scrollImageWrapper}>
							<LazyLoad once={true}>
								<img
									className={styles.scrollImageMain}
									src={headlineImage}
									alt={headlineImageAlt}
									srcSet={srcset ? srcset : []}
									sizes="330px"
								/>
							</LazyLoad>
							<div className={styles.scrollTitleContainer}>
								<div className={styles.scrollTitlePad}>
									<div className={styles.scrollTitleWrap}>
										<h1 className={styles.scrollTitle}>{headline}</h1>
									</div>
									<div className={styles.scrollKickerWrapper}>
										<p className={styles.scrollKicker}>{kicker}</p>
									</div>
									<div className={styles.scrollCategoryWrapper}>
										<h2 className={styles.scrollCategory}>{category}</h2>
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
