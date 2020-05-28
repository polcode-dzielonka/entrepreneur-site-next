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
		<div className="bookend-wrapper">
			<h1 className="section-header-score">Current Score: {score}</h1>
			{!showAnswer && (
				<div className="easing">
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
				<div className="easing">
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
			<h1 className="section-header">
				<span className="question-position">{questionPosition}</span>
				{question}
			</h1>
			<div className="answer-wrap">
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
			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
					}
					.easing {
						animation: easingIn;
						animation-duration: 2s;
					}
					.section-brief {
						margin: 1.5rem 0;
						padding: 0;
						font-size: 1.45rem;
						font-weight: 300;
						line-height: 2rem;
						color: ${theme.secondary};
						text-transform: capitalize;
						font-family: ${theme.secondaryFont};
					}
					.section-header-score {
						margin-bottom: 1.5rem;
						padding: 0;
						margin-top: 0rem;
						font-size: 3rem;
						font-weight: 900;
						line-height: 3rem;
						text-transform: capitalize;
						font-style: italic;
						text-align: center;
						border-bottom: 1px solid #9d9d9d;
						border-top: 1px solid #9d9d9d;
						padding: 0.75rem 0 0.5rem;
						font-family: ${theme.font};
						color: ${theme.secondary};
					}
					.section-header {
						margin-bottom: 1.5rem;
						padding: 0;
						font-size: 3rem;
						font-weight: 900;
						line-height: 3rem;
						text-transform: capitalize;
						font-style: italic;
						text-align: center;
						border-bottom: 1px solid #9d9d9d;
						border-top: 1px solid #9d9d9d;
						padding: 0.75rem 0 0.5rem;
						font-family: ${theme.font};
						color: ${theme.secondary};
					}
					.section-paragraph {
						margin: 2rem auto;
						width: 85%;
						padding: 0;
						font-size: 1.45rem;
						font-weight: 300;
						line-height: 2rem;
						color: ${theme.secondary};
						font-family: ${theme.secondaryFont};
					}
					.question-position {
						font-weight: 900;
						font-family: ${theme.font};
						color: ${theme.primary};
						margin-right: 0.5rem;
					}
					.question-position:after {
						content: ".";
						display: inline-block;
					}
					@keyframes easingIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					@media only screen and (max-width: 670px) {
						.answer-wrap {
							margin: 0.75rem 0rem;
						}
						.section-header-score {
							font-size: 2.4rem;
							line-height: 2.75rem;
							padding: 0.5rem;
							margin: 0 auto;
							font-style: normal;
						}
						.section-header {
							font-size: 2.4rem;
							line-height: 2.75rem;
							padding: 0.5rem;
							margin: 0 auto;
							font-style: normal;
						}
						.section-paragraph {
							margin: 2rem 0 0 0;
							width: 98%;
						}
					}
					@media only screen and (max-width: 450px) {
						.section-header-score {
							font-size: 1.75rem;
							line-height: 2rem;
							padding: 0.5rem;
							margin: 0.75rem 0;
							font-style: normal;
						}
						.section-header {
							font-size: 1.75rem;
							line-height: 2rem;
							padding: 0.5rem;
							margin: 0 auto;
							font-style: normal;
						}
					}
				`}
			</style>
		</div>
	);
};
Questions.propTypes = {
	total: PropTypes.Int,
	position: PropTypes.string,
	questions: PropTypes.Object,
};
export default Questions;
