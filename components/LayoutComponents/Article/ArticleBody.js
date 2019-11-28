import SectionBar from "../SectionBar";
import PropTypes from "prop-types";
import { Editor } from "slate-react";
import { Value } from "slate";
import { renderNode, renderMark, renderInline } from "../Editor";
import FacebookComments from "../../SocialMedia/FacebookComments";
import { closingSocialButtons } from "../../SocialMedia/data";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import Crumbs from "../Crumbs/crumbs";
import QuickEmailSignUp from "../../SignUpModal/quickEmailSignup";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import LazyLoad from "react-lazyload";
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
	const value = Value.fromJSON(JSON.parse(content.content));
	return (
		<div className="section-padding">
			<Editor
				readOnly={true}
				value={value}
				renderMark={renderMark}
				renderBlock={renderNode}
				renderInline={renderInline}
			/>
			<ScrollUpButton />
			<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />
			<ShareButtonHoriz
				data={closingSocialButtons}
				url={url}
				image={image}
				headline={headline}
				brief={brief}
			/>
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={headline}
				headlineUrl={url}
			/>
			<QuickEmailSignUp />
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
				`}
			</style>
		</div>
	);
};

ArticleBody.propTypes = {
	content: PropTypes.Object,
	url: PropTypes.String,
	category: PropTypes.String,
	image: PropTypes.String,
	headline: PropTypes.String,
	brief: PropTypes.String,
};
export default ArticleBody;
