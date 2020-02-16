import { useMemo, useCallback } from "react";

import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import defaultValue from "../Editor/defaultValue";
import QuickViewButton from "../../Button/QuickViewButton";

const QuickSlides = ({
	total,
	slideData,
	position,
	linkImage,
	nextHref,
	nextSlideData,
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
	return (
		<div className="bookend-wrapper">
			<h1 className="section-header">
				<span className="slide-position">{slidePosition}</span>
				{slide}
			</h1>
			<h3 className="section-brief">{slideComment}</h3>
			<Embed
				embed={slideDetails["slideImage-embed"]}
				image={slideImage}
				imageAlt={slideImageAlt}
				imageAltAttribution={slideImageAttribution}
				imageAltAttributionLink={slideImageAttributionLink}
				srcset={srcset}
			/>
			<div className="section-paragraph">
				<Slate editor={editor} value={value}>
					<Editable
						readOnly={true}
						renderElement={renderElement}
						renderLeaf={renderLeaf}
					/>
				</Slate>
			</div>
			<QuickViewButton
				label="Next"
				imgSrc={nextSlideData[0] ? nextSlideData[0].slideImage : slideImage}
				href={nextHref}
				srcset={nextSlideData[0] ? nextSlideData[0].srcset : srcset}
			/>
			<style jsx>
				{`
						.bookend-wrapper {
							height: 100%;
							width: 100%;
							margin: 1rem 0;
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

						.section-header {
							margin: 1.5rem 0;
							padding: 0;
							font-size: 3rem;
							font-weight: 900;
							line-height: 3rem;
							text-transform: capitalize;
							font-style:italic;
							text-align:center;
							border-bottom: 1px solid #9d9d9d;
							border-top: 1px solid #9d9d9d;
							padding:0.75rem 0 0.5rem;
							font-family:${theme.font};
							color:${theme.secondary};
						}
						.section-paragraph{
							margin: 2rem auto;
							width:85%;
							padding: 0;
							font-size: 1.45rem;
							font-weight: 300;
							line-height: 2rem;
							color: ${theme.secondary};
							font-family: ${theme.secondaryFont};
						}
						.slide-position{
							font-size:32px
							font-weight:900;
							font-family:${theme.font};
							color:${theme.primary};
							margin-right:.5rem;
						}
						.slide-position:after{
							content: ".";
							display: inline-block;
						}
					`}
			</style>
		</div>
	);
};

QuickSlides.propTypes = {
	data: PropTypes.Array,
};
export default QuickSlides;
