import styles from "./styles/sideBarContentLoadingStyles.module.sass";
const SideBarContentLoading = () => {
	return ["", "", "", "", "", "", "", ""].map((article, index) => {
		return (
			<article className={styles.sideImageContainer} key={index}>
				<div className={styles.banner}>
					<div className={styles.title}></div>
					<div className={styles.category}></div>
				</div>
			</article>
		);
	});
};
export default SideBarContentLoading;

SideBarContentLoading.propTypes = {};
