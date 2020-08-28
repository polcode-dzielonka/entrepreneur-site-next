import { useState } from "react";
import Layout from "./Layout";
import PropTypes from "prop-types";
import {
	MainHeadline,
	ScrollingArticles,
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
} from "../LayoutComponents";
import LazyLoad from "react-lazyload";
import Head from "next/head";
import organisationData from "../StructuredData/organisation";
import webPageData from "../StructuredData/webPage";
import styles from "./styles/headlineLayout.module.sass";
import baseTheme from "../../theme/baseTheme.json";
import prodRequest from "../../components/apiRequest/prodRequest";
import { LATEST } from "../../graphql/headline";
import dynamic from "next/dynamic";
const FacebookPage = dynamic(() => import("../SocialMedia/FacebookPage"), {
	ssr: false,
});
const RippleButton = dynamic(() => import("../Button/Button"), {
	ssr: false,
});

const MainHeadlineLayout = ({
	headline,
	latest,
	quiz,
	slide,
	title,
	pageTitle,
	canonical,
	latestNextToken,
	latestSortIndex,
}) => {
	const [token, setToken] = useState(latestNextToken ? latestNextToken : null);
	const [sortIndex, setSortIndex] = useState(
		latestSortIndex ? latestSortIndex : null,
	);
	const [loadingMorePosts, setLoadingMorePosts] = useState(false);
	const [latestContent, setLatestContent] = useState(latest ? latest : []);

	const loadMore = async () => {
		setLoadingMorePosts(true);
		if (!token) {
			setLoadingMorePosts(false);
			return;
		}
		const { data: loadMoreArticles } = await prodRequest({
			query: LATEST,
			variables: {
				filter: { mainHeadline: true },
				limit: 4,
				nextToken: token,
				sortIndex: sortIndex,
			},
			operationName: "ListProductionArticles",
		});

		const addLatestContent = latestContent.concat(
			loadMoreArticles.listProductionArticles.items,
		);
		setLatestContent(addLatestContent);
		setToken(loadMoreArticles.listProductionArticles.nextToken);
		setSortIndex(loadMoreArticles.listProductionArticles.sortIndex);
		setLoadingMorePosts(false);
	};

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
			<div className={styles.homeContainer}>
				<MainHeadline data={headline.items} />
				<section className={styles.bodyContainer}>
					<div className={styles.latestContainer}>
						<div className={styles.scrollingWrapper}>
							<div className={styles.sectionPadding}>
								<SectionBar
									title={pageTitle}
									titleColor="#111"
									titleSize="1.25rem"
								/>
							</div>
							<ScrollingArticles data={latestContent} />
						</div>
						{token && (
							<LazyLoad once={true}>
								<RippleButton
									label={loadingMorePosts ? "Loading..." : "More"}
									color={baseTheme.secondary}
									handler={loadMore}
								/>
							</LazyLoad>
						)}
					</div>
					<aside className={styles.slideContainer}>
						<div className={styles.sectionPadding}>
							<SectionBar title="Quiz" titleColor="#111" titleSize="1.25rem" />
						</div>
						<SideBarContent data={quiz.items} type="quiz" />
						<LazyLoad once={true}>
							<FacebookPage />
						</LazyLoad>
						<div className={styles.sectionPadding}>
							<SectionBar
								title="Popular"
								titleColor="#111"
								titleSize="1.25rem"
							/>
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
						<SideBarSmallContent data={slide.items} type="slideshow" />
					</aside>
				</section>
			</div>
		</Layout>
	);
};
MainHeadlineLayout.propTypes = {
	// QUERY: PropTypes.String,
	// filter: PropTypes.Object,
	// limit: PropTypes.Int,
};

MainHeadlineLayout.defaultProps = {
	title: "WealthMack",
	pageTitle: "Latest",
};
export default MainHeadlineLayout;
