import PropTypes from "prop-types";
import styles from "./styles/longAnswerStyles.module.sass";
import Reader from "../Editor/reader";

const LongAnswer = ({
	showAnswer,
	correct,
	answer,
	correctAnswerComment,
	incorrectAnswerComment,
}) => {
	return (
		<div className={styles.bookendWrapper}>
			{showAnswer && (
				<div className={styles.editorAnswer}>
					{correct && (
						<div className={styles.correct}>
							<div className={styles.correctGroup}>
								<img
									className={styles.correctImage}
									src={"/static/tickx128.png"}
									alt="correct-tick-icon"
								/>
							</div>
						</div>
					)}
					{!correct && (
						<div className={styles.correct}>
							<div className={styles.correctGroup}>
								<div className={styles.correctGroup}>
									<img
										className={styles.incorrectImage}
										src={"/static/deletex128.png"}
										alt="incorrect-cross-icon"
									/>
								</div>
							</div>
						</div>
					)}
					<div className={styles.editorBlock}>
						<div className={styles.answerComment}>
							<div className={styles.answerCommentHeader}>
								{correct ? correctAnswerComment : incorrectAnswerComment}
							</div>
						</div>
						<div>
							<Reader value={answer[0].children} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
LongAnswer.propTypes = {
	showAnswer: PropTypes.Bool,
	correct: PropTypes.Bool,
	answer: PropTypes.String,
	correctAnswerComment: PropTypes.String,
	incorrectAnswerComment: PropTypes.String,
};

LongAnswer.defaultProps = {
	details: [
		{
			type: "paragraph",
			children: [{ text: "" }],
		},
	],
};
export default LongAnswer;
