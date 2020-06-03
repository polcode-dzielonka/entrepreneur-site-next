import { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { useRouter } from "next/router";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import styles from "./styles/bookEndStyles.module.sass";
import baseTheme from "../../../theme/baseTheme.json";
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
		<div className={styles.bookEndWrapper}>
			{positionClosing && (
				<h1 className={`${styles.sectionHeader} section-header`}>
					<div>
						Final Score: {finalScore} out of {numberQuestions}
					</div>
				</h1>
			)}
			{positionOpening && <h1 className={styles.sectionHeaderOpen}>{title}</h1>}
			<Embed
				embed={embed}
				image={image}
				imageAlt={imageAlt}
				imageAltAttribution={imageAltAttribution}
				imageAltAttributionLink={imageAltAttributionLink}
				srcset={srcset}
				styles={{ width: "100%", height: "100%" }}
				noMaxHeight={true}
			/>

			{positionClosing && (
				<h1 className={`${styles.sectionHeader} section-header`}>
					{scoreComments[`scoreComment${commentNumber}`]}
				</h1>
			)}

			<>
				<div className={styles.sectionParagraph}>
					<Slate editor={editor} value={value}>
						<Editable
							readOnly={true}
							renderElement={renderElement}
							renderLeaf={renderLeaf}
						/>
					</Slate>
				</div>
				{positionClosing && <h1 className={styles.endHeader}> {title}</h1>}
			</>
			<style jsx>
				{`
					.section-header {
						color: ${commentNumber === 1
							? "#5bc20f"
							: commentNumber > 2
							? baseTheme.primary
							: baseTheme.secondary};
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
