import { PropTypes } from "prop-types";
import styles from "./styles/crossIconStyles.module.sass";
const CrossIcon = ({ onClick }) => {
	return (
		<div className={styles.container} onClick={onClick}>
			<div className={`${styles.line} ${styles.lineTop}`} />
			<div className={`${styles.line} ${styles.lineMiddle}`} />
			<div className={`${styles.line} ${styles.lineBottom}`} />
		</div>
	);
};

CrossIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	open: PropTypes.Boolean,
};

export default CrossIcon;
