import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Embed from "../../../Embed/Embed";
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
		slideImageCrop,
		slideImageCropInfo,
		slideImageAttribution,
		slideImageAttributionLink,
		slidePosition,
		slideSerialized,
	} = slideDetails;

	const value = slideDetails.slideDetails
		? slideDetails.slideDetails
		: defaultValue;

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
					imageCrop={slideImageCrop}
					imageCropInfo={slideImageCropInfo}
					imagePath={slideImagePath}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<div className={styles.sectionParagraph}>
				<div
					className={styles.sectionParagraph}
					dangerouslySetInnerHTML={{
						__html: slideSerialized,
					}}
				/>
			</div>
			<div>
				<MultiAdsWrapper
					adCodeOne={AMAZON_KINDLE_CODE_SQUARE}
					adCodeTwo={FIVERR_SQUARE}
				/>
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
						refPath={`/[category]/[url]/slideshow/[slideId]/slides/[slideContentId]`}
						imageAlt={
							nextSlideData[0]
								? nextSlideData[0].slideImageAlt
								: "Next Slide Image"
						}
						imageCrop={
							nextSlideData[0]
								? nextSlideData[0].slideImageCrop
								: slideImageCrop
						}
						imageCropInfo={
							nextSlideData[0]
								? nextSlideData[0].slideImageCropInfo
								: slideImageCropInfo
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
