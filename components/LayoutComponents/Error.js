import SingleLoader from "../Loading/SingleLoader";
import HomeButton from "../Button/HomeButton";
import styles from "./styles/errorStyles.module.sass";
const Error = () => {
	return (
		<div className={styles.errorWrapper}>
			<SingleLoader />
			<div className={styles.section}>
				<h1 className={styles.sectionHeading}>Error Loading Page </h1>
			</div>
			<HomeButton label="Back To Home" href="/" />
		</div>
	);
};

export default Error;
