import { ALL_POSTS_QUERY } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Success = () => {
	return (
		<HeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="People"
			pageTitle="People"
			canonical="people"
		/>
	);
};

export default withApollo(Success);
