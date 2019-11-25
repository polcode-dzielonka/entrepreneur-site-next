import { ALL_POSTS_QUERY } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Quiz = () => {
	return (
		<HeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="Quiz"
			pageTitle="Quiz"
			canonical="quiz"
		/>
	);
};

export default withApollo(Quiz);
