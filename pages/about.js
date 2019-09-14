import Header from "../components/Header";
import Layout from "../components/Layout";
import Head from "next/head";
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
				<title>About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>About Page Check!</h1>
			<h2>About Page for Entrepreneurs</h2>
		</Layout>
	);
};
