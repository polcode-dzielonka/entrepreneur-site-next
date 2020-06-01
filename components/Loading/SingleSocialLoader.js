import styles from "./styles/singleSocialLoaderStyles.module.sass";

const SocialSingleLoader = () => {
	return (
		<article className={styles.imageContainer}>
			<div className={styles.socialContainer}>
				<div className={styles.header}>
					<div className={styles.profile}>
						<div className={styles.profileCirlce}></div>
					</div>
					<div className={styles.category}>
						<div className={styles.categoryLines}></div>
						<div className={styles.categoryLines}></div>
					</div>
				</div>
				<div className={styles.image}></div>
				<div className={styles.footer}>
					<div className={styles.footerCategoryLines}></div>
					<div className={styles.footerCategoryLines}></div>
				</div>
			</div>
		</article>
	);
};
export default SocialSingleLoader;
