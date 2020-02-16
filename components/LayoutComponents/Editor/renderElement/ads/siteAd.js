import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import router from "next/router";
import { ADVERT_ARTICLE } from "../../../../../graphql/indivArticle";
import { midSocialButtons } from "../../../../SocialMedia/data";
import ShareButtonHoriz from "../../../../SocialMedia/ShareButtonsHoriz";
import prodRequest from "../../../../apiRequest/prodAppsyncRequest";
const SiteAd = ({ children, attributes }) => {
	const [shareInfo, setShareInfo] = useState({
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
				query: ADVERT_ARTICLE,
				variables: { id: postId },
			};
			const { data } = await prodRequest(queryData);

			const overview = JSON.parse(data.data.getProductionArticle.overview);
			const { brief, headlineImage, headline, urlDescription } = overview[0];
			const { id } = data.data.getProductionArticle;
			setShareInfo({
				url: `${process.env.SITE_ADDRESS}/${urlDescription}/article/${id}`,
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
			<ShareButtonHoriz
				data={midSocialButtons}
				url={shareInfo.url}
				image={shareInfo.image}
				headline={shareInfo.headline}
				brief={shareInfo.brief}
			/>
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

SiteAd.propTypes = {
	children: PropTypes.func,
	attributes: PropTypes.object,
};
export default SiteAd;
