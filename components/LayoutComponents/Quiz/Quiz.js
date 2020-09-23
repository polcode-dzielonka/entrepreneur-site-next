import { useState, useEffect, useContext } from "react";
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
import Context from "../../../utils/Context";
import LongQuestions from "./LongQuestions";
const AdWrapper = dynamic(() => import("../../ads/adWrapper"), {
	ssr: false,
});
import { AMAZON_MUSIC_WIDE_BANNER } from "../../ads/code/amazonBusiness";

const QuizDetails = ({ content, position, url, id, score }) => {
	const details = JSON.parse(content.overview);
	const questions = JSON.parse(content.questions);
	const { cpcMarker } = useContext(Context);

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
	const [questionsAnswered, setQuestionsAnswered] = useState(0);

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
			{(cpcMarker || (!cpcMarker && position !== "opening")) && (
				<>
					<div>
						<Headline
							data={details}
							id={id}
							position={position}
							totalQuestions={content.numQuestions}
							cpcMarker={cpcMarker}
						/>

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
									imageCrop={questions[position][0][`${position}ImageCrop`]}
									imageCropInfo={
										questions[position][0][`${position}ImageCropInfo`]
									}
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
									serialized={
										questions[position][0][`${position}QuizSerialized`]
									}
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
									cpcMarker={cpcMarker}
								/>
							)}
						</div>
					</div>
				</>
			)}

			{!cpcMarker && (
				<>
					<Headline
						data={details}
						id={id}
						position={position}
						totalQuestions={content.numQuestions}
						cpcMarker={cpcMarker}
					/>

					<BookEnds
						position={"opening"}
						image={questions["opening"][0][`openingImage`]}
						imageAlt={questions["opening"][0][`openingImageAlt`]}
						imagePath={questions["opening"][0][`openingImagePath`]}
						imageAltAttribution={
							questions["opening"][0][`openingImageAttribution`]
						}
						imageAltAttributionLink={
							questions["opening"][0][`openingImageAttributionLink`]
						}
						imageCrop={questions["opening"][0][`openingImageCrop`]}
						imageCropInfo={questions["opening"][0][`openingImageCropInfo`]}
						title={questions["opening"][0][`opening`]}
						details={
							questions["opening"][0][`openingQuizDetails`]
								? questions["opening"][0][`openingQuizDetails`]
								: undefined
						}
						embed={questions["opening"][0][`openingImage-embed`]}
						scoreComments={scoreCommentsDetails}
						finalScore={currentScore}
						numberQuestions={content.numQuestions}
						serialized={questions["opening"][0][`openingQuizSerialized`]}
					/>
					<div>
						<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
					</div>
					<LongQuestions
						total={content.numQuestions}
						questionData={questions.questions}
						position={position}
						linkImage={headlineImage}
						nextHref={`${nextHref}/${quizEndRef}`}
						id={id}
						currentScore={currentScore}
						setCurrentScore={setCurrentScore}
						setQuestionsAnswered={setQuestionsAnswered}
						questionsAnswered={questionsAnswered}
						questions={questions}
						randomiseAnswers={randomiseAnswers}
					/>
					{questionsAnswered === content.numQuestions && (
						<>
							<BookEnds
								position={"closing"}
								image={questions["closing"][0][`closingImage`]}
								imageAlt={questions["closing"][0][`closingImageAlt`]}
								imagePath={questions["closing"][0][`closingImagePath`]}
								imageAltAttribution={
									questions["closing"][0][`closingImageAttribution`]
								}
								imageAltAttributionLink={
									questions["closing"][0][`closingImageAttributionLink`]
								}
								imageCrop={questions["closing"][0][`closingImageCrop`]}
								imageCropInfo={questions["closing"][0][`closingImageCropInfo`]}
								title={questions["closing"][0][`closing`]}
								details={
									questions["closing"][0][`closingQuizDetails`]
										? questions["closing"][0][`closingQuizDetails`]
										: undefined
								}
								embed={questions["closing"][0][`closingImage-embed`]}
								scoreComments={scoreCommentsDetails}
								finalScore={currentScore}
								numberQuestions={content.numQuestions}
								serialized={questions["closing"][0][`closingQuizSerialized`]}
								positionClosing={true}
							/>

							<div>
								<AdWrapper adCode={AMAZON_MUSIC_WIDE_BANNER} />
							</div>
						</>
					)}
				</>
			)}
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
