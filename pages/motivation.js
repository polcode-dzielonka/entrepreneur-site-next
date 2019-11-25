import { ALL_POSTS_QUERY } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Motivation = () => {
	return (
		<HeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="Motivation"
			pageTitle="Motivation"
			canonical="motivation"
		/>
	);
};

export default withApollo(Motivation);
