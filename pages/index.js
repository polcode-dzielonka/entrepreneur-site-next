import MainHeadlineLayout from "../components/Layouts/MainHeadlineLayout";
import MainHeadlineLoading from "../components/Loading/Layouts/MainHeadlineLoadingLayout";
import prodRequest from "../components/apiRequest/prodRequest";
import { filterUnique } from "../utils/handler";
import { mainHeadlineQuery } from "../data/queryData/querys";
import useSWR from "swr";

const Home = ({ headline, latest, quiz, slide }) => {
	const { data: headlineCache } = useSWR(
		"headlineArticles",
		() => prodRequest(mainHeadlineQuerys[0]),
		{ initialData: headline },
	);
	const { data: latestCache } = useSWR(
		"latestArticles",
		() => prodRequest(mainHeadlineQuerys[1]),
		{ initialData: latest },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(mainHeadlineQuerys[2]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(mainHeadlineQuerys[3]),
		{ initialData: slide },
	);

	if (!headlineCache || !latestCache || !quizCache || !slideShowCache)
		return <MainHeadlineLoading />;

	const newLatestArticles = filterUnique(
		latestCache.data.listProductionArticles.items,
		headlineCache.data.listProductionArticles.items,
	);
	return (
		<MainHeadlineLayout
			headline={headlineCache.data.listProductionArticles}
			latest={newLatestArticles}
			quiz={quizCache.data.listProductionQuizs}
			slide={slideShowCache.data.listProductionSlideshows}
			title="WealthMack"
			pageTitle={"Latest"}
			canonical=""
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

	const [headline, latest, quiz, slide] = await Promise.all(
		mainHeadlineQuery.map(query =>
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
