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
		<div className="bookend-wrapper">
			<h1 className="section-header">
				{showNumbers && <span className="slide-position">{showNumber}</span>}
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
				styles={{ width: "100%", height: "100%" }}
				noMaxHeight={true}
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
						@media only screen and (max-width: 670px) {
							.section-header {
								font-size: 2.4rem;
								line-height: 2.75rem;
								padding: 0.5rem;
								margin: 0 auto;
								font-style: normal;
							}
							.section-paragraph {
								margin: 2rem 0 0.5rem 0;
								width: 98%;
							}
						}
						@media only screen and (max-width: 450px) {
							.section-header {
								font-size: 2rem;
								line-height: 2.3rem;
								padding: 0.5rem;
								margin: 0rem 0;
								font-style: normal;
							}
							.section-paragraph {
								margin-bottom: 1.5rem;
								
							}
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
