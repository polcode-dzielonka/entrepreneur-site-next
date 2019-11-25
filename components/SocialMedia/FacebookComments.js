import { FacebookProvider, Comments } from "react-facebook";
import PropTypes from "prop-types";
const FacebookPage = ({ url, numPostsVisible, orderBy }) => {
	return (
		<div className="social-container">
			<FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
				<Comments
					href={url}
					numPosts={numPostsVisible}
					width={"100%"}
					orderBy={orderBy}
				/>
			</FacebookProvider>
			<style jsx>{`
				.social-container {
					margin: 3rem 0rem;
				}

				@media only screen and (max-width: 1000px) {
					.social-container {
						margin: 0 auto;
						padding: 3rem 0rem;
					}
				}
			`}</style>
		</div>
	);
};
FacebookPage.propTypes = {
	url: PropTypes.string.isRequired,
	numPostsVisible: PropTypes.int,
	orderBy: PropTypes.string,
};
FacebookPage.defaultProps = {
	numPostsVisible: 5,
	orderBy: "reverse_time",
};

export default FacebookPage;
