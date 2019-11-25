import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Editor } from "slate-react";
import { Value } from "slate";
import { renderNode, renderMark, renderInline } from "../Editor";
import LazyLoad from "react-lazyload";

const BookEnds = ({
	image,
	imageAlt,
	imageAltAttribution,
	imageAltAttributionLink,
	title,
	details,
	position,
	embed,
}) => {
	const value = Value.fromJSON(details);

	return (
		<div className="bookend-wrapper">
			{position === "opening" && (
				<>
					<h1 className="section-header">{title}</h1>
					<div className="section-paragraph">
						<Editor
							readOnly={true}
							value={value}
							renderMark={renderMark}
							renderBlock={renderNode}
							renderInline={renderInline}
						/>
					</div>
				</>
			)}
			<LazyLoad once={true}>
				<Embed
					embed={embed}
					image={image}
					imageAlt={imageAlt}
					imageAltAttribution={imageAltAttribution}
					imageAltAttributionLink={imageAltAttributionLink}
				/>
			</LazyLoad>

			{position === "closing" && (
				<>
					<h1 className="section-header">{title}</h1>
					<div className="section-paragraph">
						<Editor
							readOnly={true}
							value={value}
							renderMark={renderMark}
							renderBlock={renderNode}
							renderInline={renderInline}
						/>
					</div>
				</>
			)}

			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 0;
						padding: 0;
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
BookEnds.propTypes = {
	position: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	imageAltAttribution: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	title: PropTypes.string,
	details: PropTypes.Object,
	embed: PropTypes.string,
};
BookEnds.defaultProps = {
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

export default BookEnds;
