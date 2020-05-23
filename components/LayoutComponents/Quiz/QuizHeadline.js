import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import DynamicHeader from "../../Header/DynamicHeader";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import { sideSocialButtons } from "../../SocialMedia/data";
import ShowMeta from "../../showMeta/showMeta";
import LazyLoad from "react-lazyload";

const QuizHeadline = ({ data, id, position, totalQuestions }) => {
	const {
		blurb,
		category,
		title,
		quizUrl,
		headlineImage,
		quizTitle,
		showDate,
		displayDate,
		showAuthor,
		authorName,
		quizTags,
	} = data[0];
	const canonical = `${process.env.SITE_ADDRESS}/${quizUrl}/quiz/${id}/questions/${position}`;
	const shareUrl = `${process.env.SITE_ADDRESS}/${quizUrl}/quiz/${id}/questions/opening`;

	const nextEndpoint =
		position === "opening"
			? 1
			: position === "closing"
			? null
			: Number(position) === Number(totalQuestions)
			? "closing"
			: Number(position) + 1;
	const prevEndpoint =
		position === "opening"
			? null
			: position === "closing"
			? Number(totalQuestions)
			: Number(position) === 1
			? "opening"
			: Number(position) - 1;
	const next =
		position === "closing"
			? null
			: `${process.env.SITE_ADDRESS}/${quizUrl}/quiz/${id}/questions/${nextEndpoint}`;
	const prev =
		position === "opening"
			? null
			: `${process.env.SITE_ADDRESS}/${quizUrl}/quiz/${id}/questions/${prevEndpoint}`;
	return (
		<div className="bookend-wrapper">
			<DynamicHeader
				title={title}
				description={quizTitle}
				url={shareUrl}
				canonical={canonical}
				image={headlineImage}
				next={next}
				prev={prev}
				createdAt={displayDate}
				updatedAt={displayDate}
				tags={quizTags}
			/>
			<h1 className="section-heading">{title}</h1>
			<h3 className="section-category">{category}</h3>
			<ShowMeta
				showDate={showDate}
				displayDate={displayDate}
				showAuthor={showAuthor}
				authorName={authorName}
			/>
			<LazyLoad once={true}>
				<ShareButtonVert
					data={sideSocialButtons}
					url={shareUrl}
					image={headlineImage}
					headline={title}
					brief={blurb}
				/>
			</LazyLoad>

			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 1rem 0;
					}
					.break {
						border: 1px solid #dedede;
						width: 100%;
						margin: 0 auto;
					}
					.section-heading {
						font-size: 3.75rem;
						font-weight: 900;
						line-height: 3.95rem;
						margin: 0;
						padding: 0;
					}
					.section-category {
						margin: 0.8rem 0rem;
						padding: 0;
						font-size: 1.5rem;
						font-weight: 900;
						color: ${theme.primary};
						text-transform: capitalize;
					}
					.section-meta {
						margin: 0px 0px 7px 0px;
						padding: 0;
						font-size: 1.2rem;
						font-weight: 900;
						line-height: 1.7rem;
						color: grey;
						text-transform: capitalize;
					}
					@media only screen and (max-width: 670px) {
						.bookend-wrapper {
							margin: 0rem 0;
						}
						.section-heading {
							font-size: 2.75rem;
							font-weight: 900;
							line-height: 3rem;
							margin: 0;
							padding: 0;
							// text-align: center;
						}
					}

					@media only screen and (max-width: 450px) {
						.section-category {
							font-size: 1.2rem;
							font-weight: 900;
							line-height: 2rem;
							margin: 0.5rem;
						}
						.section-heading {
							font-size: 2.2rem;
							font-weight: 900;
							line-height: 2.4rem;
							margin: 0;
							padding: 0;
							// text-align: center;
						}
					}
				`}
			</style>
		</div>
	);
};
QuizHeadline.propTypes = {
	data: PropTypes.Object,
	id: PropTypes.string,
	position: PropTypes.string,
	totalQuestions: PropTypes.int,
};
export default QuizHeadline;
