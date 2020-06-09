import HeadlineLayout from "../components/Layouts/HeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { peopleHeadlineQuery } from "../data/queryData/querys";
import useSWR from "swr";

const People = ({ headline, quiz, slide }) => {
	const { data: headlineCache } = useSWR(
		"peopleHeadlineArticles",
		() => prodRequest(peopleHeadlineQuery[0]),
		{ initialData: headline },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(peopleHeadlineQuery[1]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(peopleHeadlineQuery[2]),
		{ initialData: slide },
	);

	if (!headlineCache || !quizCache || !slideShowCache)
		return <MainHeadlineLoading />;

	return (
		<HeadlineLayout
			headline={headlineCache.data.listProductionArticles}
			quiz={quizCache.data.listProductionQuizs}
			slide={slideShowCache.data.listProductionSlideshows}
			title="People"
			pageTitle="People"
			canonical="people"
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

	const [headline, quiz, slide] = await Promise.all(
		peopleHeadlineQuery.map(query =>
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
