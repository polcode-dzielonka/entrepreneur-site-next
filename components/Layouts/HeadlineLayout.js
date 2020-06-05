import { useState } from "react";
import Layout from "../Layouts/Layout";
import PropTypes from "prop-types";
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
import styles from "./styles/headlineLayout.module.sass";
import baseTheme from "../../theme/baseTheme.json";
const HeadlineLayout = ({
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
			<div className={styles.homeContainer}>
				<section className={styles.bodyContainer}>
					<div className={styles.latestContainer}>
						<div className={styles.scrollingWrapper}>
							<div className={styles.sectionPadding}>
								<LazyLoad once={true}>
									<SectionBar
										title={pageTitle}
										titleColor="#111"
										titleSize="2rem"
									/>
								</LazyLoad>
							</div>
							<ScrollingArticles data={headline.items} />
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
						<SideBarSmallContent data={slide.items} type="slideshow" />
					</aside>
				</section>
			</div>
		</Layout>
	);
};
HeadlineLayout.propTypes = {
	title: PropTypes.string,
	pageTitle: PropTypes.string,
};
HeadlineLayout.defaultProps = {
	title: "WealthMack",
	pageTitle: "Latest",
};

export default HeadlineLayout;
