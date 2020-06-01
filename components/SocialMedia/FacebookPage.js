import { FacebookProvider, Page } from "react-facebook";
import PropTypes from "prop-types";
import styles from "./styles/facebookPageStyles.module.sass";

const FacebookPage = ({ tabs, height, width, adaptContainerWidth }) => {
	return (
		<div className={styles.socialContainer}>
			<FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
				<Page
					href={process.env.FACEBOOK_PAGE_URL}
					tabs={tabs}
					height={height}
					width={width}
					adaptContainerWidth={adaptContainerWidth}
				/>
			</FacebookProvider>
		</div>
	);
};
FacebookPage.propTypes = {
	tabs: PropTypes.string,
	height: PropTypes.int,
	width: PropTypes.int,
	adaptContainerWidth: PropTypes.bool,
};
FacebookPage.defaultProps = {
	tabs: "timeline",
	height: 70,
	width: 500,
	adaptContainerWidth: true,
};
export default FacebookPage;
