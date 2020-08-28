import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Embed from "../../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../../Editor/renderElement/renderElement";
import RenderLeaf from "../../Editor/renderLeaf/renderLeaf";
import styles from "./styles/quickBookEndStyles.module.sass";
import dynamic from "next/dynamic";

const MultiAdsWrapper = dynamic(() => import("../../../ads/twoAdsWrapper"), {
	ssr: false,
});
const AdWrapper = dynamic(() => import("../../../ads/adWrapper"), {
	ssr: false,
});

import {
	AMAZON_KINDLE_CODE_SQUARE,
	AMAZON_MUSIC_WIDE_BANNER,
} from "../../../ads/code/amazonBusiness";
import { FIVERR_SQUARE } from "../../../ads/code/fiverr";

const BookEnds = ({
	image,
	imageAlt,
	imagePath,
	imageAltAttribution,
	imageAltAttributionLink,
	title,
	details,
	position,
	embed,
}) => {
	const value = details;
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
	return (
		<div className={styles.bookEndWrapper}>
			<div>
				<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
			</div>
			<h1 className={styles.sectionHeader}>{title}</h1>
			<div className={styles.imageWrap}>
				<Embed
					embed={embed}
					image={image}
					imageAlt={imageAlt}
					imageAltAttribution={imageAltAttribution}
					imageAltAttributionLink={imageAltAttributionLink}
					imagePath={imagePath}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<>
				<div className={styles.sectionParagraph}>
					<Slate editor={editor} value={value}>
						<Editable
							readOnly={true}
							renderElement={renderElement}
							renderLeaf={renderLeaf}
						/>
					</Slate>
				</div>
			</>
			<div>
				<MultiAdsWrapper
					adCodeOne={AMAZON_KINDLE_CODE_SQUARE}
					adCodeTwo={FIVERR_SQUARE}
				/>
			</div>
		</div>
	);
};
BookEnds.propTypes = {
	position: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	imageAltAttribution: PropTypes.string,
	imagePath: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	title: PropTypes.string,
	details: PropTypes.Object,
	embed: PropTypes.string,
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
