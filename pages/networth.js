import { ALL_POSTS_QUERY } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Networth = () => {
	return (
		<HeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="Networth"
			pageTitle="Networth"
			canonical="networth"
		/>
	);
};

export default withApollo(Networth);
