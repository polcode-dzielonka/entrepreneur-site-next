import Link from "next/link";
import { theme } from "../../../theme/baseCss";

const SideBarContent = ({
	key,
	type,
	headlineImage,
	headlineImageAlt,
	headline,
	category,
	url,
	contentLink,
}) => {
	return (
		<article className="side-content" key={key}>
			<Link href={contentLink}>
				<a className="side-headline-anchor">
					<div className="side-image-wrapper">
						<img
							className="side-image-main"
							src={headlineImage}
							alt={headlineImageAlt}
						/>
					</div>
				</a>
			</Link>
			<div className="side-title-info">
				<div className="side-title">
					<Link href={contentLink}>
						<a className="info-link">{headline}</a>
					</Link>
					<div className="side-title">
						<Link href={contentLink}>
							<a className="category-link">{category}</a>
						</Link>
					</div>
				</div>
			</div>
			<style jsx>{`
				.category-link {
					color: ${theme.secondary};
					font-size: 1rem;
					margin: 0;
					text-decoration: none;
					float: right;
					padding-right: 1rem;
					font-family: ${theme.font};
				}
				.category-link:hover {
					color: ${theme.primary};
				}
				.info-link {
					color: ${theme.secondary};
					font-size: 1.2rem;
					letter-spacing: -0.02em;
					line-height: 1.2;
					margin: 0 0.5rem;
					margin-bottom: 0.55rem;
					text-decoration: none;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
					transition: all 0.2s ease;
					font-family: ${theme.font};
				}
				.info-link:hover {
					color: ${theme.primary};
				}

				.side-content {
					margin-bottom: 0.5rem;
					position: relative;
					cursor: pointer;
					display: flex;
					flex-direction: row;
				}
				.side-headline-anchor {
					width: 40%;
					display: flex;
					height: 100%;
					flex-direction: row;
					text-decoration: none;
					background-color: #fff;
				}
				.side-image-wrapper {
					height: 100%;
					width: 100%;
				}
				.side-image-main {
					display: flex;
					height: 7.5rem;
					width: 100%;
					background-color: ${theme.secondary};
				}
				.side-image-main:hover {
					opacity: 0.7;
				}
				.side-title-info {
					width: 60%;
					display: flex;
					flex-wrap: wrap;
				}
				.side-title {
					position: relative;
					width: 100%;
					padding: 0.5rem;
					text-transform: uppercase;
					margin: 0;
					padding: 0;
					overflow: hidden;
				}
				@media only screen and (max-width: 1000px) {
					.info-link {
						font-size: 2.5rem;
					}
					.side-image-main {
						height: 12rem;
					}
				}
				@media only screen and (max-width: 645px) {
					.info-link {
						font-size: 1.5rem;
					}
					.side-image-main {
						height: 8rem;
					}
				}
			`}</style>
		</article>
	);
};
export default SideBarContent;
