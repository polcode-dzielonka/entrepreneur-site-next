import { theme } from "../../../theme/baseCss";
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
	} = data[0];
	const canonical = `${process.env.SITE_ADDRESS}/${slideUrl}/slideshow/${id}/slides/${position}`;

	return (
		<div className="bookend-wrapper">
			<DynamicHeader
				title={title}
				description={slideTitle}
				url={canonical}
				canonical={canonical}
				image={headlineImage}
			/>
			<h1 className="section-heading">{title}</h1>
			<h3 className="section-category">{category}</h3>
			<ul>
				<li className="section-brief">{slideTitle}</li>
				<li className="section-brief">{blurb}</li>
			</ul>
			<ImageLoader
				src={headlineImage}
				alt={headlineImageAlt}
				animation={false}
				srcset={srcset}
			/>
			<hr className="break" />
			<SectionBar title={`Share`} titleColor="#111" titleSize="1.5rem" />

			<ShareButtonVert
				data={sideSocialButtons}
				url={canonical}
				image={headlineImage}
				headline={title}
				brief={blurb}
			/>
			<ShareButtonHoriz
				data={openingSocialButtons}
				url={canonical}
				image={headlineImage}
				headline={title}
				brief={blurb}
			/>
			<hr className="break" />
			<style jsx>
				{`
					.bookend-wrapper {
						height: 100%;
						width: 100%;
						margin: 1.5rem 0;
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
						margin: 0;
						padding: 0;
						font-size: 1.5rem;
						font-weight: 900;
						line-height: 3.5rem;
						color: ${theme.primary};
						text-transform: capitalize;
					}
					.section-brief {
						margin: 1rem 0;
						padding: 0;
						font-size: 1.25rem;
						font-weight: 300;
						line-height: 2rem;
						color: ${theme.secondary};
						text-transform: capitalize;
						font-family: ${theme.secondaryFont};
					}
				`}
			</style>
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
