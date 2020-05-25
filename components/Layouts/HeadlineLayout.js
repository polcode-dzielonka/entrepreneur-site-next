import Layout from "../Layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { QUIZ, SLIDE, HEADLINES } from "../../graphql/headline";
import HeadlineLoading from "../Loading/Layouts/HeadlineLoadingLayout";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import {
	ScrollingArticles,
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
} from "../LayoutComponents";
import RippleButton from "../Button/Button";
import Head from "next/head";
import LazyLoad from "react-lazyload";
import FacebookPage from "../SocialMedia/FacebookPage";

const HeadlineLayout = ({
	QUERY,
	title,
	pageTitle,
	canonical,
	filter,
	limit,
}) => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(
		HEADLINES,
		{
			variables: {
				// id: process.env.REACT_APP_SITE_ID,
				filter: { category: canonical },
				// limit: 10,
			},
			notifyOnNetworkStatusChange: true,
		},
	);
	const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;
	const quiz = useQuery(QUIZ, {
		variables: {
			filter: { mainHeadline: true },
			// limit: 5,
		},
		notifyOnNetworkStatusChange: true,
	});

	const slide = useQuery(SLIDE, {
		variables: {
			longForm: "true",
			// limit: 5,
		},
		notifyOnNetworkStatusChange: true,
	});
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

	if (error) return <HeadlineLoading />;
	if ((loading && !loadingMorePosts) || quiz.loading || slide.loading)
		return <HeadlineLoading />;

	// const { allPosts, _allPostsMeta } = data;
	// const areMorePosts = allPosts.length < _allPostsMeta.count;

	return (
		<Layout>
			<Head>
				<title>{title}</title>
				<link
					rel="canonical"
					href={`${process.env.SITE_ADDRESS}/${canonical}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "BreadcrumbList",
								itemListElement: [
									{
										"@type": "ListItem",
										position: 1,
										name: "Home",
										item: "https://wealthmack.com/",
									},
									{
										"@type": "ListItem",
										position: 2,
										name: title,
										item: `${process.env.SITE_ADDRESS}/${canonical}`,
									},
								],
							},
							null,
							4,
						),
					}}
				/>
			</Head>
			<div className="home-container">
				<section className="body-container">
					<div className="latest-container">
						<div className="section-padding">
							<LazyLoad once={true}>
								<SectionBar
									title={pageTitle}
									titleColor="#111"
									titleSize="2rem"
								/>
							</LazyLoad>
						</div>
						<ScrollingArticles
							data={data.listProductionArticles.items}
							loading={loading}
						/>
						<LazyLoad once={true}>
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
						/>
						<LazyLoad once={true}>
							<FacebookPage />
						</LazyLoad>
						<div className="section-padding">
							<SectionBar title="Lists" titleColor="#111" titleSize="1.7rem" />
						</div>
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
HeadlineLayout.propTypes = {
	QUERY: PropTypes.String,
	filter: PropTypes.Object,
	limit: PropTypes.Int,
	title: PropTypes.string,
	pageTitle: PropTypes.string,
};
HeadlineLayout.defaultProps = {
	title: "WealthMack",
	pageTitle: "Latest",
};

export default HeadlineLayout;
