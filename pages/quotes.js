import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { quoteHeadlineQuery } from "../data/queryData/querys";
import useSWR from "swr";

const Quotes = ({ headline, quiz, slide }) => {
	const { data: headlineCache } = useSWR(
		"networthHeadlineArticles",
		() => prodRequest(quoteHeadlineQuery[0]),
		{ initialData: headline },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(quoteHeadlineQuery[1]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(quoteHeadlineQuery[2]),
		{ initialData: slide },
	);

	if (!headlineCache || !quizCache || !slideShowCache)
		return <MainHeadlineLoading />;

	return (
		<HeadlineLayout
			headline={headlineCache.data.listProductionArticles}
			quiz={quizCache.data.listProductionQuizs}
			slide={slideShowCache.data.listProductionSlideshows}
			title="Quotes"
			pageTitle="Quotes"
			canonical="quotes"
		/>
	);
};
// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

	const [headline, quiz, slide] = await Promise.all(
		quoteHeadlineQuery.map(query =>
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
