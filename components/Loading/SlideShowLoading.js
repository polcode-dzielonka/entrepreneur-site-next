import styles from "./styles/slideShowLoadingStyles.module.sass";

const SlideShowLoading = () => {
	return ["", "", "", ""].map((article, index) => {
		return (
			<article className={styles.largeImageContainer} key={index}>
				<div className={styles.banner}>
					<div className={styles.content}></div>
					<div className={styles.content}></div>
					<div className={styles.content}></div>
				</div>
			</article>
		);
	});
};
export default SlideShowLoading;

SlideShowLoading.propTypes = {};
