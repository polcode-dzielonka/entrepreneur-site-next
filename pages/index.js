import MainHeadlineLayout from "../components/Layouts/MainHeadlineLayout";
import {
	ALL_POSTS_QUERY,
	QUIZ,
	SLIDE,
	HEADLINES,
	LATEST,
} from "../graphql/headline";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { filterUnique } from "../utils/handler";
const Home = ({ site, headline, latest, quiz, slide }) => {
	if (!site.data || !headline.data || !latest.data || !quiz.data || !slide.data)
		return <MainHeadlineLoading />;

	const newLatestArticles = filterUnique(
		latest.data.listProductionArticles.items,
		headline.data.listProductionArticles.items,
	);
	return (
		<MainHeadlineLayout
			site={site.data.getProductionSite}
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
export async function getServerSideProps() {
	// Fetch data from external API
	const querys = [
		{
			query: ALL_POSTS_QUERY,
			variables: { id: process.env.REACT_APP_SITE_ID },
			operationName: "GetProductionSite",
		},
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
	const [site, headline, latest, quiz, slide] = await Promise.all(
		querys.map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	// Pass data to the page via props
	return { props: { site, headline, latest, quiz, slide } };
}

export default Home;
