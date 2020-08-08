import { useEffect } from "react";
import QuizLayout from "../../../../../components/Layouts/QuizLayout";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { QUIZ } from "../../../../../graphql/indivQuiz";
import QuickViewLoading from "../../../../../components/Loading/Layouts/QuizLoadingLayout";
import prodRequest from "../../../../../components/apiRequest/prodRequest";
import { quizQuery } from "../../../../../data/queryData/querys";

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

	if (!individual || !headline || !quiz || !slide) return <QuickViewLoading />;

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
			// latest={headlineCache.data.listProductionArticles}
			quiz={quiz.data.listProductionQuizs}
			slide={slide.data.listProductionSlideshows}
			id={quizId}
			position={questionId}
			url={url}
			score={Number(score)}
		/>
	);
};

export async function getStaticProps(context) {
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

export default Questions;
