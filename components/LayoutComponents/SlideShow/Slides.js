import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Editor } from "slate-react";
import { Value } from "slate";
import { renderNode, renderMark, renderInline } from "../Editor";
import { openingSocialButtons } from "../../SocialMedia/data";
import SectionBar from "../SectionBar";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import defaultValue from "../Editor/defaultValue";
import LazyLoad from "react-lazyload";
const Slides = ({ data, showNumbers, shareUrl, image, headline, brief }) => {
	return data.map((slideData, index) => {
		const {
			slide,
			slideComment,
			slideImage,
			slideImageAlt,
			slideImageAttribution,
			slideImageAttributionLink,
			slidePosition,
		} = slideData;
		const value = Value.fromJSON(
			slideData.slideDetails
				? JSON.parse(slideData.slideDetails)
				: defaultValue,
		);
		return (
			<div className="bookend-wrapper" key={index}>
				<h1 className="section-header">
					{showNumbers && (
						<span className="slide-position">{slidePosition}</span>
					)}
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
					/>
				</LazyLoad>
				<div className="section-paragraph">
					<Editor
						readOnly={true}
						value={value}
						renderMark={renderMark}
						renderBlock={renderNode}
						renderInline={renderInline}
					/>
				</div>
				{index % 4 === 0 && (
					<>
						<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />

						<ShareButtonHoriz
							data={openingSocialButtons}
							url={shareUrl}
							image={image}
							headline={headline}
							brief={brief}
						/>
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
};
export default Slides;