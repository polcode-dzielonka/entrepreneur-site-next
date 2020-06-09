import ArticleLayout from "../../../components/Layouts/ArticleLayout";
import prodRequest from "../../../components/apiRequest/prodRequest";
import { articleQuery } from "../../../data/queryData/querys";
import useSWR from "swr";
import { ARTICLE } from "../../../graphql/indivArticle";
const Article = ({ individual, quiz, slide, id, url }) => {
	const { data: individualArticleCache } = useSWR(
		`individualArticle-${id}`,
		() =>
			prodRequest({
				query: ARTICLE,
				variables: {
					id,
				},
				operationName: "GetProductionArticle",
			}),
		{ initialData: individual },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(articleQuery[0]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(articleQuery[1]),
		{ initialData: slide },
	);

	if (!individualArticleCache || !quizCache || !slideShowCache)
		return <MainHeadlineLoading />;

	return (
		<ArticleLayout
			id={id}
			individual={individualArticleCache.data.getProductionArticle}
			quiz={quizCache.data.listProductionQuizs}
			slide={slideShowCache.data.listProductionSlideshows}
			url={url}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

	// Fetch data from external API
	const { id, url } = context.params;
	const ARTICLE_QUERY = {
		query: ARTICLE,
		variables: {
			id,
		},
		operationName: "GetProductionArticle",
	};

	const [individual, quiz, slide] = await Promise.all(
		[ARTICLE_QUERY, ...articleQuery].map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	// Pass data to the page via props
	return { props: { individual, quiz, slide, id, url } };
}

export default Article;
