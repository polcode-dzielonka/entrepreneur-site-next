import Layout from "../Layouts/Layout";
import { useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../error";
import { NetworkStatus } from "apollo-client";
import { QUIZ } from "../../graphql/indivQuiz";
import { HEADLINES } from "../../graphql/headline";
import QuizLoading from "../Loading/Layouts/QuizLoadingLayout";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import {
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
	QuizComponent,
} from "../LayoutComponents";
import FacebookPage from "../SocialMedia/FacebookPage";

const Quiz = ({ id, position, url, score }) => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(QUIZ, {
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

	if (error || headlines.error) return <QuizLoading />;
	if ((loading && !loadingMorePosts) || headlines.loading)
		return <QuizLoading />;

	return (
		<Layout>
			<main className="article-container">
				<article className="article-section">
					<QuizComponent
						content={data.getProductionQuiz}
						position={position}
						url={url}
						id={id}
						score={score}
					/>
				</article>
				<aside className="side-article-section">
					<div className="section-padding">
						<SectionBar title="Popular" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarContent
						data={headlines.data.listProductionArticles.items}
						loading={headlines.loading}
					/>
					<FacebookPage />
					<div className="section-padding">
						<SectionBar title="Quiz" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarSmallContent
						data={headlines.data.listProductionArticles.items}
						loading={headlines.loading}
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
Quiz.propTypes = {
	id: PropTypes.String,
};

export default Quiz;
