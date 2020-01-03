import { useState, useEffect } from "react";
import Button from "../../Button/Button";
import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { UPDATE_QUIZ } from "../../../graphql/indivQuiz";
import QuizButton from "../../Button/QuizButton";
import QuickViewButton from "../../Button/QuickViewButton";
import LongAnswer from "./LongAnswer";
import Cookie from "js-cookie";
import router from "next/router";
import axios from "axios";
const Questions = ({
	total,
	questionData,
	position,
	linkImage,
	nextHref,
	id,
	currentScore,
	questions,
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
	} = questionDetails;
	const answerInfo = { ...correctAnswerDetails, ...inCorrectAnswerDetails };
	const [answers, setAnswers] = useState(Object.keys(answerInfo));
	const [totalVotes, setTotalVotes] = useState(0);
	useEffect(() => {
		setAnswers(answers.sort(() => Math.random() - 0.5));
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
			axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(mutationData),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});
		} catch (err) {
			console.log("Error with request", err);
		}

		setTotalVotes(totalVotes + 1);
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
					/>
				</div>
			)}
			<h1 className="section-header">
				<span className="question-position">{questionPosition}</span>
				{question}
			</h1>
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
					imgSrc={linkImage}
					href={`${nextHref}?score=${score}`}
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
