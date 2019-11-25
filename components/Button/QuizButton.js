import { theme } from "../../theme/baseCss";
import { useState } from "react";
import PropTypes from "prop-types";
import Ripples from "./Ripples";
const QuizButton = ({
	answer,
	handleClick,
	buttonDisabled,
	buttonColor,
	correct,
	showAnswer,
	totalVotes,
	answerDetails,
}) => {
	const [selected, setSelected] = useState(false);
	const classCorrect =
		correct && showAnswer ? "quiz-correct-section" : "quiz-section";
	const secondClassCorrect =
		correct && showAnswer
			? "percentage-bar-animation"
			: showAnswer
			? "percentage-bar-animation"
			: null;

	const percentageAnswers = Math.round(
		(!answer.votes && answer.correct
			? 1
			: !answer.votes && !answer.incorrect
			? 0
			: Number(answer.votes) / totalVotes
			? Number(answer.votes) / totalVotes
			: 1) * 100,
		0,
	);
	return (
		<Ripples
			color={theme.quizRipple}
			styling={{ borderRadius: "25px", margin: "0.45rem 0rem" }}
		>
			<button
				className={classCorrect}
				onClick={() => {
					handleClick(answer, answerDetails, correct);
					setSelected(true);
				}}
				disabled={buttonDisabled}
			>
				<div className="quiz-button-overlay">
					<div className="percentage-bar">
						<div className={secondClassCorrect}></div>
					</div>
					<div className="label">
						<div className="quiz-label">{answer.answer}</div>
					</div>
					{showAnswer && (
						<div className="percentage-label">
							<div className="percentage-label-answer">
								{percentageAnswers}%
							</div>
						</div>
					)}
				</div>
				<style jsx>{`
					.percentage-bar {
						width: ${percentageAnswers}%;
						position: absolute;
						direction: ltr;
						height: 100%;
						top: 0;
						left: 0;
						z-index: 1;
					}
					.percentage-bar-animation {
						background: ${correct && showAnswer
							? theme.quizCorrectOverlay
							: `rgba(255,255,255,0.2);`};
						height: 100%;
						animation: barMove;
						animation-duration: 2s;
					}
					.percentage-label {
						position: absolute;
						display: flex;
						align-items: center;
						top: 50%;
						right: 10px;
						background-color: #fff;
						padding: 0;
						text-align: center;
						font-family: ${theme.font};
						width: 7.5%;
						height: 75%;
						font-size: 1rem;
						font-weight: 600;
						border-radius: 20px;
						transform: translateY(-50%);
						color: ${correct && showAnswer
							? theme.quizCorrectOverlay
							: theme.primary};
						z-index: 3;
					}
					.percentage-label-answer {
						margin: 0 auto;
					}
					.quiz-label {
						font-size: 2rem;
						text-align: center;
					}
					.label {
						text-align: center;
						width: 100%;
						z-index: 2;
						text-decoration: none;
						font-family: ${theme.font};
						color: #fefefe;
					}
					.quiz-button-overlay {
						position: relative;
						text-decoration: none;
						display: flex;
						flex-direction: row;
						align-items: center;
						width: 100%;
						border-bottom: ${selected && !correct
							? `4px solid ${theme.primary}`
							: "none"};
					}
					.quiz-button-correct {
						position: relative;
						text-decoration: none;
						display: flex;
						flex-direction: row;
						align-itemsanimation-name: correctBar;
						animation-duration: 1s;
						width: 50%;
						background: ${theme.quizCorrect};
					}
					.quiz-section {
						background: ${theme.quizButton};
						text-align: center;
						cursor: pointer;
						width: 100%;
						margin: 0;
						padding: 0;
						border: none;
					}
					.quiz-section:hover {
						opacity: ${buttonDisabled ? "1" : "0.7"};
						border: none;
					}
					.quiz-correct-section {
						background: ${theme.quizCorrect};
						text-align: center;
						cursor: pointer;
						width: 100%;
						margin: 0;
						padding: 0;
						border: none;
					}
					@keyframes barMove {
						0%,
						28% {
							width: 0%;
						}
						100% {
							width: 100%;
						}
					}
				`}</style>
			</button>
		</Ripples>
	);
};

QuizButton.propTypes = {
	answer: PropTypes.String,
	handleClick: PropTypes.Func,
	buttonDisabled: PropTypes.Bool,
	buttonColor: PropTypes.String,
};

export default QuizButton;
