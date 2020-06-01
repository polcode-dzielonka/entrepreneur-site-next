import styles from "./styles/quizLoadingStyles.module.sass";
const QuizLoading = () => {
	return ["", "", "", "", "", "", ""].map((article, index) => {
		if (index === 0) {
			return (
				<div className={styles.banner} key={index}>
					<div className={style.title}></div>
					<div className={style.title}></div>
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
						<div className={styles.firstTitle}></div>
					</div>
				</article>
			);
		}

		return (
			<article className={styles.headerSection} key={index}>
				<div className={styles.subArticle}>
					<div className={styles.subArticleWrap}></div>
					<div className={styles.subArticleTitleWrap}>
						<div className={styles.subTitleOne}></div>
						<div className={styles.subTitleTwo}></div>
					</div>
				</div>
			</article>
		);
	});
};
export default QuizLoading;

QuizLoading.propTypes = {};
