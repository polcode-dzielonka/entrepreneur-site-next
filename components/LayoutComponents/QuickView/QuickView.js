import PropTypes from "prop-types";
import { theme } from "../../../theme/baseCss";
import BookEnds from "./QuickBookEnds";
import QuickSlides from "./QuickSlides";
import ErrorLoader from "../Error";
import Headline from "./QuickHeadline";
import SectionBar from "../SectionBar";
import QuickViewButton from "../../Button/QuickViewButton";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import Crumbs from "../Crumbs/crumbs";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import { closingSocialButtons } from "../../SocialMedia/data";
import QuickEmailSignUp from "../../SignUpModal/quickEmailSignup";
import FacebookComments from "../../SocialMedia/FacebookComments";

const QuickView = ({ content, position, url, id }) => {
	const details = JSON.parse(content.overview);
	const slides = JSON.parse(content.slides);
	const { blurb, category, title, headlineImage } = details[0];

	const positionNumber = Number(position);
	if (
		positionNumber > content.numSlides &&
		position !== "opening" &&
		position !== "closing"
	) {
		return <ErrorLoader />;
	}
	const nextHref = `/${url}/quickview/${id}/slides`;
	const shareUrl = `${process.env.SITE_ADDRESS}/${url}/quickview/${id}/slides/opening`;
	const commentsUrl = `${process.env.SITE_ADDRESS}/${url}/quickview/${id}/slides/closing`;

	const slideEndRef =
		positionNumber + 1 === content.numSlides + 1
			? "closing"
			: positionNumber + 1;

	return (
		<div className="section-padding">
			<SectionBar title={`${category}`} titleColor="#111" titleSize="1.5rem" />
			<Headline
				data={details}
				id={id}
				position={position}
				totalSlides={content.numSlides}
			/>
			{(position === "opening" || position === "closing") && (
				<>
					<BookEnds
						position={position}
						image={slides[position][0][`${position}Image`]}
						imageAlt={slides[position][0][`${position}ImageAlt`]}
						imageAltAttribution={
							slides[position][0][`${position}ImageAttribution`]
						}
						imageAltAttributionLink={
							slides[position][0][`${position}ImageAttributionLink`]
						}
						title={slides[position][0][`${position}`]}
						details={
							slides[position][0][`${position}SlideDetails`]
								? JSON.parse(slides[position][0][`${position}SlideDetails`])
								: undefined
						}
						embed={slides[position][0][`${position}Image-embed`]}
					/>
					{position === "opening" && (
						<QuickViewButton
							label="Next"
							imgSrc={details[0].headlineImage}
							href={`${nextHref}/1`}
						/>
					)}
				</>
			)}
			{position !== "opening" && position !== "closing" && (
				<QuickSlides
					total={content.numSlides}
					slideData={slides.slides.filter(
						x => x.slidePosition === positionNumber,
					)}
					position={position}
					linkImage={details[0][`headlineImage`]}
					nextHref={`${nextHref}/${slideEndRef}`}
				/>
			)}
			<ScrollUpButton />
			<hr className="break" />
			<ShareButtonHoriz
				data={closingSocialButtons}
				url={shareUrl}
				image={headlineImage}
				headline={title}
				brief={blurb}
			/>
			<hr className="break" />
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={title}
				headlineUrl={url}
			/>
			<QuickEmailSignUp />
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
			<SectionBar title="Latest" titleColor="#111" titleSize="2rem" />
			<hr className="break" />
			<style jsx>
				{`
					.break {
						border: 1px solid #dedede;
						width: 100%;
						margin: 0 auto;
					}
					.headline-image {
						max-height: 550px;
					}
					.section-padding {
						display: flex;
						flex-direction: column;
						margin: 0.15rem 2rem;
					}

					.section-brief {
						margin: 1.5rem 0;
						padding: 0;
						font-size: 1.45rem;
						font-weight: 300;
						line-height: 2rem;
						color: ${theme.secondary};
						text-transform: capitalize;
						font-family: ${theme.secondaryFont};
					}
					.section-list {
						margin: 0rem 1rem 1rem 1rem;
						padding: 0;
						font-size: 1.45rem;
						font-weight: 300;
						color: ${theme.secondary};
						text-transform: capitalize;
						font-family: ${theme.secondaryFont};
					}
					ul {
						margin: 0;
					}
				`}
			</style>
		</div>
	);
};

QuickView.propTypes = {
	content: PropTypes.object,
	position: PropTypes.string,
	overview: PropTypes.object,
};
export default QuickView;
