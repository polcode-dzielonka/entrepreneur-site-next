import Layout from "../../Layouts/Layout";
import MainHeadlineLoading from "../MainHeadlineLoading";
import ScrollingArticlesLoading from "../ScrollingArticlesLoading";
import SideBarContentLoading from "../SideBarContentLoading";
import styles from "../styles/Layouts/loadingLayout.module.sass";

const Loading = () => {
	return (
		<Layout>
			<div className={styles.homeContainer}>
				<MainHeadlineLoading />
				<section className={styles.bodyContainer}>
					<div className={styles.mainLatestContainer}>
						<ScrollingArticlesLoading />
					</div>
					<aside className={styles.slideContainer}>
						<SideBarContentLoading />
					</aside>
				</section>
			</div>
		</Layout>
	);
};
export default Loading;
