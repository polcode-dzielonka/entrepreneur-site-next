import Layout from "../Layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { HEADLINES } from "../../graphql/headline";
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
			id: process.env.REACT_APP_SITE_ID,
			filter: { mainHeadline: { eq: true } },
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

	if (error || headlines.error) return <HeadlineLoading />;
	if ((loading && !loadingMorePosts) || headlines.loading)
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
			</Head>
			<div className="home-container">
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
								data={headlines.data.listProductionArticles.items}
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
