import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import LazyLoad from "react-lazyload";
import RenderElement from "../Editor/renderElement/renderElement";
import RenderLeaf from "../Editor/renderLeaf/renderLeaf";
import FacebookComments from "../../SocialMedia/FacebookComments";
import { closingSocialButtons } from "../../SocialMedia/data";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import Crumbs from "../Crumbs/crumbs";
import QuickEmailSignUp from "../../SignUpModal/quickEmailSignup";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import SectionBar from "../SectionBar";
import ScrollingContent from "../ScrollingContent/ScrollingContent";

const ArticleBody = ({
	content,
	category,
	url,
	image,
	headline,
	brief,
	id,
}) => {
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);

	const value = JSON.parse(content.content);
	return (
		<div className="section-padding">
			<Slate editor={editor} value={value}>
				<Editable
					readOnly={true}
					renderElement={renderElement}
					renderLeaf={renderLeaf}
				/>
			</Slate>
			<LazyLoad once={true}>
				<ScrollUpButton />
			</LazyLoad>

			<br />
			<LazyLoad once={true}>
				<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />
				<ShareButtonHoriz
					data={closingSocialButtons}
					url={url}
					image={image}
					headline={headline}
					brief={brief}
					position={"bottom_share_horiz"}
				/>
			</LazyLoad>
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={headline}
				headlineUrl={url}
			/>
			<LazyLoad once={true}>
				<QuickEmailSignUp />
			</LazyLoad>

			<SectionBar title="Leave a Comment" titleColor="#111" titleSize="2rem" />
			<FacebookComments url={url} numPostsVisible={5} orderBy="reverse_time" />
			<LazyLoad>
				<ScrollingContent id={id} type={"article"} />
			</LazyLoad>
			<style jsx>
				{`
					.section-padding {
						margin: 2rem;
						height: 100%;
					}
					@media only screen and (max-width: 670px) {
						.section-padding {
							margin: 0.8rem;
						}
					}
					@media only screen and (max-width: 450px) {
						.section-padding {
							margin: 1.5rem 0rem 0rem 0rem;
						}
					}
				`}
			</style>
		</div>
	);
};

ArticleBody.propTypes = {
	id: PropTypes.string,
	content: PropTypes.Object,
	url: PropTypes.String,
	category: PropTypes.String,
	image: PropTypes.String,
	headline: PropTypes.String,
	brief: PropTypes.String,
};
export default ArticleBody;
