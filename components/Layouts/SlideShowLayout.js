import Layout from "../Layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { SLIDESHOW } from "../../graphql/indivSlideShow";
import { HEADLINES, SLIDE } from "../../graphql/headline";
import SlideLoading from "../Loading/Layouts/SlideShowLoading";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import {
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
	SlideShowComponent,
} from "../LayoutComponents";
import FacebookPage from "../SocialMedia/FacebookPage";

const Slide = ({ id, position, url }) => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(
		SLIDESHOW,
		{
			variables: { id: id },
			// variables: { skip, first: 10 },
			notifyOnNetworkStatusChange: true,
			// updateData: (prevResult, result) => ({
			// 	...result,
			// 	allPosts: [...prevResult.allPosts, ...result.allPosts],
			// }),
		},
	);

	const headlines = useQuery(HEADLINES, {
		variables: {
			id: process.env.REACT_APP_SITE_ID,
			filter: { mainHeadline: { eq: true } },
			limit: 5,
		},
		notifyOnNetworkStatusChange: true,
	});
	const latestSlideShows = useQuery(SLIDE, {
		variables: {
			id: process.env.REACT_APP_SITE_ID,
			filter: { mainHeadline: { eq: false } },
			limit: 5,
		},
	});

	const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

	// const loadMorePosts = () => {
	// 	fetchMore({
	// 		variables: {
	// 			skip: allPosts.length,
	// 		},
	// 		updateQuery: (previousResult, { fetchMoreResult }) => {
	// 			if (!fetchMoreResult) {
	// 				return previousResult;
	// 			}
	// 			return Object.assign({}, previousResult, {
	// 				// Append the new posts results to the old one
	// 				allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
	// 			});
	// 		},
	// 	});
	// };

	if (error || headlines.error || latestSlideShows.error)
		return <SlideLoading />;
	if ((loading && !loadingMorePosts) || headlines.loading)
		return <SlideLoading />;

	return (
		<Layout>
			<main className="article-container">
				<article className="article-section">
					<SlideShowComponent
						content={data.getProductionSlideShow}
						position={position}
						latest={latestSlideShows.data.listProductionSlideShows}
						url={url}
						id={id}
					/>
				</article>
				<aside className="side-article-section">
					<div className="section-padding">
						<SectionBar title="Popular" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarContent
						data={headlines.data.listProductionArticles.items}
						loading={headlines.loading}
						type="article"
					/>
					<FacebookPage />
					<div className="section-padding">
						<SectionBar title="Quiz" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarSmallContent
						data={headlines.data.listProductionArticles.items}
						loading={headlines.loading}
						type="article"
					/>
				</aside>
			</main>
			<style jsx>{`
				.article-container {
					display: flex;
					flex-direction: row;
					font-size: 10px;
					margin: 0 auto;
					max-width: ${theme.contentMaxWidth};
				}
				.article-section {
					display: flex;
					flex-direction: column;
					font-size: 10px;
					width: 70%;
					height: 100%;
				}
				.side-article-section {
					display: flex;
					flex-direction: column;
					font-size: 10px;
					width: 30%;
				}
				.section-padding {
					padding-right: 0.5rem;
				}
				@media only screen and (max-width: 1000px) {
					.article-container {
						flex-direction: column;
					}
					.article-section {
						width: 100%;
					}
					.side-article-section {
						width: 100%;
					}
				}
			`}</style>
		</Layout>
	);
};
Slide.propTypes = {
	id: PropTypes.String,
};

export default Slide;
