import styles from "./styles/articleLoadingStyles.module.sass";

const ArticlesLoading = () => {
	return ["", "", "", "", "", "", ""].map((article, index) => {
		if (index === 0) {
			return (
				<div className={styles.banner} key={index}>
					<div className={styles.title}></div>
					<div className={styles.title}></div>
					<div className={styles.category}></div>
				</div>
			);
		}
		if (index === 1) {
			return (
				<article className={styles.largeImageContainer} key={index}>
					<div className={styles.firstBanner}>
						<div className={styles.firstTitle}></div>
						<div className={styles.firstTitle}></div>
					</div>
				</article>
			);
		}

		return (
			<article className={styles.contentSection} key={index}>
				<div className={styles.content}></div>
				<div className={styles.content}></div>
				<div className={styles.content}></div>
			</article>
		);
	});
};
export default ArticlesLoading;

ArticlesLoading.propTypes = {};
