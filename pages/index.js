import { Fragment } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import fetch from "isomorphic-unfetch";

const Home = props => {
	return (
		<Layout>
			<ul>
				{props.shows.map(show => (
					<PostLink key={show.id} post={show} />
				))}
			</ul>
			<style jsx>{`
				h1,
				a {
					font-family: "Arial";
				}

				ul {
					padding: 0;
				}

				li {
					list-style: none;
					margin: 5px 0;
				}

				a {
					text-decoration: none;
					color: blue;
				}

				a:hover {
					opacity: 0.6;
				}
			`}</style>
			<h1>Checking Next integration </h1>
			<h2 style={{ color: "red" }}>Third Title</h2>
			{/* <PostLink title="Hello Next.js" id="hello-nextjs" />
			<PostLink title="Learn Next.js is awesome" id="learn-nextjs" />
			<PostLink title="Deploy apps with Zeit" id="deploy-nextjs" /> */}
		</Layout>
	);
};

Home.getInitialProps = async function() {
	const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data.map(entry => entry.show),
	};
};
export default Home;
