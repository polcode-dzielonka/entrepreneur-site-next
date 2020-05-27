import { QUIZ, SLIDE, HEADLINES } from "../graphql/headline";
import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";

const Quotes = ({ headline, quiz, slide }) => {
	if (!headline.data || !quiz.data || !slide.data)
		return <MainHeadlineLoading />;
	return (
		<HeadlineLayout
			headline={headline.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			title="Quotes"
			pageTitle="Quotes"
			canonical="quotes"
		/>
	);
};
// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const querys = [
		{
			query: HEADLINES,
			variables: {
				filter: { mainHeadline: "quotes" },
			},
			operationName: "ListProductionArticles",
		},

		{
			query: QUIZ,
			variables: {
				filter: { mainHeadline: true },
			},
			operationName: "ListProductionQuizs",
		},
		{
			query: SLIDE,
			variables: {
				longForm: "true",
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

export default Quotes;
