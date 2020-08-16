import PropTypes from "prop-types";
import ErrorLoader from "../../Error";
import Headline from "./QuickHeadline";
import SectionBar from "../../SectionBar";
import QuickViewButton from "../../../Button/QuickViewButton";
import ScrollUpButton from "../../ScrollUpButton/ScrollUpButton";
import Crumbs from "../../Crumbs/crumbs";
import ShareButtonHoriz from "../../../SocialMedia/ShareButtonsHoriz";
import { closingSocialButtons } from "../../../SocialMedia/data";
import QuickEmailSignUp from "../../../SignUpModal/quickEmailSignup";
import FacebookComments from "../../../SocialMedia/FacebookComments";
import LazyLoad from "react-lazyload";
import ScrollingContent from "../../ScrollingContent/ScrollingContent";
import styles from "./styles/quickViewStyles.module.sass";
const QuickView = ({ content, position, url, id }) => {
	const details = JSON.parse(content.overview);
	const slides = JSON.parse(content.slides);
	const {
		blurb,
		category,
		title,
		headlineImage,
		showNumbers,
		countdown,
	} = details[0];

	const positionNumber = Number(position);
	if (
		positionNumber > content.numSlides &&
		position !== "opening" &&
		position !== "closing"
	) {
		return <ErrorLoader />;
	}
	const nextHref = `/${category}/${url}/slideshow/${id}/slides`;
	const shareUrl = `${process.env.SITE_ADDRESS}/${category}/${url}/slideshow/${id}/slides/opening`;
	const commentsUrl = `${process.env.SITE_ADDRESS}/${category}/${url}/slideshow/${id}/slides/closing`;
	const slideEndRef =
		positionNumber + 1 === content.numSlides + 1
			? "closing"
			: positionNumber + 1;

	return (
		<div className={styles.sectionPadding}>
			<SectionBar title={`${category}`} titleColor="#111" titleSize="1.5rem" />
			<Headline
				data={details}
				id={id}
				position={position}
				totalSlides={content.numSlides}
			/>

			<LazyLoad once={true}>
				<ScrollUpButton />
			</LazyLoad>
			<LazyLoad once={true}>
				<hr className={styles.break} />
				<ShareButtonHoriz
					data={closingSocialButtons}
					url={shareUrl}
					image={headlineImage}
					headline={title}
					brief={blurb}
					position={"bottom_quickview_share_horiz"}
				/>
			</LazyLoad>

			<hr className={styles.break} />
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={title}
				headlineUrl={shareUrl}
				refPath={`/[category]/[url]/slideshow/[slideId]/slides/[slideContentId]`}
			/>
			<LazyLoad once={true}>
				<QuickEmailSignUp />
			</LazyLoad>

			{position === "closing" && (
				<>
					<SectionBar
						title="Leave a Comment"
						titleColor="#111"
						titleSize="2rem"
					/>
					<FacebookComments
						url={commentsUrl}
						numPostsVisible={5}
						orderBy="reverse_time"
					/>
				</>
			)}
			<LazyLoad>
				<ScrollingContent id={id} title="Latest" type={"slideshow"} />
			</LazyLoad>
			<hr className={styles.break} />
		</div>
	);
};

QuickView.propTypes = {
	content: PropTypes.object,
	position: PropTypes.string,
	overview: PropTypes.object,
};
export default QuickView;
