import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Editor } from "slate-react";
import { Value } from "slate";
import { renderNode, renderMark, renderInline } from "../Editor";

const QuizBookEnds = ({
	image,
	imageAlt,
	imageAltAttribution,
	imageAltAttributionLink,
	title,
	details,
	position,
	embed,
	scoreComments,
	finalScore,
	numberQuestions,
}) => {
	const value = Value.fromJSON(details);
	const positionOpening = position === "opening";
	const positionClosing = position === "closing";
	const percentageScore = Number(finalScore) / Number(numberQuestions);
	const commentNumber = Math.ceil(
		(1 - percentageScore > 0 ? 1 - percentageScore : 0.01) *
			Object.keys(scoreComments).length,
		0,
	);
	return (
		<div className="bookend-wrapper">
			{positionClosing && (
				<h1 className="section-header">
					<div>
						Final Score: {finalScore} out of {numberQuestions}
					</div>
				</h1>
			)}
			{positionOpening && <h1 className="section-header-open">{title}</h1>}
			<Embed
				embed={embed}
				image={image}
				imageAlt={imageAlt}
				imageAltAttribution={imageAltAttribution}
				imageAltAttributionLink={imageAltAttributionLink}
			/>
			{positionClosing && (
				<h1 className="section-header">
					{scoreComments[`scoreComment${commentNumber}`]}
				</h1>
			)}

			<>
				<div className="section-paragraph">
					<Editor
						readOnly={true}
						value={value}
						renderMark={renderMark}
						renderBlock={renderNode}
						renderInline={renderInline}
					/>
				</div>
				{positionClosing && <h1 className="end-header"> {title}</h1>}
			</>
			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 0;
						padding: 0;
					}
					.end-header {
						margin: 1.5rem 0;
						padding: 0;
						font-size: 2.5rem;
						font-weight: 900;
						line-height: 3rem;
						text-transform: capitalize;
						text-align: center;
						padding: 0.5rem 0 0.5rem;
						font-family: ${theme.font};
						color: ${theme.secondary};
					}
					.section-header {
						margin: 1.5rem 0;
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
						color: ${commentNumber === 1
							? theme.quizCorrectOverlay
							: commentNumber > 2
							? theme.primary
							: theme.secondary};
					}
					.section-header-open {
						margin: 1.5rem 0;
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
				`}
			</style>
		</div>
	);
};
QuizBookEnds.propTypes = {
	position: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	imageAltAttribution: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	title: PropTypes.string,
	details: PropTypes.Object,
	embed: PropTypes.string,
	scoreComments: PropTypes.string,
	finalScore: PropTypes.Bool,
	numberQuestions: PropTypes.Bool,
};

QuizBookEnds.defaultProps = {
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
export default QuizBookEnds;