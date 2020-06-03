import { useEffect } from "react";
import QuizLayout from "../../../../../components/Layouts/QuizLayout";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

import { QUIZ } from "../../../../../graphql/indivQuiz";
import QuickViewLoading from "../../../../../components/Loading/Layouts/QuizLoadingLayout";
import prodRequest from "../../../../../components/apiRequest/prodRequest";
import {
	HEADLINES,
	SLIDE,
	QUIZ as QUIZ_CONTENT,
	LATEST,
} from "../../../../../graphql/headline";

const Questions = ({
	individual,
	headline,
	latest,
	quiz,
	slide,
	questionId,
	url,
	quizId,
	score,
}) => {
	const router = useRouter();

	if (
		!individual.data ||
		!headline.data ||
		!latest.data ||
		!quiz.data ||
		!slide.data
	)
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
			individual={individual.data.getProductionQuiz}
			headline={headline.data.listProductionArticles}
			latest={latest.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			id={quizId}
			position={questionId}
			url={url}
			score={Number(score)}
		/>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	const { questionId, url, quizId, score } = context.params;
	const scoreCheck = score ? score : null;
	// Fetch data from external API
	const querys = [
		{
			query: QUIZ,
			variables: { id: quizId },
			operationName: "GetProductionQuiz",
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
				limit: 10,
			},
			operationName: "ListProductionArticles",
		},
		{
			query: QUIZ_CONTENT,
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
			questionId,
			url,
			quizId,
			score: scoreCheck,
		},
	};
}

export default Questions;
