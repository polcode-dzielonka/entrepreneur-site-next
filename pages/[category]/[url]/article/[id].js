import ArticleLayout from "../../../../components/Layouts/ArticleLayout";
import prodRequest from "../../../../components/apiRequest/prodRequest";
import { articleQuery } from "../../../../data/queryData/querys";
import { ARTICLE } from "../../../../graphql/indivArticle";
import ArticleLoading from "../../../../components/Loading/Layouts/ArticleLoadingLayout";

const Article = ({ individual, quiz, slide, id, category, url }) => {
	if (!individual || !quiz || !slide) return <ArticleLoading />;

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

export async function getStaticProps(context) {
	// Fetch data from external API
	const { id, category, url } = context.params;
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

	return {
		props: { individual, quiz, slide, id, category, url },
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 10, // In seconds
	};
}

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	// const res = await fetch('https://.../posts')
	// const posts = await res.json()

	// // Get the paths we want to pre-render based on posts
	// const paths = posts.map((post) => ({
	//   params: { id: post.id },
	// }))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths: [], fallback: true };
}

export default Article;
