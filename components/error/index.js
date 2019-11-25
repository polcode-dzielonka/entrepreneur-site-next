import PropTypes from "prop-types";
import Layout from "../../components/Layouts/Layout";
const Error = ({ message }) => (
	<Layout>
		<aside>
			{message}
			<style jsx>{`
				aside {
					padding: 1.5em;
					font-size: 14px;
					color: white;
					background-color: red;
				}
			`}</style>
		</aside>
	</Layout>
);

Error.propTypes = {
	message: PropTypes.string,
};
export default Error;
