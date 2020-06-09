import QuickViewLayout from "../../../../../components/Layouts/QuickViewLayout";
import { SLIDESHOW } from "../../../../../graphql/indivSlideShow";
import QuickViewLoading from "../../../../../components/Loading/Layouts/QuizLoadingLayout";
import prodRequest from "../../../../../components/apiRequest/prodRequest";
import { slideShowQuery } from "../../../../../data/queryData/querys";
import useSWR from "swr";

const Slide = ({
	individual,
	headline,
	quiz,
	slide,
	url,
	slideId,
	slideContentId,
}) => {
	const { data: individualSlideshowCache } = useSWR(
		`individualSlideshow-${slideId}`,
		() =>
			prodRequest({
				query: SLIDESHOW,
				variables: { id: slideId },
				operationName: "GetProductionSlideshow",
			}),
		{ initialData: individual },
	);

	const { data: headlineCache } = useSWR(
		"latestArticles",
		() => prodRequest(slideShowQuery[0]),
		{ initialData: headline },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(slideShowQuery[1]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(slideShowQuery[2]),
		{ initialData: slide },
	);

	if (
		!individualSlideshowCache ||
		!headlineCache ||
		!quizCache ||
		!slideShowCache
	)
		return <QuickViewLoading />;

	return (
		<QuickViewLayout
			individual={individualSlideshowCache.data.getProductionSlideshow}
			headline={headlineCache.data.listProductionArticles}
			quiz={quizCache.data.listProductionQuizs}
			// slide={slideShowCache.data.listProductionSlideshows}
			id={slideId}
			position={slideContentId}
			url={url}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

	const { slideContentId, slideId, url } = context.params;

	// Fetch data from external API

	const SLIDESHOW_QUERY = {
		query: SLIDESHOW,
		variables: { id: slideId },
		operationName: "GetProductionSlideshow",
	};

	const [individual, headline, quiz, slide] = await Promise.all(
		[SLIDESHOW_QUERY, ...slideShowQuery].map(query =>
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
			quiz,
			slide,
			url,
			slideId,
			slideContentId,
		},
	};
}

export default Slide;
