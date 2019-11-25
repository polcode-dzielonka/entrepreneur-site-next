import { theme } from "../../theme/baseCss";
import PropTypes from "prop-types";

const Vanilla = props => {
	const { children } = props;

	return (
		<>
			<div className="page-layout">{children}</div>
			<style jsx>{`
				.page-layout {
					margin: 0 auto;
					width: 80%;
					max-width: ${theme.contentMaxWidth};
				}

				@media only screen and (max-width: 960px) {
					.page-layout {
						width: 100%;
						margin: 0 auto;
					}
				}
			`}</style>
		</>
	);
};

Vanilla.propTypes = {
	children: PropTypes.Object,
};

export default Vanilla;
