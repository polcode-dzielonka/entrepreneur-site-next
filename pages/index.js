import { ALL_POSTS_QUERY } from "../graphql/headline";
import MainHeadlineLayout from "../components/Layouts/MainHeadlineLayout";
import { withApollo } from "../lib/apollo";

const Home = () => {
	return (
		<MainHeadlineLayout
			QUERY={ALL_POSTS_QUERY}
			title="WealthMack"
			pageTitle={"Latest"}
			canonical=""
		/>
	);
};

export default withApollo(Home);
