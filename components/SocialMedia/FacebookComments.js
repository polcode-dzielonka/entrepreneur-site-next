import { FacebookProvider, Comments } from "react-facebook";
import PropTypes from "prop-types";
import styles from "./styles/facebookCommentStyles.module.sass";

const FacebookPage = ({ url, numPostsVisible, orderBy }) => {
	return (
		<div className={styles.socialContainer}>
			<FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
				<Comments
					href={url}
					numPosts={numPostsVisible}
					width={"100%"}
					orderBy={orderBy}
				/>
			</FacebookProvider>
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
