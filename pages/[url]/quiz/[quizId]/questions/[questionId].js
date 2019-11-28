import { useEffect } from "react";
import { useRouter } from "next/router";
import QuizLayout from "../../../../../components/Layouts/QuizLayout";
import { withApollo } from "../../../../../lib/apollo";
import Cookie from "js-cookie";
const Questions = () => {
	const router = useRouter();
	const { questionId, url, quizId, score } = router.query;

	useEffect(() => {
		const tempQuizCookie = Cookie.get("temp-quiz-session")
			? JSON.parse(Cookie.get("temp-quiz-session"))
			: false;

		if (!tempQuizCookie && questionId === "opening") {
			Cookie.set("temp-quiz-session", JSON.stringify(true));
		} else if (!tempQuizCookie && questionId !== "opening") {
			router.push(`/${url}/quiz/${quizId}/questions/opening`);
		} else if (tempQuizCookie && questionId === "closing") {
			Cookie.remove("temp-quiz-session");
		}
	}, []);

	return (
		<QuizLayout
			id={quizId}
			position={questionId}
			url={url}
			score={Number(score)}
		/>
	);
};

export default withApollo(Questions);
