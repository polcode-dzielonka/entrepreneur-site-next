import PropTypes from "prop-types";
import BookEnds from "./BookEnds";
import Slides from "./Slides";
import ErrorLoader from "../Error";
import Headline from "./Headline";
import SectionBar from "../SectionBar";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import { closingSocialButtons } from "../../SocialMedia/data";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import Crumbs from "../Crumbs/crumbs";
import QuickEmailSignUp from "../../SignUpModal/quickEmailSignup";
import FacebookComments from "../../SocialMedia/FacebookComments";
import LazyLoad from "react-lazyload";
import ScrollingContent from "../ScrollingContent/ScrollingContent";
import styles from "./styles/slideShowStyles.module.sass";

const SlideDetails = ({ content, position, latest, url, id }) => {
	const details = JSON.parse(content.overview);
	const slides = JSON.parse(content.slides);

	const {
		blurb,
		category,
		headlineImage,
		showNumbers,
		countdown,
		title,
		slideUrl,
		srcset,
		headlineImageAlt,
	} = details[0];
	if (!slides) {
		return <ErrorLoader />;
	}
	// const href = `/${url}/quickview/${id}/slides/${position}`;
	const bookEndOpening = slides["opening"][0];
	const bookEndClosing = slides["closing"][0];

	const slideData = countdown ? slides["slides"] : slides["slides"];
	const shareUrl = `${process.env.SITE_ADDRESS}/${slideUrl}/slideshow/${id}/slides/opening`;
	return (
		<div className={styles.sectionPadding}>
			<SectionBar title={`Lists`} titleColor="#111" titleSize="1.5rem" />
			<Headline data={details} id={id} position={position} />

			<BookEnds
				position={"opening"}
				showHeadlineImage={false}
				image={bookEndOpening.openingImage}
				imageAlt={bookEndOpening.openingImageAlt}
				imageAltAttribution={bookEndOpening.openingImageAttribution}
				imageAltAttributionLink={bookEndOpening.openingImageAttributionLink}
				srcset={bookEndOpening.srcset}
				title={bookEndOpening.opening}
				details={
					bookEndOpening.openingSlideDetails
						? bookEndOpening.openingSlideDetails
						: undefined
				}
				embed={bookEndOpening["openingImage-embed"]}
			/>

			<LazyLoad once={true}>
				<ScrollUpButton />
			</LazyLoad>
			<Slides
				data={slideData}
				showNumbers={showNumbers}
				shareUrl={shareUrl}
				image={headlineImage}
				headline={title}
				brief={blurb}
				latest={latest}
				countdown={countdown}
			/>

			<BookEnds
				position={"closing"}
				image={bookEndClosing.closingImage}
				showHeadlineImage={true}
				imageAlt={bookEndClosing.closingImageAlt}
				imageAltAttribution={bookEndClosing.closingImageAttribution}
				imageAltAttributionLink={bookEndClosing.closingImageAttributionLink}
				srcset={bookEndClosing.srcset}
				title={bookEndClosing.closing}
				details={
					bookEndClosing.closingSlideDetails
						? bookEndClosing.closingSlideDetails
						: undefined
				}
				embed={bookEndClosing["closingImage-embed"]}
			/>
			<LazyLoad once={true}>
				<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />
				<ShareButtonHoriz
					data={closingSocialButtons}
					url={shareUrl}
					image={headlineImage}
					headline={title}
					brief={blurb}
					position={"bottom_share_horiz"}
				/>
			</LazyLoad>
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={title}
				headlineUrl={url}
				refPath={`/[url]/slideshow/[slideId]/slides/[slideContentId]`}
			/>

			<LazyLoad once={true}>
				<QuickEmailSignUp />
			</LazyLoad>
			<LazyLoad once={true}>
				<SectionBar
					title="Leave a Comment"
					titleColor="#111"
					titleSize="2rem"
				/>
			</LazyLoad>
			<FacebookComments
				url={shareUrl}
				numPostsVisible={5}
				orderBy="reverse_time"
			/>
			<LazyLoad once={true}>
				<ScrollingContent id={id} title="Latest" type={"slideshow"} />
			</LazyLoad>
			<hr className={styles.break} />
		</div>
	);
};

SlideDetails.propTypes = {
	content: PropTypes.object,
	position: PropTypes.string,
	overview: PropTypes.object,
};
export default SlideDetails;
