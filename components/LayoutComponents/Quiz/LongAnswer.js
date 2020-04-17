import { useMemo, useCallback } from "react";
import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
// import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";

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
		<div className="bookend-wrapper">
			{showAnswer && (
				<div className="editor-answer">
					{correct && (
						<div className="correct">
							<div className="correct-group">
								<img className="correct-image" src={"/static/tickx128.png"} />
								<div className="correct-label">Correct</div>
							</div>
						</div>
					)}
					{!correct && (
						<div className="correct">
							<div className="correct-group">
								<div className="incorrect-wrapper">
									<img
										className="incorrect-image"
										src={"/static/deletex128.png"}
									/>
								</div>
								<div className="incorrect-label">Wrong</div>
							</div>
						</div>
					)}

					<div className="editor-block">
						<Slate editor={editor} value={answer}>
							{
								<div className="answer-comment">
									<h3 className="answer-comment-header">
										{correct ? correctAnswerComment : incorrectAnswerComment}
									</h3>
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
			<style jsx>
				{`
					.answer-comment {
						padding: 0;
						margin: 0;
					}
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 0;
						padding: 0;
					}
					.editor-answer {
						font-size: 2.5rem;
						text-align: justify;
						margin: 0 auto;
						padding-top: 0.5rem;
					}
					.editor-block {
						font-size: 2.25rem;
						text-align: justify;
						font-color: blue;
						padding: 2rem;
					}
					.correct {
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						height: 100%;
						color: ${theme.quizCorrectOverlay};
					}
					.correct-group {
						display: flex;
						flex-direction: row;
						text-align: center;
						margin: 0 auto;
					}
					.correct-label {
						position: relative;
						height: 100%;
						margin-left: 1rem;
					}
					.incorrect-label {
						position: relative;
						height: 100%;
						margin-left: -3.5rem;
						color: #d20000;
					}
					.correct-image {
						width: 25%;
					}
					.incorrect-image {
						width: 40%;
					}
					.incorrect-wrapper {
						display: flex;
						flex-direction: row;
						align-items: center;
					}
					@media only screen and (max-width: 650px) {
						.answer-comment {
							font-size: 1.75rem;
						}
						.answer-comment-header {
							font-size: 1.75rem;
							padding: 0;
							margin: 0;
						}
						.correct-image {
							width: 20%;
							height: 20%;
						}
						.correct-label {
							font-size: 1.75rem;
						}
						.editor-block {
							padding: 1rem;
						}
						.incorrect-image {
							width: 20%;
						}
						.incorrect-label {
							font-size: 1.75rem;
						}
					}

					@media only screen and (max-width: 450px) {
						.answer-comment {
							margin: 0.5rem 0;
						}
						.answer-comment-header {
							font-size: 1.4rem;
							line-height: 1.6rem;
							padding: 0;
							margin: 0;
						}
						.editor-block {
							padding: 0.5rem;
						}
					}
				`}
			</style>
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
