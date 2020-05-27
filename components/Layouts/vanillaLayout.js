import PropTypes from "prop-types";
import styles from "./styles/contentLayout.module.css";
const Vanilla = props => {
	const { children } = props;

	return (
		<>
			<div className={styles.pageLayout}>{children}</div>
		</>
	);
};

Vanilla.propTypes = {
	children: PropTypes.Object,
};

export default Vanilla;
