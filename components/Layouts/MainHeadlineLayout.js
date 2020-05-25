import Layout from "./Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { QUIZ, SLIDE, HEADLINES, LATEST } from "../../graphql/headline";
import MainHeadlineLoading from "../Loading/Layouts/MainHeadlineLoadingLayout";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import {
	MainHeadline,
	ScrollingArticles,
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
} from "../LayoutComponents";
import RippleButton from "../Button/Button";
import LazyLoad from "react-lazyload";
import Head from "next/head";
import FacebookPage from "../SocialMedia/FacebookPage";
import organisationData from "../StructuredData/organisation";
import webPageData from "../StructuredData/webPage";
const MainHeadlineLayout = ({
	QUERY,
	title,
	pageTitle,
	canonical,
	filter,
	limit,
}) => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(QUERY, {
		variables: { id: process.env.REACT_APP_SITE_ID },
		// variables: { skip, first: 10 },
		notifyOnNetworkStatusChange: true,
		// updateData: (prevResult, result) => ({
		// 	...result,
		// 	allPosts: [...prevResult.allPosts, ...result.allPosts],
		// }),
	});
	const headlines = useQuery(HEADLINES, {
		variables: {
			filter: { mainHeadline: true },
			limit: 4,
		},
		notifyOnNetworkStatusChange: true,
	});
	const latestArticles = useQuery(LATEST, {
		variables: {
			limit: 10,
		},
		notifyOnNetworkStatusChange: true,
	});

	const quiz = useQuery(QUIZ, {
		variables: {
			filter: { mainHeadline: true },
			limit: 5,
		},
		notifyOnNetworkStatusChange: true,
	});

	const slide = useQuery(SLIDE, {
		variables: {
			longForm: "true",
			limit: 5,
		},
		notifyOnNetworkStatusChange: true,
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
	if (
		error ||
		headlines.error ||
		quiz.error ||
		slide.error ||
		latestArticles.error
	)
		return <MainHeadlineLoading />;
	if (
		(loading && !loadingMorePosts) ||
		headlines.loading ||
		quiz.loading ||
		slide.loading ||
		latestArticles.loading
	)
		return <MainHeadlineLoading />;
	const newLatestArticles = latestArticles.data.listProductionArticles.items.filter(
		item => {
			return (
				headlines.data.listProductionArticles.items.filter(filteredItem => {
					return filteredItem.id === item.id;
				}).length == 0
			);
		},
	);

	return (
		<Layout>
			<Head>
				<title>{title}</title>
				<link
					rel="canonical"
					href={`${process.env.SITE_ADDRESS}${
						canonical ? `/${canonical}` : ``
					}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organisationData, null, 4),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(webPageData, null, 4),
					}}
				/>
			</Head>
			<div className="home-container">
				<MainHeadline
					data={headlines.data.listProductionArticles.items}
					loading={headlines.loading}
				/>
				<section className="body-container">
					<div className="latest-container">
						<div className="section-padding">
							<SectionBar
								title={pageTitle}
								titleColor="#111"
								titleSize="2rem"
							/>
						</div>
						<LazyLoad once={true}>
							<ScrollingArticles
								data={newLatestArticles}
								loading={headlines.loading}
							/>

							<RippleButton
								label={loadingMorePosts ? "Loading..." : "Load More!"}
								color={theme.secondary}
							/>
						</LazyLoad>
					</div>
					<aside className="slide-container">
						<div className="section-padding">
							<SectionBar
								title="Popular"
								titleColor="#111"
								titleSize="1.7rem"
							/>
						</div>
						<SideBarContent
							data={quiz.data.listProductionQuizs.items}
							loading={quiz.loading}
							type="quiz"
						/>{" "}
						<LazyLoad once={true}>
							<FacebookPage />
						</LazyLoad>
						<div className="section-padding">
							<SectionBar title="Lists" titleColor="#111" titleSize="1.7rem" />
						</div>
						{/* <SideBarSmallContent
							data={quiz.data.listProductionQuizs.items}
							loading={quiz.loading}
							type="quiz"
						/>
						<SideBarSmallContent
							data={headlines.data.listProductionArticles.items}
							loading={quiz.loading}
							type="article"
						/> */}
						<SideBarSmallContent
							data={slide.data.listProductionSlideshows.items}
							loading={slide.loading}
							type="slideshow"
						/>
					</aside>
				</section>
			</div>
			<style jsx>{`
				.body-container {
					display: flex;
					flex-direction: row;
					padding: 2rem;
					font-size: 10px;
					margin: 0 auto;
					max-width: ${theme.contentMaxWidth};
				}

				.latest-container {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
					max-width: 70%;
					padding: 0rem 0.75rem 0.75rem 0;
				}
				.section-padding {
					padding-right: 0.5rem;
				}

				.slide-container {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
					max-width: 30%;
					padding: 0rem 0rem 0.75rem 0.5rem;
				}

				@media only screen and (max-width: 1000px) {
					.body-container {
						flex-direction: column;
						padding: 0rem;
					}
					.latest-container {
						max-width: 100%;
						padding: 0rem;
					}
					.slide-container {
						max-width: 100%;
						padding: 0;
					}
				}
			`}</style>
		</Layout>
	);
};
MainHeadlineLayout.propTypes = {
	QUERY: PropTypes.String,
	filter: PropTypes.Object,
	limit: PropTypes.Int,
};

MainHeadlineLayout.defaultProps = {
	title: "WealthMack",
	pageTitle: "Latest",
};
export default MainHeadlineLayout;
