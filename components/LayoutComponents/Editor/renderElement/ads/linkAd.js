import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import router from "next/router";
import axios from "axios";
import { NEXT_ARTICLE } from "../../../../../graphql/indivArticle";
import NextLink from "./nextLink";
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
			const { data } = await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(queryData),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});

			const selectedArticle = data.data.listProductionArticles.items.filter(
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
		<div className="site-ad" {...attributes}>
			{nextInfo.showNext && (
				<NextLink
					url={nextInfo.url}
					image={nextInfo.image}
					headline={nextInfo.headline}
					brief={nextInfo.brief}
				/>
			)}
			{children}
			<style jsx>{`
				.site-ad {
					width: 100%;
					margin: 0 auto;
					color: #4d4d4d;
					text-align: center;
					font-size: 2rem;
				}
			`}</style>
		</div>
	);
};

NextArticleAd.propTypes = {
	children: PropTypes.func,
	attributes: PropTypes.object,
};
export default NextArticleAd;
