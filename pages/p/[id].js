import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

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
const Post = props => {
	console.log(props);
	return (
		<Layout>
			<h1>{props.show.name}</h1>
			<p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
			<img src={props.show.image.medium} />
		</Layout>
	);
};

Post.getInitialProps = async context => {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Post;
