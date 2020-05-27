import QuickViewLayout from "../../../../../components/Layouts/QuickViewLayout";
import { SLIDESHOW } from "../../../../../graphql/indivSlideShow";
import {
	HEADLINES,
	SLIDE,
	QUIZ,
	LATEST,
} from "../../../../../graphql/headline";
import QuickViewLoading from "../../../../../components/Loading/Layouts/QuizLoadingLayout";
import prodRequest from "../../../../../components/apiRequest/prodRequest";

const Slide = ({
	individual,
	headline,
	latest,
	quiz,
	slide,
	url,
	slideId,
	slideContentId,
}) => {
	if (
		!individual.data ||
		!headline.data ||
		!latest.data ||
		!quiz.data ||
		!slide.data
	)
		return <QuickViewLoading />;

	return (
		<QuickViewLayout
			individual={individual.data.getProductionSlideshow}
			headline={headline.data.listProductionArticles}
			latest={latest.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			id={slideId}
			position={slideContentId}
			url={url}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	const { slideContentId, slideId, url } = context.params;

	// Fetch data from external API
	const querys = [
		{
			query: SLIDESHOW,
			variables: { id: slideId },
			operationName: "GetProductionSlideshow",
		},
		{
			query: HEADLINES,
			variables: {
				filter: { mainHeadline: true },
			},
			operationName: "ListProductionArticles",
		},
		{
			query: LATEST,
			variables: {
				filter: { mainHeadline: false },
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
	const [individual, headline, latest, quiz, slide] = await Promise.all(
		querys.map(query =>
			prodRequest({
				query: query.query,
				variables: query.variables,
				operationName: query.operationName,
			}),
		),
	);

	// Pass data to the page via props
	return {
		props: {
			individual,
			headline,
			latest,
			quiz,
			slide,
			url,
			slideId,
			slideContentId,
		},
	};
}

export default Slide;
