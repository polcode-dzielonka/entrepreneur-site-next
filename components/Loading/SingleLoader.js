import styles from "./styles/singleLoaderStyles.module.sass";
const SingleLoader = () => {
	return (
		<article className={styles.imageContainer}>
			<div className={styles.banner}>
				<div className={styles.title}></div>
				<div className={styles.category}></div>
			</div>
		</article>
	);
};
export default SingleLoader;
