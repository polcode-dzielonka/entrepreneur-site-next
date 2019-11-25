import SectionBar from "../SectionBar";
import PropTypes from "prop-types";
import { theme } from "../../../theme/baseCss";
import DynamicHeader from "../../Header/DynamicHeader";
import ArticleBody from "./ArticleBody";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import ImageLoader from "../../Loading/ImageLoader";
import {
	openingSocialButtons,
	sideSocialButtons,
} from "../../SocialMedia/data";

const ArticleHead = ({ overview, id }) => {
	const details = JSON.parse(overview.overview);
	const {
		category,
		headline,
		headlineImage,
		headlineImageAlt,
		brief,
		bulletHeadlines,
		bulletHeadlinesDetails,
		urlDescription,
	} = details[0];
	const canonical = `${process.env.SITE_ADDRESS}/${urlDescription}/article/${id}`;
	return (
		<div className="section-padding">
			<DynamicHeader
				title={headline}
				description={brief}
				url={canonical}
				canonical={canonical}
				image={headlineImage}
			/>

			<SectionBar title={`${category}`} titleColor="#111" titleSize="1.5rem" />
			<h1 className="section-heading">{headline}</h1>
			<h3 className="section-category">{category}</h3>

			<ImageLoader
				src={headlineImage}
				alt={headlineImageAlt}
				animation={false}
			/>
			<h3 className="section-brief">{brief}</h3>
			{bulletHeadlines > 0 && (
				<ul>
					{Object.keys(bulletHeadlinesDetails).map((bullet, index) => {
						return (
							<li className="section-list" key={index}>
								{bulletHeadlinesDetails[bullet]}
							</li>
						);
					})}
				</ul>
			)}
			<hr className="break" />
			<ShareButtonVert
				data={sideSocialButtons}
				url={canonical}
				image={headlineImage}
				headline={headline}
				brief={brief}
			/>
			<ShareButtonHoriz
				data={openingSocialButtons}
				url={canonical}
				image={headlineImage}
				headline={headline}
				brief={brief}
			/>
			<hr className="break" />
			<ArticleBody
				content={overview}
				url={canonical}
				image={headlineImage}
				headline={headline}
				brief={brief}
			/>
			<style jsx>
				{`
					.break {
						border: 1px solid #dedede;
						width: 100%;
						margin: 0 auto;
					}
					.section-padding {
						display: flex;
						flex-direction: column;
						margin: 0 2rem;
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
						margin: 1.5rem 0;
						padding: 0;
						font-size: 1.45rem;
						font-weight: 300;
						line-height: 2rem;
						color: ${theme.secondary};
						text-transform: capitalize;
						font-family: ${theme.secondaryFont};
					}
					.section-image {
						height: 426px;
						width: 100%;
						background-color: #e2e2e2e2;
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

ArticleHead.propTypes = {
	overview: PropTypes.object,
	id: PropTypes.string,
};
export default ArticleHead;
