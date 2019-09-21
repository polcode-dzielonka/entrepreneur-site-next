import Link from "next/link";
import { theme } from "../theme/baseCss";
export default props => {
	const { post } = props;

	return (
		<li>
			<Link href="/p/[id]" as={`/p/${post.id}`}>
				{/* <a>{props.title}</a> */}
				<a>{post.name}</a>
			</Link>
			<style jsx>{`
				h1,
				a {
					font-family: ${theme.font};
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
		</li>
	);
};
