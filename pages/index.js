import MainHeadlineLayout from "../components/Layouts/MainHeadlineLayout";
import { QUIZ, SLIDE, HEADLINES, LATEST } from "../graphql/headline";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { filterUnique } from "../utils/handler";
const Home = ({ headline, latest, quiz, slide }) => {
	if (!headline.data || !latest.data || !quiz.data || !slide.data)
		return <MainHeadlineLoading />;

	const newLatestArticles = filterUnique(
		latest.data.listProductionArticles.items,
		headline.data.listProductionArticles.items,
	);
	return (
		<MainHeadlineLayout
			headline={headline.data.listProductionArticles}
			latest={newLatestArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			title="WealthMack"
			pageTitle={"Latest"}
			canonical=""
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
				filter: { mainHeadline: true },
				limit: 4,
			},
			operationName: "ListProductionArticles",
		},
		{
			query: LATEST,
			variables: {
				limit: 10,
			},
			operationName: "ListProductionArticles",
		},
		{
			query: QUIZ,
			variables: {
				filter: { mainHeadline: true },
				limit: 5,
			},
			operationName: "ListProductionQuizs",
		},
		{
			query: SLIDE,
			variables: {
				longForm: "true",
				limit: 5,
			},
			operationName: "ListProductionSlideshows",
		},
	];
	const [headline, latest, quiz, slide] = await Promise.all(
		querys.map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	// Pass data to the page via props
	return { props: { headline, latest, quiz, slide } };
}

export default Home;
