import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/404Styles.module.sass";
const DefaultError = () => {
	return (
		<Layout>
			<Head>
				<title>404 Error</title>
			</Head>
			<main className={styles.content}>
				<section className={styles.errorSection}>
					<h1 className={styles.mainTitle}>404 Error</h1>
					<div className={styles.mainContent}>
						<p>The page you requested does not exist or has moved.</p>
						<p>
							Click&nbsp;
							<Link href="/">
								<a className={styles.link}>here</a>
							</Link>
							&nbsp;to get back to the Home page.
						</p>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default DefaultError;
