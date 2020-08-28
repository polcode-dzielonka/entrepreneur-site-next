import PropTypes from "prop-types";
import ImageLoader from "../../Loading/ImageLoader";
import DynamicHeader from "../../Header/DynamicHeader";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import {
	openingSocialButtons,
	sideSocialButtons,
} from "../../SocialMedia/data";
import SectionBar from "../SectionBar";
import ShowMeta from "../../showMeta/showMeta";
import LazyLoad from "react-lazyload";
import styles from "./styles/headlineStyles.module.sass";
import dynamic from "next/dynamic";

const AdWrapper = dynamic(() => import("../../ads/adWrapper"), {
	ssr: false,
});
const MultiAdsWrapper = dynamic(() => import("../../ads/twoAdsWrapper"), {
	ssr: false,
});
import {
	AMAZON_MUSIC_WIDE_BANNER,
	AMAZON_KINDLE_CODE_SQUARE,
} from "../../ads/code/amazonBusiness";
import { FIVERR_SQUARE } from "../../ads/code/fiverr";
const BookEnds = ({ data, id, position, cpcMarker }) => {
	const {
		headlineImage,
		headlineImageAlt,
		headlineImagePath,
		headlineImageAttribution,
		headlineImageAttributionLink,
		headlineImageCrop,
		headlineImageCropInfo,
		category,
		title,
		blurb,
		slideTitle,
		slideUrl,
		showDate,
		displayDate,
		showAuthor,
		authorName,
		slideTags,
	} = data[0];
	const canonical = `${process.env.SITE_ADDRESS}/${category}/${slideUrl}/slideshow/${id}/slides/${position}`;
	return (
		<div className={styles.bookendWrapper}>
			<DynamicHeader
				title={title}
				description={slideTitle}
				url={canonical}
				canonical={canonical}
				image={headlineImage}
				createdAt={displayDate}
				updatedAt={displayDate}
				tags={slideTags}
			/>
			<h1 className={styles.sectionHeading}>{title}</h1>
			<ShowMeta
				showDate={showDate}
				displayDate={displayDate}
				showAuthor={showAuthor}
				authorName={authorName}
			/>
			<div>
				<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
			</div>
			<ul className={styles.listWrapper}>
				<li className={styles.sectionBrief}>{slideTitle}</li>
				<li className={styles.sectionBrief}>{blurb}</li>
			</ul>
			<div>
				<ImageLoader
					src={headlineImage}
					alt={headlineImageAlt}
					imagePath={headlineImagePath}
					imageCrop={headlineImageCrop}
					imageCropInfo={headlineImageCropInfo}
					animation={false}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<hr className={styles.break} />
			{cpcMarker && (
				<div>
					<MultiAdsWrapper
						adCodeOne={FIVERR_SQUARE}
						adCodeTwo={AMAZON_KINDLE_CODE_SQUARE}
					/>
				</div>
			)}
			<LazyLoad once={true}>
				<SectionBar title={`Share`} titleColor="#111" titleSize="1rem" />
				<ShareButtonVert
					data={sideSocialButtons}
					url={canonical}
					image={headlineImage}
					headline={title}
					brief={blurb}
				/>
			</LazyLoad>
			<LazyLoad once={true}>
				<ShareButtonHoriz
					data={openingSocialButtons}
					url={canonical}
					image={headlineImage}
					headline={title}
					brief={blurb}
					position={"top_share_horiz"}
				/>
			</LazyLoad>

			<hr className={styles.break} />
		</div>
	);
};
BookEnds.propTypes = {
	data: PropTypes.Object,
	id: PropTypes.string,
	position: PropTypes.int,
	slideTitle: PropTypes.string,
	slideBlurb: PropTypes.string,
};
export default BookEnds;
