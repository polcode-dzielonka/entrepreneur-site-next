import { useRouter } from "next/router";
import QuizLayout from "../../../../../components/Layouts/QuizLayout";
import { withApollo } from "../../../../../lib/apollo";

const Questions = () => {
	const router = useRouter();

	const { questionId, url, quizId, score } = router.query;
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
