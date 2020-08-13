import Layout from "../Layouts/Layout";
import PropTypes from "prop-types";
import {
	SideBarContent,
	SideBarSmallContent,
	SectionBar,
	QuickViewComponent,
} from "../LayoutComponents";
import FacebookPage from "../SocialMedia/FacebookPage";
import LazyLoad from "react-lazyload";
import styles from "./styles/contentLayout.module.sass";
import { AMAZON_MUSIC_CODE_RECT_LARGE } from "../ads/code/amazonBusiness";

const QuickViewLayout = ({
	individual,
	headline,
	latest,
	quiz,
	slide,
	id,
	position,
	url,
}) => {
	return (
		<Layout>
			<main className={styles.articleContainer}>
				<article className={styles.articleSection}>
					<QuickViewComponent
						content={individual}
						position={position}
						url={url}
						id={id}
					/>
				</article>
				<aside className={styles.sideArticleSection}>
					<div className={styles.sectionPadding}>
						<SectionBar title="Popular" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarContent data={headline.items} type="article" showAd={true} />
					<LazyLoad once={true}>
						<FacebookPage />
					</LazyLoad>
					<div className={styles.sectionPadding}>
						<SectionBar title="Quiz" titleColor="#111" titleSize="1.7rem" />
					</div>
					<SideBarSmallContent
						data={quiz.items}
						type="quiz"
						showAd={true}
						adCode={AMAZON_MUSIC_CODE_RECT_LARGE}
					/>
				</aside>
			</main>
		</Layout>
	);
};
QuickViewLayout.propTypes = {
	id: PropTypes.String,
};

export default QuickViewLayout;
