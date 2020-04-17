import { useMemo, useCallback } from "react";
import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";

import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
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
	srcset,
}) => {
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);

	const value = details;
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
				srcset={srcset}
			/>
			{positionClosing && (
				<h1 className="section-header">
					{scoreComments[`scoreComment${commentNumber}`]}
				</h1>
			)}

			<>
				<div className="section-paragraph">
					<Slate editor={editor} value={value}>
						<Editable
							readOnly={true}
							renderElement={renderElement}
							renderLeaf={renderLeaf}
						/>
					</Slate>
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
					@media only screen and (max-width: 650px) {
						.section-header-open {
							font-size: 2.4rem;
							line-height: 2.75rem;
							padding: 0.5rem;
							margin: 1.75rem 0;
							font-style: normal;
						}
						.section-header {
							font-size: 2.4rem;
							line-height: 2.75rem;
							padding: 0.5rem;
							margin: 1.75rem 0;
							font-style: normal;
						}
						.section-paragraph {
							margin: 1.75rem auto;
							width: 100%;
						}
						.end-header {
							margin: 1.75rem auto;
							width: 100%;
						}
					}

					@media only screen and (max-width: 450px) {
						.end-header {
							margin: 1.75rem auto;
							width: 100%;
							font-size: 1.5rem;
							line-height: 1.75rem;
						}
						.section-header-open {
							font-size: 1.75rem;
							line-height: 2rem;
							margin: 0.5rem 0rem;
						}
						.section-header {
							font-size: 1.75rem;
							line-height: 2rem;
							margin: 2rem 0rem;
						}
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
	srcset: PropTypes.array,
};

QuizBookEnds.defaultProps = {
	details: [
		{
			type: "paragraph",
			children: [{ text: "" }],
		},
	],
};
export default QuizBookEnds;
