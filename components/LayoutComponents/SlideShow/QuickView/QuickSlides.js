import { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Embed from "../../../Embed/Embed";
import { Slate, Editable } from "slate-react";
import { createEditor } from "slate";
import RenderElement from "../../Editor/renderElement/renderElement";
import RenderLeaf from "../../Editor/renderLeaf/renderLeaf";
import defaultValue from "../../Editor/defaultValue";
import QuickViewButton from "../../../Button/QuickViewButton";
import LazyLoad from "react-lazyload";
import styles from "./styles/quickSlideStyles.module.sass";
import SingleLoader from "../../../Loading/SingleLoader";
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

const QuickSlides = ({
	total,
	slideData,
	position,
	linkImage,
	nextHref,
	nextSlideData,
	showNumbers,
	countdown,
	cpcMarker,
}) => {
	const slideDetails = slideData[0];
	const {
		slide,
		slideComment,
		slideImage,
		slideImageAlt,
		slideImagePath,
		slideImageAttribution,
		slideImageAttributionLink,
		slidePosition,
	} = slideDetails;

	const value = slideDetails.slideDetails
		? slideDetails.slideDetails
		: defaultValue;
	const editor = useMemo(() => createEditor(), []);
	const renderElement = useCallback(props => <RenderElement {...props} />, []);
	const renderLeaf = useCallback(props => <RenderLeaf {...props} />, []);
	const showNumber = countdown ? total - slidePosition + 1 : slidePosition;
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, [slideImage]);

	if (loading) return <SingleLoader />;

	return (
		<div className={styles.bookendWrapper}>
			<h1 className={styles.sectionHeader}>
				{showNumbers && (
					<span className={styles.slidePosition}>{showNumber}</span>
				)}
				{slide}
			</h1>
			<h3 className={styles.sectionBrief}>{slideComment}</h3>
			<div>
				<Embed
					embed={slideDetails["slideImage-embed"]}
					image={slideImage}
					imageAlt={slideImageAlt}
					imageAltAttribution={slideImageAttribution}
					imageAltAttributionLink={slideImageAttributionLink}
					imagePath={slideImagePath}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<div>
				<MultiAdsWrapper
					adCodeOne={AMAZON_KINDLE_CODE_SQUARE}
					adCodeTwo={FIVERR_SQUARE}
				/>
			</div>
			<div className={styles.sectionParagraph}>
				<Slate editor={editor} value={value}>
					<Editable
						readOnly={true}
						renderElement={renderElement}
						renderLeaf={renderLeaf}
					/>
				</Slate>
			</div>
			{cpcMarker && (
				<LazyLoad once={true}>
					<QuickViewButton
						label="Next"
						imgSrc={nextSlideData[0] ? nextSlideData[0].slideImage : slideImage}
						href={nextHref}
						imagePath={
							nextSlideData[0]
								? nextSlideData[0].slideImagePath
								: slideImagePath
						}
						refPath={`/[url]/slideshow/[slideId]/slides/[slideContentId]`}
						imageAlt={
							nextSlideData[0]
								? nextSlideData[0].slideImageAlt
								: "Next Slide Image"
						}
					/>
				</LazyLoad>
			)}
			<div>
				<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
			</div>
		</div>
	);
};

QuickSlides.propTypes = {
	data: PropTypes.Array,
};
export default QuickSlides;
