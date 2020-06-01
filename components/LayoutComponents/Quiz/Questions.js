import { useState, useEffect } from "react";
import Button from "../../Button/Button";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { UPDATE_QUIZ } from "../../../graphql/indivQuiz";
import QuizButton from "../../Button/QuizButton";
import QuickViewButton from "../../Button/QuickViewButton";
import LongAnswer from "./LongAnswer";
import Cookie from "js-cookie";
import router from "next/router";
import prodRequest from "../../apiRequest/prodRequest";
import styles from "./styles/questionStyles.module.sass";
const Questions = ({
	total,
	questionData,
	position,
	linkImage,
	nextHref,
	id,
	currentScore,
	questions,
	nextQuestionData,
	randomiseAnswers,
}) => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [score, setScore] = useState(currentScore ? currentScore : 0);
	const [correct, setCorrect] = useState(false);

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
	const answerInfo = { ...correctAnswerDetails, ...inCorrectAnswerDetails };

	const [answers, setAnswers] = useState(
		Object.keys(answerInfo).sort((a, b) => a.answer - b.answer),
	);
	const [totalVotes, setTotalVotes] = useState(0);

	useEffect(() => {
		if (randomiseAnswers) {
			setAnswers(answers.sort(() => Math.random() - 0.5));
		} else {
			const nonRandomAnswers = Object.keys(answerInfo)
				.map(keyVal => {
					return {
						[keyVal]: answerInfo[keyVal].answer,
						answer: answerInfo[keyVal].answer,
					};
				})
				.sort((a, b) => a.answer.localeCompare(b.answer));
			let newOrderAnswers = [];
			nonRandomAnswers.map(answerRandom => {
				return Object.keys(answerRandom).map(answ => {
					if (answ !== "answer") {
						newOrderAnswers.push(answ);
					}
				});
			});
			setAnswers(newOrderAnswers);
		}
	}, []);

	useEffect(() => {
		setTotalVotes(
			Object.values(answerInfo).reduce(
				(runn, val) => runn + Number(val.votes),
				0,
			),
		);
	}, [answers]);

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
			setScore(score + 1);
		}
	};
	return (
		<div className={styles.bookendWrapper}>
			<h1 className={styles.sectionHeaderScore}>Current Score: {score}</h1>
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
			<h1 className={styles.sectionHeader}>
				<span className={styles.questionPosition}>{questionPosition}</span>
				{question}
			</h1>
			<div className={styles.answerWrap}>
				{answers.map((answer, index) => {
					return (
						<QuizButton
							key={index}
							answer={answerInfo[answer]}
							handleClick={answerClick}
							buttonDisabled={buttonDisabled}
							showAnswer={showAnswer}
							correct={answerInfo[answer].correct}
							totalVotes={totalVotes}
							answerDetails={answer}
						/>
					);
				})}
			</div>

			<LongAnswer
				showAnswer={showAnswer}
				correct={correct}
				answer={questionDetails.longAnswer}
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
					href={`${nextHref}?score=${score}`}
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
