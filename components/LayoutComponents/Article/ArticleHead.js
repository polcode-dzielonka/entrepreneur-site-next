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
import styles from "./styles/articleHeadStyles.module.sass";

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
		<div className={styles.sectionPadding}>
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
			<h1 className={styles.sectionHeading}>{headline}</h1>
			<h3 className={styles.sectionCategory}>{category}</h3>
			<ImageLoader
				src={headlineImage}
				srcset={srcset}
				alt={headlineImageAlt}
				animation={false}
				styles={{ width: "100%", height: "100%" }}
				noMaxHeight={true}
			/>
			<h3 className={styles.sectionBrief}>{brief}</h3>
			{bulletHeadlines > 0 && (
				<ul className={styles.sectionList}>
					{Object.keys(bulletHeadlinesDetails).map((bullet, index) => {
						return (
							<li className={styles.sectionList} key={index}>
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
				<hr className={styles.break} />
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
			<hr className={styles.break} />
			<ArticleBody
				content={overview}
				url={canonical}
				image={headlineImage}
				headline={headline}
				brief={brief}
				id={id}
			/>
		</div>
	);
};

ArticleHead.propTypes = {
	overview: PropTypes.object,
	id: PropTypes.string,
};
export default ArticleHead;
