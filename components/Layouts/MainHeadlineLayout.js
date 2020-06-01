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
import RippleButton from "../Button/Button";
import LazyLoad from "react-lazyload";
import Head from "next/head";
import FacebookPage from "../SocialMedia/FacebookPage";
import organisationData from "../StructuredData/organisation";
import webPageData from "../StructuredData/webPage";
import styles from "./styles/headlineLayout.module.sass";
import baseTheme from "../../theme/baseTheme.json";
const MainHeadlineLayout = ({
	site,
	headline,
	latest,
	quiz,
	slide,
	title,
	pageTitle,
	canonical,
}) => {
	const [loadingMorePosts, setLoadingMorePosts] = useState(false);
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
									titleSize="2rem"
								/>
							</div>
							<ScrollingArticles data={latest} />
							<LazyLoad once={true}>
								<RippleButton
									label={loadingMorePosts ? "Loading..." : "Load More!"}
									color={baseTheme.secondary}
								/>
							</LazyLoad>
						</div>
					</div>
					<aside className={styles.slideContainer}>
						<div className={styles.sectionPadding}>
							<SectionBar
								title="Popular"
								titleColor="#111"
								titleSize="1.7rem"
							/>
						</div>
						<SideBarContent data={quiz.items} type="quiz" />
						<LazyLoad once={true}>
							<FacebookPage />
						</LazyLoad>
						<div className={styles.sectionPadding}>
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
