import PropTypes from "prop-types";
import styles from "./styles/scrollingArticleLoadingStyles.module.sass";
const ScrollingArticlesLoading = ({ height }) => {
	return ["", "", "", "", "", "", ""].map((article, index) => {
		if (index === 0) {
			return (
				<article key={index} className={styles.largeImageContainer}>
					<div className={styles.banner}>
						<div className={styles.title}></div>
						<div className={styles.category}></div>
					</div>
				</article>
			);
		}

		return (
			<article className={`${styles.headerSection} header-section`} key={index}>
				<div className={styles.subArticle}>
					<div className={styles.subArticleWrap}></div>
					<div className={styles.subArticleTitleWrap}>
						<div className={styles.subTitleOne}></div>
						<div className={styles.subTitleTwo}></div>
					</div>
				</div>
				<style jsx>{`
					.header-section {
						height: ${height};
					}
				`}</style>
			</article>
		);
	});
};
export default ScrollingArticlesLoading;
ScrollingArticlesLoading.defaultProps = {
	height: "300px",
};
ScrollingArticlesLoading.propTypes = {
	height: PropTypes.int,
};
