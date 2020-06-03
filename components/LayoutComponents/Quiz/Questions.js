import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { UPDATE_QUIZ } from "../../../graphql/indivQuiz";
import QuizButton from "../../Button/QuizButton";
import QuickViewButton from "../../Button/QuickViewButton";
import LongAnswer from "./LongAnswer";
import prodRequest from "../../apiRequest/prodRequest";
import styles from "./styles/questionStyles.module.sass";
import SingleLoader from "../../Loading/SingleLoader";
const Questions = ({
	total,
	questionData,
	position,
	linkImage,
	nextHref,
	id,
	currentScore,
	setCurrentScore,
	questions,
	nextQuestionData,
	randomiseAnswers,
}) => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [correct, setCorrect] = useState(false);
	const [loading, setLoading] = useState(false);
	const questionDetails = questionData[0];
	const {
		answerImage,
		answerImageAlt,
		answerImageAttribution,
		answerImageAttributionLink,
		correctAnswerDetails,
		inCorrectAnswerDetails,
		longAnswer,
		longFalseAnswer,
		question,
		questionImage,
		questionImageAlt,
		questionImageAttribution,
		questionImageAttributionLink,
		questionPosition,
		correctAnswerComment,
		incorrectAnswerComment,
		questionSrcset,
		answerSrcset,
	} = questionDetails;

	const answerInfo = {
		...correctAnswerDetails,
		...inCorrectAnswerDetails,
	};
	const [selected, setSelected] = useState(false);
	useEffect(() => {
		setLoading(false);
	}, [answerImage]);
	const answerClick = (answer, answerDetail, correct) => {
		const answerType = correct
			? "correctAnswerDetails"
			: "inCorrectAnswerDetails";
		setShowAnswer(true);
		setButtonDisabled(true);

		//Add Votes down in Question Object
		const questionsObject = {
			...questions.questions,
			[questionPosition - 1]: {
				...questionDetails,
				[answerType]: {
					...questionDetails[answerType],
					[answerDetail]: {
						...answer,
						votes: answer.votes ? Number(answer.votes) + 1 : 1,
					},
				},
			},
		};

		const updateVotes = {
			id: id,
			questions: [
				JSON.stringify({
					...questions,
					questions: Object.keys(questionsObject).map(
						obj => questionsObject[obj],
					),
				}),
			],
		};

		try {
			const mutationData = {
				query: UPDATE_QUIZ,
				operationName: "UpdateProductionQuiz",
				variables: { input: updateVotes },
			};
			prodRequest(mutationData);
		} catch (err) {
			console.log("Error with request", err);
		}

		if (answer.correct) {
			setCorrect(true);
			setCurrentScore(currentScore + 1);
		}
	};

	if (loading) return <SingleLoader />;
	return (
		<div className={styles.bookendWrapper}>
			<h1 className={styles.sectionHeaderScore}>
				Current Score: {currentScore}
			</h1>
			<div>
				{!showAnswer && (
					<div className={styles.easing}>
						<Embed
							embed={questionDetails["questionImage-embed"]}
							image={questionImage}
							imageAlt={questionImageAlt}
							imageAltAttribution={questionImageAttribution}
							imageAltAttributionLink={questionImageAttributionLink}
							srcset={questionSrcset}
							styles={{ width: "100%", height: "100%" }}
							noMaxHeight={true}
						/>
					</div>
				)}
			</div>
			<div>
				{showAnswer && (
					<div className={styles.easing}>
						<Embed
							embed={questionDetails["answerImage-embed"]}
							image={answerImage}
							imageAlt={answerImageAlt}
							imageAltAttribution={answerImageAttribution}
							imageAltAttributionLink={answerImageAttributionLink}
							srcset={answerSrcset}
							styles={{ width: "100%", height: "100%" }}
							noMaxHeight={true}
						/>
					</div>
				)}
			</div>
			<h1 className={styles.sectionHeader}>
				<span className={styles.questionPosition}>{questionPosition}</span>
				{question}
			</h1>
			<div className={styles.answerWrap}>
				<QuizButton
					answerInfo={answerInfo}
					handleClick={answerClick}
					buttonDisabled={buttonDisabled}
					showAnswer={showAnswer}
					setShowAnswer={setShowAnswer}
					randomiseAnswers={randomiseAnswers}
					setSelected={setSelected}
					selected={selected}
					correct={correct}
					setCorrect={setCorrect}
				/>
			</div>
			<LongAnswer
				showAnswer={showAnswer}
				correct={correct}
				answer={longAnswer}
				correctAnswerComment={correctAnswerComment}
				incorrectAnswerComment={incorrectAnswerComment}
			/>

			{showAnswer && (
				<QuickViewButton
					label="Next"
					imgSrc={
						nextQuestionData[0]
							? nextQuestionData[0].questionImage
							: questionImage
					}
					href={`${nextHref}?score=${currentScore}`}
					refPath={`/[url]/quiz/[quizId]/questions/[questionId]`}
					srcset={
						nextQuestionData[0]
							? nextQuestionData[0].questionSrcset
							: questionSrcset
					}
					imageAlt={
						nextQuestionData[0]
							? nextQuestionData[0].questionImageAlt
							: questionImageAlt
					}
					handler={() => {
						setShowAnswer(false);
						setButtonDisabled(false);
						setSelected(false);
						setCorrect(false);
						setLoading(true);
					}}
				/>
			)}
		</div>
	);
};
Questions.propTypes = {
	total: PropTypes.Int,
	position: PropTypes.string,
	questions: PropTypes.Object,
};
export default Questions;
