import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
// import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import styles from "./styles/longAnswerStyles.module.sass";

const LongAnswer = ({
	showAnswer,
	correct,
	answer,
	correctAnswerComment,
	incorrectAnswerComment,
}) => {
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
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
						<Slate editor={editor} value={answer}>
							{
								<div className={styles.answerComment}>
									<div className={styles.answerCommentHeader}>
										{correct ? correctAnswerComment : incorrectAnswerComment}
									</div>
								</div>
							}
							<Editable
								readOnly={true}
								renderElement={renderElement}
								renderLeaf={renderLeaf}
							/>
						</Slate>
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
