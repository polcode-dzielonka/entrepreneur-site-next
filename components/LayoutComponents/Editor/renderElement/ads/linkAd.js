import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import router from "next/router";
import { NEXT_ARTICLE } from "../../../../../graphql/indivArticle";
import NextLink from "./nextLink";
import prodRequest from "../../../../apiRequest/prodRequest";
import styles from "../styles/ads/linkAdStyles.module.sass";
const NextArticleAd = ({ children, attributes }) => {
	const [nextInfo, setNextInfo] = useState({
		showNext: false,
		url: "",
		image: "",
		headline: "",
		brief: "",
	});
	useEffect(() => {
		const { id } = router.router.query;
		getData(id);
	}, []);

	const getData = async postId => {
		try {
			const queryData = {
				query: NEXT_ARTICLE,
				// variables: { filter: { id: { ne: postId } }, limit: 1 },
				variables: {
					id: process.env.REACT_APP_SITE_ID,
					filter: { production: { eq: true } },
					limit: 2,
				},
			};

			const { data } = await prodRequest(queryData);
			const selectedArticle = data.listProductionArticles.items.filter(
				x => x.id !== postId,
			);
			const overview = JSON.parse(selectedArticle[0].overview);
			const { brief, headlineImage, headline, urlDescription } = overview[0];
			const { id } = selectedArticle[0];
			setNextInfo({
				showNext: true,
				url: `/${urlDescription}/article/${id}`,
				image: headlineImage,
				headline: headline,
				brief: brief,
			});
		} catch (err) {
			console.log("Error with request", err);
		}
	};
	return (
		<div className={styles.siteAd} {...attributes}>
			{nextInfo.showNext && (
				<NextLink
					url={nextInfo.url}
					image={nextInfo.image}
					headline={nextInfo.headline}
					brief={nextInfo.brief}
					imageAlt={nextInfo.imageAlt}
				/>
			)}
			{children}
		</div>
	);
};

NextArticleAd.propTypes = {
	children: PropTypes.func,
	attributes: PropTypes.object,
};
export default NextArticleAd;
