import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import DynamicHeader from "../../Header/DynamicHeader";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import { sideSocialButtons } from "../../SocialMedia/data";
import ShowMeta from "../../showMeta/showMeta";

const QuickHeadline = ({ data, id, position, totalSlides }) => {
	const {
		blurb,
		category,
		title,
		slideUrl,
		headlineImage,
		slideTitle,
		showDate,
		displayDate,
		showAuthor,
		authorName,
	} = data[0];
	const canonical = `${process.env.SITE_ADDRESS}/${slideUrl}/quickview/${id}/slides/${position}`;
	const shareUrl = `${process.env.SITE_ADDRESS}/${slideUrl}/quickview/${id}/slides/opening`;

	const nextEndpoint =
		position === "opening"
			? 1
			: position === "closing"
			? null
			: Number(position) === Number(totalSlides)
			? "closing"
			: Number(position) + 1;
	const prevEndpoint =
		position === "opening"
			? null
			: position === "closing"
			? Number(totalSlides)
			: Number(position) === 1
			? "opening"
			: Number(position) - 1;
	const next =
		position === "closing"
			? null
			: `${process.env.SITE_ADDRESS}/${slideUrl}/quickview/${id}/slides/${nextEndpoint}`;
	const prev =
		position === "opening"
			? null
			: `${process.env.SITE_ADDRESS}/${slideUrl}/quickview/${id}/slides/${prevEndpoint}`;
	return (
		<div className="bookend-wrapper">
			<DynamicHeader
				title={title}
				description={slideTitle}
				url={shareUrl}
				canonical={canonical}
				image={headlineImage}
				next={next}
				prev={prev}
			/>
			<h1 className="section-heading">{title}</h1>
			<h3 className="section-category">{category}</h3>
			<ShowMeta
				showDate={showDate}
				displayDate={displayDate}
				showAuthor={showAuthor}
				authorName={authorName}
			/>
			<ShareButtonVert
				data={sideSocialButtons}
				url={shareUrl}
				image={headlineImage}
				headline={title}
				brief={blurb}
			/>
			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 1rem 0;
					}

					.section-heading {
						font-size: 3.75rem;
						font-weight: 900;
						line-height: 3.95rem;
						margin: 0;
						padding: 0;
					}
					.section-category {
						margin: 0;
						padding: 0;
						font-size: 1.5rem;
						font-weight: 900;
						line-height: 3.5rem;
						color: ${theme.primary};
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

						ul {
							margin-bottom: 1.5rem;
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
						ul {
							// margin: 0;
							padding: 0 1.75rem;
						}
					}
				`}
			</style>
		</div>
	);
};
QuickHeadline.propTypes = {
	data: PropTypes.Object,
	id: PropTypes.string,
	position: PropTypes.int,
};
export default QuickHeadline;
