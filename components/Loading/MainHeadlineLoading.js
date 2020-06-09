import PropTypes from "prop-types";
import styles from "./styles/mainHeadlineStyles.module.sass";
import SectionBar from "../LayoutComponents/SectionBar";

const MainHeadlineLoading = () => {
	return (
		<section className={styles.headerSection}>
			<div className={styles.sectionHead}>
				<SectionBar title="Featured" titleColor="#fefefe" titleSize="1.25rem" />
			</div>
			<div className={styles.headlineContainer}>
				<article className={styles.headlineImageContainer}>
					<div className={styles.banner}>
						<div className={styles.title}></div>
						<div className={styles.category}></div>
					</div>
				</article>
				<div className={styles.subArticles}>
					{["", "", ""].map((loading, index) => {
						return (
							<article className={styles.subArticle} key={index}>
								<div className={styles.subArticleWrap}></div>
								<div className={styles.subArticleTitleWrap}>
									<div className={styles.subTitleOne}></div>
									<div className={styles.subTitleTwo}></div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default MainHeadlineLoading;

MainHeadlineLoading.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
