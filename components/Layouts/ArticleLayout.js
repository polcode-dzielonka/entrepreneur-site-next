import Layout from "../Layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { ARTICLE } from "../../graphql/indivArticle";
import { HEADLINES, QUIZ } from "../../graphql/headline";
import ArticleLoading from "../Loading/Layouts/ArticleLoadingLayout";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import {
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
	ArticleHead as ArticleContent,
} from "../LayoutComponents";
import FacebookPage from "../SocialMedia/FacebookPage";
import LazyLoad from "react-lazyload";

const Article = ({ id }) => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(ARTICLE, {
		variables: { id: id },
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
			filter: { mainHeadline: true },
			limit: 5,
		},
		notifyOnNetworkStatusChange: true,
	});

	const quiz = useQuery(QUIZ, {
		variables: {
			filter: { mainHeadline: true },
			// limit: 5,
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

	if (error || headlines.error) return <ArticleLoading />;
	if ((loading && !loadingMorePosts) || headlines.loading || quiz.loading)
		return <ArticleLoading />;

	return (
		<Layout>
			<main className="article-container">
				<article className="article-section">
					<ArticleContent overview={data.getProductionArticle} id={id} />
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
					<LazyLoad once={true}>
						<FacebookPage />
					</LazyLoad>
					<div className="section-padding">
						<SectionBar title="Quiz" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarSmallContent
						data={quiz.data.listProductionQuizs.items}
						loading={quiz.loading}
						type="quiz"
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
Article.propTypes = {
	id: PropTypes.String,
};

export default Article;
