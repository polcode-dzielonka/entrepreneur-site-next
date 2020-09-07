import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Reader from "../Editor/reader";
import LazyLoad from "react-lazyload";
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
	const value = JSON.parse(content.content);
	return (
		<div className={styles.sectionPadding}>
			<Reader value={value} />
			<LazyLoad once={true}>
				<ScrollUpButton />
			</LazyLoad>
			<AdWrapper adCode={ETORO_BANNER} />
			<br />
			<LazyLoad once={true}>
				<SectionBar title={`Share`} titleColor="#111" titleSize="1rem" />
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
			<SectionBar title="Leave a Comment" titleColor="#111" titleSize="1rem" />
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
