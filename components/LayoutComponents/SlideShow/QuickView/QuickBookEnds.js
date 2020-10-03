import PropTypes from "prop-types";
import Embed from "../../../Embed/Embed";
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
import Adsense from "../../../ads/code/adsense/adsense";
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
	serialized,
}) => {
	const value = details;

	return (
		<div className={styles.bookEndWrapper}>
			<div>
				{/* <AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} /> */}
				<Adsense client="ca-pub-2068760522034474" slot="3049705177" />
			</div>
			<h1 className={styles.sectionHeader}>{title}</h1>
			<div className={styles.sectionParagraph}>
				<div
					className={styles.sectionParagraph}
					dangerouslySetInnerHTML={{
						__html: serialized,
					}}
				/>
			</div>
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

			<div className={styles.adWrap}>
				<Adsense client="ca-pub-2068760522034474" slot="1874540097" />
				{/* <MultiAdsWrapper
					adCodeOne={AMAZON_KINDLE_CODE_SQUARE}
					adCodeTwo={FIVERR_SQUARE}
				/> */}
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
