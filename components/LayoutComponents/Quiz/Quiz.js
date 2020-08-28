import { useState, useEffect } from "react";
import SectionBar from "../SectionBar";
import PropTypes from "prop-types";
import BookEnds from "./BookEnds";
import Questions from "./Questions";
import ErrorLoader from "../Error";
import Headline from "./QuizHeadline";
import QuickViewButton from "../../Button/QuickViewButton";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import Crumbs from "../Crumbs/crumbs";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import { closingSocialButtons } from "../../SocialMedia/data";
import QuickEmailSignUp from "../../SignUpModal/quickEmailSignup";
import FacebookComments from "../../SocialMedia/FacebookComments";
import LazyLoad from "react-lazyload";
import ScrollingContent from "../ScrollingContent/ScrollingContent";
import styles from "./styles/quizStyles.module.sass";
import dynamic from "next/dynamic";

const AdWrapper = dynamic(() => import("../../ads/adWrapper"), {
	ssr: false,
});
import { AMAZON_MUSIC_WIDE_BANNER } from "../../ads/code/amazonBusiness";
const QuizDetails = ({ content, position, url, id, score }) => {
	const details = JSON.parse(content.overview);
	const questions = JSON.parse(content.questions);
	const {
		category,
		title,
		blurb,
		scoreCommentsDetails,
		headlineImage,
		randomiseAnswers,
	} = details[0];
	const positionNumber = Number(position);
	const [currentScore, setCurrentScore] = useState(0);

	useEffect(() => {
		setCurrentScore(0);
	}, [id]);

	if (
		positionNumber > content.numQuestions &&
		position !== "opening" &&
		position !== "closing"
	) {
		return <ErrorLoader />;
	}

	const nextHref = `/${category}/${url}/quiz/${id}/questions`;
	const shareUrl = `${process.env.SITE_ADDRESS}/${category}/${url}/quiz/${id}/questions/opening`;
	const commentsUrl = `${process.env.SITE_ADDRESS}/${category}/${url}/quiz/${id}/questions/closing`;

	const quizEndRef =
		positionNumber + 1 === content.numQuestions + 1
			? "closing"
			: positionNumber + 1;

	return (
		<div className={styles.sectionPadding}>
			<SectionBar title={`${category}`} titleColor="#111" titleSize="1rem" />
			{position === "opening" && (
				<Headline
					data={details}
					id={id}
					position={position}
					totalQuestions={content.numQuestions}
				/>
			)}
			<div>
				{(position === "opening" || position === "closing") && (
					<>
						<BookEnds
							position={position}
							image={questions[position][0][`${position}Image`]}
							imageAlt={questions[position][0][`${position}ImageAlt`]}
							imagePath={questions[position][0][`${position}ImagePath`]}
							imageAltAttribution={
								questions[position][0][`${position}ImageAttribution`]
							}
							imageAltAttributionLink={
								questions[position][0][`${position}ImageAttributionLink`]
							}
							imageCrop={questions[position][0][`${position}Crop`]}
							imageCropInfo={questions[position][0][`${position}CropInfo`]}
							title={questions[position][0][`${position}`]}
							details={
								questions[position][0][`${position}QuizDetails`]
									? questions[position][0][`${position}QuizDetails`]
									: undefined
							}
							embed={questions[position][0][`${position}Image-embed`]}
							scoreComments={scoreCommentsDetails}
							finalScore={currentScore}
							numberQuestions={content.numQuestions}
						/>
						{position === "opening" && (
							<div className={styles.openingButton}>
								<QuickViewButton
									label="Start"
									imgSrc={details[0].headlineImage}
									imagePath={details[0].headlineImagePath}
									imageCrop={details[0].headlineImageCrop}
									imageCropInfo={details[0].headlineImageCropInfo}
									href={`${nextHref}/1`}
									refPath={`/[category]/[url]/quiz/[quizId]/questions/[questionId]`}
									imageAlt={details[0].headlineImageAlt}
								/>
							</div>
						)}
					</>
				)}
			</div>
			<div>
				<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
			</div>
			<div>
				{position !== "opening" && position !== "closing" && (
					<Questions
						total={content.numQuestions}
						questionData={questions.questions.filter(
							x => x.questionPosition === positionNumber,
						)}
						nextQuestionData={questions.questions.filter(
							x => x.questionPosition === positionNumber + 1,
						)}
						position={position}
						linkImage={headlineImage}
						nextHref={`${nextHref}/${quizEndRef}`}
						id={id}
						currentScore={currentScore}
						setCurrentScore={setCurrentScore}
						questions={questions}
						randomiseAnswers={randomiseAnswers}
					/>
				)}
			</div>
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
					position={"bottom_share_horiz"}
				/>
			</LazyLoad>
			<hr className={styles.break} />
			<Crumbs
				home={process.env.SITE_ADDRESS}
				category={category}
				headline={title}
				headlineUrl={shareUrl}
				refPath={`/[category]/[url]/quiz/[quizId]/questions/[questionId]`}
			/>

			<LazyLoad once={true}>
				<QuickEmailSignUp />
			</LazyLoad>

			{position === "closing" && (
				<>
					<SectionBar
						title="Leave a Comment"
						titleColor="#111"
						titleSize="1rem"
					/>
					<FacebookComments
						url={commentsUrl}
						numPostsVisible={5}
						orderBy="reverse_time"
					/>
				</>
			)}
			<LazyLoad once={true}>
				<ScrollingContent id={id} title="Latest" type={"quiz"} />
			</LazyLoad>
			<hr className={styles.break} />
		</div>
	);
};

QuizDetails.propTypes = {
	content: PropTypes.object,
	position: PropTypes.string,
	overview: PropTypes.object,
	url: PropTypes.string,
	id: PropTypes.string,
};
export default QuizDetails;
