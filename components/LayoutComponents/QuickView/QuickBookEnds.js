import { useMemo, useCallback } from "react";
import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import Embed from "../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";

const BookEnds = ({
	image,
	imageAlt,
	imageAltAttribution,
	imageAltAttributionLink,
	title,
	details,
	position,
	embed,
	srcset,
}) => {
	const value = details;
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
	return (
		<div className="bookend-wrapper">
			<h1 className="section-header">{title}</h1>
			<Embed
				embed={embed}
				image={image}
				imageAlt={imageAlt}
				imageAltAttribution={imageAltAttribution}
				imageAltAttributionLink={imageAltAttributionLink}
				srcset={srcset}
				styles={{ width: "100%", height: "100%" }}
			/>
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
			</>

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
					@media only screen and (max-width: 650px) {
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
					}

					@media only screen and (max-width: 450px) {
						.section-header {
							font-size: 2rem;
							line-height: 2.3rem;
							margin: 0.5rem 0rem;
						}
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
	srcset: PropTypes.array,
};
BookEnds.defaultProps = {
	details: [
		{
			type: "paragraph",
			children: [{ text: "" }],
		},
	],
};

export default BookEnds;
