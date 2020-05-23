import Link from "next/link";
import { theme } from "../../../theme/baseCss";
import LazyLoad from "react-lazyload";

const SideBarContent = ({
	key,
	type,
	headlineImage,
	headlineImageAlt,
	headline,
	category,
	url,
	contentLink,
	srcset,
}) => {
	return (
		<article className="side-content" key={key}>
			<LazyLoad once={true}>
				<Link href={contentLink}>
					<a className="side-headline-anchor">
						<div className="side-image-wrapper">
							<img
								className="side-image-main"
								src={headlineImage}
								alt={headlineImageAlt}
								srcSet={srcset ? srcset : []}
								sizes="150px"
							/>
						</div>
					</a>
				</Link>
				<div className="side-title-info">
					<Link href={contentLink}>
						<a className="info-link">{headline}</a>
					</Link>
					<div className="side-title">
						<div className="side-title">
							<Link href={contentLink}>
								<a className="category-link">{category}</a>
							</Link>
						</div>
					</div>
				</div>
			</LazyLoad>
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
					line-height: 1.4rem;
					padding: 0 0.25rem;
					text-decoration: none;
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
					width: 100%;
					text-transform: uppercase;
					margin: 0;
					padding: 0;
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
						line-height: 1.7rem;
					}
					.side-image-main {
						height: 8rem;
					}
				}
				@media only screen and (max-width: 460px) {
					.info-link {
						font-size: 1.35rem;
						line-height: 1.5rem;
						font-weight: 900;
						padding: 0rem 0.5rem;
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
