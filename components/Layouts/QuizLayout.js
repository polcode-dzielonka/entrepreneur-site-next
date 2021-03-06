import Layout from "../Layouts/Layout";
import PropTypes from "prop-types";
import {
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
	QuizComponent,
} from "../LayoutComponents";
import LazyLoad from "react-lazyload";
import styles from "./styles/contentLayout.module.sass";
import { ETORO_COPY_TRADER } from "../ads/code/eToro";
import dynamic from "next/dynamic";
const FacebookPage = dynamic(() => import("../SocialMedia/FacebookPage"), {
	ssr: false,
});
const Quiz = ({
	individual,
	headline,
	latest,
	quiz,
	slide,
	id,
	position,
	url,
	score,
}) => {
	const headlineData = individual.linkedArticle
		? [individual.linkedArticle, ...headline.items]
		: headline.items;
	return (
		<Layout>
			<main className={styles.articleContainer}>
				<article className={styles.articleSection}>
					<QuizComponent
						content={individual}
						position={position}
						nextQuiz={quiz}
						url={url}
						id={id}
						score={score}
					/>
				</article>
				<aside className={styles.sideArticleSection}>
					<div className={styles.sectionPadding}>
						<SectionBar title="Quiz" titleColor="#111" titleSize="1rem" />
					</div>
					<SideBarContent data={headlineData} type="article" showAd={true} />
					<LazyLoad once={true}>
						<FacebookPage />
					</LazyLoad>
					<div className={styles.sectionPadding}>
						<SectionBar title="Popular" titleColor="#111" titleSize="1rem" />
					</div>
					<SideBarSmallContent
						data={slide.items}
						type="slideshow"
						showAd={true}
						adCode={ETORO_COPY_TRADER}
					/>
				</aside>
			</main>
		</Layout>
	);
};
Quiz.propTypes = {
	id: PropTypes.String,
};

export default Quiz;
