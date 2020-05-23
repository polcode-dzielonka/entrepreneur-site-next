import { useMemo, useCallback } from "react";
import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import { openingSocialButtons } from "../../SocialMedia/data";
import SectionBar from "../SectionBar";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import defaultValue from "../Editor/defaultValue";
import LazyLoad from "react-lazyload";
import NextLink from "../Editor/renderElement/ads/nextLink";

const Slides = ({
	data,
	showNumbers,
	shareUrl,
	image,
	headline,
	brief,
	latest,
	countdown,
}) => {
	return data.map((slideData, index) => {
		const {
			slide,
			slideComment,
			slideImage,
			slideImageAlt,
			slideImageAttribution,
			slideImageAttributionLink,
			slidePosition,
			srcset,
		} = slideData;
		const value = slideData.slideDetails
			? slideData.slideDetails
			: defaultValue;

		const editor = useMemo(() => createEditor(), []);
		const renderElement = useCallback(
			props => <RenderElement {...props} />,
			[],
		);
		const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
		const arrayNumber = Number.isInteger(index / 2) ? index / 2 : null;
		const adData =
			arrayNumber && arrayNumber < latest.items.length
				? latest.items[arrayNumber - 1]
				: null;
		const midDataOverview = adData ? JSON.parse(adData.overview) : null;
		const midDataId = adData ? adData.id : null;
		const showNumber = countdown
			? data.length - slidePosition + 1
			: slidePosition;

		return (
			<div className="bookend-wrapper" key={index}>
				<h1 className="section-header">
					{showNumbers && <span className="slide-position">{showNumber}</span>}
					{slide}
				</h1>
				<h3 className="section-brief">{slideComment}</h3>
				<LazyLoad once={true}>
					<Embed
						embed={slideData["slideImage-embed"]}
						image={slideImage}
						imageAlt={slideImageAlt}
						imageAltAttribution={slideImageAttribution}
						imageAltAttributionLink={slideImageAttributionLink}
						srcset={srcset}
						styles={{ width: "100%", height: "100%" }}
						noMaxHeight={true}
					/>
				</LazyLoad>
				<div className="section-paragraph">
					<Slate editor={editor} value={value}>
						<Editable
							readOnly={true}
							renderElement={renderElement}
							renderLeaf={renderLeaf}
						/>
					</Slate>
				</div>

				{index % 4 === 0 && (
					<>
						<LazyLoad once={true}>
							<SectionBar
								title={`Share`}
								titleColor="#111"
								titleSize="1.5rem"
							/>
							<ShareButtonHoriz
								data={openingSocialButtons}
								url={shareUrl}
								image={image}
								headline={headline}
								brief={brief}
								position={"middle_slideshow_share_horiz"}
							/>
						</LazyLoad>
					</>
				)}
				{index % 2 === 0 && adData && (
					<>
						<LazyLoad once={true}>
							<SectionBar
								title={`Up Next`}
								titleColor="#111"
								titleSize="1.5rem"
							/>
							<NextLink
								brief={midDataOverview[0].blurb}
								title="Next Up:"
								headline={midDataOverview[0].slideTitle}
								image={midDataOverview[0].headlineImage}
								imageAlt={midDataOverview[0].headlineImageAlt}
								srcset={midDataOverview[0].srcset}
								url={`/${midDataOverview[0].slideUrl}/quickview/${midDataId}/slides/opening`}
							/>
							<SectionBar title={``} titleColor="#111" titleSize="1.5rem" />
						</LazyLoad>
					</>
				)}

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
								margin: 2rem 0 0 0;
								width: 98%;
							}
						}
						@media only screen and (max-width: 450px) {
							.section-header {
								font-size: 2rem;
								line-height: 2.3rem;
								padding: 0.5rem;
								margin: 0.75rem 0;
								font-style: normal;
							}
						}
					`}
				</style>
			</div>
		);
	});
};
Slides.propTypes = {
	data: PropTypes.Array,
	shareUrl: PropTypes.String,
	image: PropTypes.String,
	headline: PropTypes.String,
	brief: PropTypes.String,
	srcset: PropTypes.Array,
};
Slides.defaultProps = {
	latest: [],
};
export default Slides;
