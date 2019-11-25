import PropTypes from "prop-types";
import Link from "next/link";
const Crumbs = ({ home, category, headline, headlineUrl }) => {
	return (
		<nav className="path-wrapper">
			<div className="path">Path:</div>
			<div className="paths-list">
				<Link href={"/"}>
					<a className="crumb-link">Home</a>
				</Link>
				<span>/</span>
				<Link href={`/${category}`}>
					<a className="crumb-link">{category}</a>
				</Link>
				<span>/</span>

				<Link href={`${headlineUrl}`}>
					<a className="crumb-link">{headline}</a>
				</Link>
			</div>
			<style jsx>{`
				.path {
					text-transform: uppercase;
					font-size: 1.15rem;
					font-weight: 900;
					color: black;
				}
				.paths-list {
					margin-left: 1rem;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.crumb-link {
					text-transform: uppercase;
					font-size: 0.95rem;
					text-decoration: none;
					color: black;
				}
				span {
					content: "/";
					margin: 0rem 1rem;
				}
				.path-wrapper {
					display: flex;
					flex-direction: row;
					align-items: center;
					width: 100%;
					margin: 1rem 0rem;
					padding-left: 1rem;
				}
				@media only screen and (max-width: 1000px) {
					.path-wrapper {
						padding-left: 0;
					}
				}
			`}</style>
		</nav>
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
