import { FacebookProvider, Page } from "react-facebook";
import PropTypes from "prop-types";
const FacebookPage = ({ tabs, height, width, adaptContainerWidth }) => {
	return (
		<div className="social-container">
			<FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
				<Page
					href={process.env.FACEBOOK_PAGE_URL}
					tabs={tabs}
					height={height}
					width={width}
					adaptContainerWidth={adaptContainerWidth}
				/>
			</FacebookProvider>
			<style jsx>{`
				.social-container {
					// margin: 3rem 0rem;
					width: 100%;
				}

				@media only screen and (max-width: 1000px) {
					.social-container {
						margin: 0 auto;
						padding: 1rem 0rem;
						width: auto;
					}
				}
				@media only screen and (max-width: 480px) {
					.social-container {
						width: 100%;
					}
				}
			`}</style>
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
