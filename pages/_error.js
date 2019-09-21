import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { theme } from "../theme/baseCss";
// const social = [
// 	{ name: "description", content: `${helmetMetaComment}` },
// 	{ name: "twitter:title", content: `${helmetTitle}` },
// 	{ name: "twitter:description", content: `${helmetMetaComment}` },
// 	{ name: "twitter:image", content: `${helmetImage}` },
// 	{ property: "og:title", content: `${helmetTitle}` },
// 	{ property: "og:type", content: "article" },
// 	{ property: "og:image", content: `${helmetImage}` },
// 	{ property: "og:description", content: `${helmetMetaComment}` },
// ];

export default () => {
	return (
		<Layout>
			<Head>
				<title>404 Error</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="content">
				<section>
					<h1 className="main-title">404 Error</h1>
					<div className="main-content">
						<p>The page you requested does not exist or has moved.</p>
						<p>
							Click &nbsp;
							<Link>
								<a href="/" className="link">
									here
								</a>
							</Link>
							to get back to the Home page.
						</p>
					</div>
				</section>
			</main>
			<style jsx>
				{`
					.content {
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
						line-height: ${theme.lineHeight};
						text-align: center;
					}
					.link {
						text-decoration: none;
						color: black;
						font-weight: 900;
					}
					.main-title {
						font-family: ${theme.secondaryFont};
						margin-top: 3.5rem;
						font-size: 2.8em;
						font-weight: 700;
						color: #101010;
						text-transform: uppercase;
					}
					.main-content {
						font-family: ${theme.secondaryFont};
						font-size: ${theme.fontSize};
						color: #101010;
					}
					.main-content p {
						text-align: center;
					}
					section {
						padding-top: 5rem;
						padding-bottom: 4rem;
					}
					@media only screen and (max-width: 960px) {
						.content {
							margin-bottom: 5rem;
							width: 100%;
							min-width: 100%;
							display: flex;
							flex-grow: 1;
							flex-direction: column;
							width: 70%;
							margin: 0 auto;
						}
						.main-title {
							text-align: center;
						}
						.main-content {
							font-family: ${theme.secondaryFont};
							font-size: ${theme.fontSize};
							font-weight: 300;
							color: #101010;
							width: 80%;
							margin: 0 auto;
							margin-bottom: 5rem;
						}
					}
				`}
			</style>
		</Layout>
	);
};
