import { theme } from "../../../theme/baseCss";
import PropTypes from "prop-types";
import DynamicHeader from "../../Header/DynamicHeader";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import { sideSocialButtons } from "../../SocialMedia/data";

const QuickHeadline = ({ data, id, position, totalSlides }) => {
	const {
		blurb,
		category,
		title,
		slideUrl,
		headlineImage,
		slideTitle,
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
