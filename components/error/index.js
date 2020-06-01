import PropTypes from "prop-types";
import Layout from "../../components/Layouts/Layout";
import styles from "./styles/errorStyles.module.sass";
const Error = ({ message }) => (
	<Layout>
		<aside className={styles.errorLayout}>{message}</aside>
	</Layout>
);

Error.propTypes = {
	message: PropTypes.string,
};
export default Error;
