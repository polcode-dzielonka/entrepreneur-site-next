import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Editor } from "slate-react";
import { Value } from "slate";
import { renderNode, renderMark, renderInline } from "../Editor";
const LongAnswer = ({ showAnswer, correct, answer }) => {
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
						<Editor
							readOnly={true}
							value={Value.fromJSON(JSON.parse(answer))}
							renderNode={renderNode}
							renderMark={renderMark}
							renderInline={renderInline}
						/>
					</div>
				</div>
			)}
			<style jsx>
				{`
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
						font-size: 2rem;
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
				`}
			</style>
		</div>
	);
};
LongAnswer.propTypes = {
	showAnswer: PropTypes.Bool,
	correct: PropTypes.Bool,
	answer: PropTypes.String,
};

LongAnswer.defaultProps = {
	details: {
		document: {
			nodes: [
				{
					object: "block",
					type: "paragraph",
					nodes: [
						{
							object: "text",
							leaves: [
								{
									text: "",
								},
							],
						},
					],
				},
			],
		},
	},
};
export default LongAnswer;
