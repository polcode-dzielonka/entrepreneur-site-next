import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { motivationHeadlineQuery } from "../data/queryData/querys";
import { HEADLINES } from "../graphql/headline";

const Motivation = ({ headline, quiz, slide }) => {
	if (!headline || !quiz || !slide) return <MainHeadlineLoading />;
	return (
		<HeadlineLayout
			headline={headline.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			title="Motivation"
			pageTitle="Motivation"
			canonical="motivation"
			latestNextToken={headline.data.listProductionArticles.nextToken}
			latestSortIndex={headline.data.listProductionArticles.sortIndex}
			nextQuery={HEADLINES}
			queryFilter={{ category: "motivation" }}
			queryOpName="ListProductionArticles"
		/>
	);
};

export async function getStaticProps() {
	const [headline, quiz, slide] = await Promise.all(
		motivationHeadlineQuery.map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	return {
		props: { headline, quiz, slide },
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 10, // In seconds
	};
}
export default Motivation;
