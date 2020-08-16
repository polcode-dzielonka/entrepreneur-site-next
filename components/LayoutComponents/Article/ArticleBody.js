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
import dynamic from "next/dynamic";
import styles from "./styles/articleBodyStyles.module.sass";
const AdWrapper = dynamic(() => import("../../ads/adWrapper"), {
	ssr: false,
});
import { ETORO_BANNER } from "../../ads/code/eToro";
import { AMAZON_BUSINESS_AD_RECT } from "../../ads/code/amazonBusiness";

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
		<div className={styles.sectionPadding}>
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
			<AdWrapper adCode={ETORO_BANNER} />

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
				refPath={`/[category]/[url]/article/[id]`}
			/>
			<LazyLoad once={true}>
				<QuickEmailSignUp />
			</LazyLoad>
			<AdWrapper adCode={AMAZON_BUSINESS_AD_RECT} />

			<SectionBar title="Leave a Comment" titleColor="#111" titleSize="2rem" />
			<FacebookComments url={url} numPostsVisible={5} orderBy="reverse_time" />
			<LazyLoad>
				<ScrollingContent id={id} type={"article"} />
			</LazyLoad>
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
