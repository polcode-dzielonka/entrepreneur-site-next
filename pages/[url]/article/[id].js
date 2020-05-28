import ArticleLayout from "../../../components/Layouts/ArticleLayout";
import { ARTICLE } from "../../../graphql/indivArticle";
import { HEADLINES, SLIDE, QUIZ } from "../../../graphql/headline";
import prodRequest from "../../../components/apiRequest/prodRequest";
import SlideLoading from "../../../components/Loading/Layouts/SlideShowLoading";

const Article = ({ individual, quiz, slide, id, url }) => {
	if (!individual.data || !quiz.data || !slide.data)
		return <MainHeadlineLoading />;

	return (
		<ArticleLayout
			id={id}
			individual={individual.data.getProductionArticle}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			url={url}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	// Fetch data from external API
	const { id, url } = context.params;

	const querys = [
		{
			query: ARTICLE,
			variables: {
				id,
			},
			operationName: "GetProductionArticle",
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
	const [individual, quiz, slide] = await Promise.all(
		querys.map(query =>
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
