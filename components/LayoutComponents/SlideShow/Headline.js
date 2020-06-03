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
const BookEnds = ({ data, id, position }) => {
	const {
		headlineImage,
		headlineImageAlt,
		headlineImageAttribution,
		headlineImageAttributionLink,
		category,
		title,
		blurb,
		slideTitle,
		slideUrl,
		srcset,
		showDate,
		displayDate,
		showAuthor,
		authorName,
		slideTags,
	} = data[0];
	const canonical = `${process.env.SITE_ADDRESS}/${slideUrl}/slideshow/${id}/slides/${position}`;

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
			<h3 className={styles.sectionCategory}>{category}</h3>
			<ShowMeta
				showDate={showDate}
				displayDate={displayDate}
				showAuthor={showAuthor}
				authorName={authorName}
			/>
			<ul className={styles.listWrapper}>
				<li className={styles.sectionBrief}>{slideTitle}</li>
				<li className={styles.sectionBrief}>{blurb}</li>
			</ul>
			<div>
				<ImageLoader
					src={headlineImage}
					alt={headlineImageAlt}
					animation={false}
					srcset={srcset}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<hr className={styles.break} />
			<LazyLoad once={true}>
				<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />
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
