import { QUIZ } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import { withApollo } from "../lib/apollo";

const Quiz = () => {
	return (
		<HeadlineLayout
			QUERY={QUIZ}
			title="Quiz"
			pageTitle="Quiz"
			canonical="quiz"
		/>
	);
};

export default withApollo(Quiz);
