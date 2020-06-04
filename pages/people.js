import {
	ALL_POSTS_QUERY,
	QUIZ,
	SLIDE,
	HEADLINES,
	LATEST,
} from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";

const People = ({ headline, quiz, slide }) => {
	if (!headline.data || !quiz.data || !slide.data)
		return <MainHeadlineLoading />;
	return (
		<HeadlineLayout
			headline={headline.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			title="People"
			pageTitle="People"
			canonical="people"
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

	// Fetch data from external API
	const querys = [
		{
			query: HEADLINES,
			variables: {
				filter: { category: "people" },
			},
			operationName: "ListProductionArticles",
		},

		{
			query: QUIZ,
			variables: {
				filter: { mainHeadline: true },
				// limit: 5,
			},
			operationName: "ListProductionQuizs",
		},
		{
			query: SLIDE,
			variables: {
				longForm: "true",
				// limit: 5,
			},
			operationName: "ListProductionSlideshows",
		},
	];
	const [headline, quiz, slide] = await Promise.all(
		querys.map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	// Pass data to the page via props
	return { props: { headline, quiz, slide } };
}
export default People;
