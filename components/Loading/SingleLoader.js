const styles = {
	banner: {
		position: "absolute",
		width: "100%",
		backgroundColor: "white",
		height: "30%",
		content: "",
		bottom: "0",
	},
	imageContainer: {
		width: "100%",
		backgroundColor: "#f4f4f4",
		position: "relative",
		marginRight: "1rem",
		border: "1px solid #e2e2e2e2",
		height: "476px",
	},
	title: {
		height: "25%",
		margin: "25px 20px 0px 20px",
		backgroundColor: " #e2e2e2e2",
	},
	category: {
		height: "25%",
		width: "25%",
		margin: "25px 20px 0px 20px",
		backgroundColor: "#e2e2e2e2",
	},
};

const SingleLoader = () => {
	return (
		<article style={styles.imageContainer}>
			<div style={styles.banner}>
				<div style={styles.title}></div>
				<div style={styles.category}></div>
			</div>
		</article>
	);
};
export default SingleLoader;
