import { useEffect } from "react";
import QuizLayout from "../../../../../components/Layouts/QuizLayout";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { QUIZ } from "../../../../../graphql/indivQuiz";
import QuickViewLoading from "../../../../../components/Loading/Layouts/QuizLoadingLayout";
import prodRequest from "../../../../../components/apiRequest/prodRequest";
import { quizQuery } from "../../../../../data/queryData/querys";
import useSWR from "swr";

const Questions = ({
	individual,
	headline,
	quiz,
	slide,
	questionId,
	url,
	quizId,
	score,
}) => {
	const router = useRouter();

	const { data: individualQuizCache } = useSWR(
		`individualQuiz-${quizId}`,
		() =>
			prodRequest({
				query: QUIZ,
				variables: { id: quizId },
				operationName: "GetProductionQuiz",
			}),
		{ initialData: individual },
	);

	const { data: headlineCache } = useSWR(
		"latestArticles",
		() => prodRequest(quizQuery[0]),
		{ initialData: headline },
	);
	const { data: quizCache } = useSWR(
		"headlineQuizs",
		() => prodRequest(quizQuery[1]),
		{ initialData: quiz },
	);
	const { data: slideShowCache } = useSWR(
		"headlineSlideshows",
		() => prodRequest(quizQuery[2]),
		{ initialData: slide },
	);

	if (!individualQuizCache || !headlineCache || !quizCache || !slideShowCache)
		return <QuickViewLoading />;

	useEffect(() => {
		const tempQuizCookie = Cookie.get("temp-quiz-session")
			? JSON.parse(Cookie.get("temp-quiz-session"))
			: false;

		if (!tempQuizCookie) {
			if (questionId === "opening") {
				Cookie.set("temp-quiz-session", JSON.stringify(true));
			} else if (questionId !== "opening") {
				router.push(`/${url}/quiz/${quizId}/questions/opening`);
			}
		} else if (tempQuizCookie) {
			if (questionId === "closing") {
				Cookie.remove("temp-quiz-session");
			} else if (questionId !== "opening") {
				router.push(`/${url}/quiz/${quizId}/questions/opening`);
			}
		}
	}, []);

	return (
		<QuizLayout
			individual={individualQuizCache.data.getProductionQuiz}
			headline={headlineCache.data.listProductionArticles}
			// latest={headlineCache.data.listProductionArticles}
			quiz={quizCache.data.listProductionQuizs}
			slide={slideShowCache.data.listProductionSlideshows}
			id={quizId}
			position={questionId}
			url={url}
			score={Number(score)}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	context.res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

	const { questionId, url, quizId, score } = context.params;
	const scoreCheck = score ? score : null;

	// Fetch data from external API
	const QUIZ_QUERY = {
		query: QUIZ,
		variables: { id: quizId },
		operationName: "GetProductionQuiz",
	};

	const [individual, headline, quiz, slide] = await Promise.all(
		[QUIZ_QUERY, ...quizQuery].map(query =>
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
			questionId,
			url,
			quizId,
			score: scoreCheck,
		},
	};
}

export default Questions;
