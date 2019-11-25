import { ALL_POSTS_QUERY } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Quotes = () => {
	return (
		<HeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="Quotes"
			pageTitle="Quotes"
			canonical="quotes"
		/>
	);
};

export default withApollo(Quotes);
