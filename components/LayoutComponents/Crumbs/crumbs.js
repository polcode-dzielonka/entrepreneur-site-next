import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import styles from "./styles/crumbStyles.module.sass";
const Crumbs = ({ home, category, headline, headlineUrl, refPath }) => {
	return (
		<>
			<Head>
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
										name:
											category.charAt(0).toUpperCase() + category.substring(1),
										item: `${process.env.SITE_ADDRESS}/${category}`,
									},
									{
										"@type": "ListItem",
										position: 3,
										name: headline,
										item: `${headlineUrl}`,
									},
								],
							},
							null,
							4,
						),
					}}
				/>
			</Head>
			<nav className={styles.pathWrapper}>
				<div className={styles.path}>Path:</div>
				<div className={styles.pathList}>
					<Link href={"/"}>
						<a className={styles.crumbLink}>Home</a>
					</Link>
					<span className={styles.seperator}>/</span>
					<Link href={`/${category}`}>
						<a className={styles.crumbLink}>{category}</a>
					</Link>
					<span className={styles.seperator}>/</span>

					<Link href={refPath} as={`${headlineUrl}`}>
						<a className={styles.crumbLink}>{headline}</a>
					</Link>
				</div>
			</nav>
		</>
	);
};
Crumbs.propTypes = {
	home: PropTypes.string,
	category: PropTypes.string,
	headline: PropTypes.string,
	headlineUrl: PropTypes.string,
};
Crumbs.defaultProps = {
	home: process.env.SITE_ADDRESS,
	category: `motivation`,
	headlineUrl: process.env.SITE_ADDRESS,
};
export default Crumbs;
