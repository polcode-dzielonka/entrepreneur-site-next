import SectionBar from "../SectionBar";
import PropTypes from "prop-types";
import DynamicHeader from "../../Header/DynamicHeader";
import ArticleBody from "./ArticleBody";
import ShareButtonHoriz from "../../SocialMedia/ShareButtonsHoriz";
import ShareButtonVert from "../../SocialMedia/ShareButtonsVert";
import ImageLoader from "../../Loading/ImageLoader";
import {
	openingSocialButtons,
	sideSocialButtons,
} from "../../SocialMedia/data";
import ShowMeta from "../../showMeta/showMeta";
import LazyLoad from "react-lazyload";

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
		srcset,
		showDate,
		displayDate,
		showAuthor,
		authorName,
		tags,
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
				createdAt={displayDate}
				updatedAt={displayDate}
				tags={tags}
			/>
			<SectionBar title={`${category}`} titleColor="#111" titleSize="1.5rem" />
			<h1 className="section-heading">{headline}</h1>
			<h3 className="section-category">{category}</h3>
			<ImageLoader
				src={headlineImage}
				srcset={srcset}
				alt={headlineImageAlt}
				animation={false}
				styles={{ width: "100%", height: "100%" }}
				noMaxHeight={true}
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
			<ShowMeta
				showDate={showDate}
				displayDate={displayDate}
				showAuthor={showAuthor}
				authorName={authorName}
			/>
			<LazyLoad once={true}>
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
					position={"top_share_horiz"}
				/>
			</LazyLoad>
			<hr className="break" />
			<ArticleBody
				content={overview}
				url={canonical}
				image={headlineImage}
				headline={headline}
				brief={brief}
				id={id}
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
					.section-meta {
						margin: 0px 0px 7px 0px;
						padding: 0;
						font-size: 1.2rem;
						font-weight: 900;
						line-height: 1.7rem;
						color: grey;
						text-transform: capitalize;
					}
					ul {
						margin: 0;
					}

					@media only screen and (max-width: 670px) {
						.section-padding {
							margin: 0 0.25rem;
						}
						.section-heading {
							font-size: 2rem;
							font-weight: 900;
							line-height: 2.25rem;
							margin: 0;
							padding: 0;
							// text-align: center;
						}
					}
					@media only screen and (max-width: 450px) {
						.section-brief {
							font-size: 1rem;
							line-height: 1.2rem;
							text-transform: capitalize;
							padding: 0 0.5rem;
							margin: 0.75rem 0;
						}
						.section-category {
							font-size: 1.2rem;
							font-weight: 900;
							line-height: 2rem;
							margin: 0.25rem 0;
						}
						.section-heading {
							font-size: 1.6rem;
							font-weight: 900;
							line-height: 1.8rem;
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

ArticleHead.propTypes = {
	overview: PropTypes.object,
	id: PropTypes.string,
};
export default ArticleHead;
