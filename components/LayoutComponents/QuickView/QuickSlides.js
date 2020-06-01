import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import defaultValue from "../Editor/defaultValue";
import QuickViewButton from "../../Button/QuickViewButton";
import LazyLoad from "react-lazyload";
import styles from "./styles/quickSlideStyles.module.sass";
const QuickSlides = ({
	total,
	slideData,
	position,
	linkImage,
	nextHref,
	nextSlideData,
	showNumbers,
	countdown,
}) => {
	const slideDetails = slideData[0];
	const {
		slide,
		slideComment,
		slideImage,
		slideImageAlt,
		slideImageAttribution,
		slideImageAttributionLink,
		slidePosition,
		srcset,
	} = slideDetails;

	const value = slideDetails.slideDetails
		? slideDetails.slideDetails
		: defaultValue;
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
	const showNumber = countdown ? total - slidePosition + 1 : slidePosition;
	return (
		<div className={styles.bookendWrapper}>
			<h1 className={styles.sectionHeader}>
				{showNumbers && (
					<span className={styles.slidePosition}>{showNumber}</span>
				)}
				{slide}
			</h1>
			<h3 className={styles.sectionBrief}>{slideComment}</h3>
			<Embed
				embed={slideDetails["slideImage-embed"]}
				image={slideImage}
				imageAlt={slideImageAlt}
				imageAltAttribution={slideImageAttribution}
				imageAltAttributionLink={slideImageAttributionLink}
				srcset={srcset}
				styles={{ width: "100%", height: "100%" }}
				noMaxHeight={true}
			/>
			<div className={styles.sectionParagraph}>
				<Slate editor={editor} value={value}>
					<Editable
						readOnly={true}
						renderElement={renderElement}
						renderLeaf={renderLeaf}
					/>
				</Slate>
			</div>
			<LazyLoad once={true}>
				<QuickViewButton
					label="Next"
					imgSrc={nextSlideData[0] ? nextSlideData[0].slideImage : slideImage}
					href={nextHref}
					srcset={nextSlideData[0] ? nextSlideData[0].srcset : srcset}
					imageAlt={
						nextSlideData[0]
							? nextSlideData[0].slideImageAlt
							: "Next Slide Image"
					}
				/>
			</LazyLoad>
		</div>
	);
};

QuickSlides.propTypes = {
	data: PropTypes.Array,
};
export default QuickSlides;
