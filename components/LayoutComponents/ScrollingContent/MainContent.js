import Link from "next/link";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const MainScrollingContent = ({
	category,
	headline,
	headlineImage,
	headlineImageAlt,
	index,
	srcset,
	contentLink,
}) => {
	return (
		<article className="side-content" key={index}>
			<LazyLoad once={true}>
				<Link href={contentLink}>
					<a className="side-headline-anchor">
						<div className="side-image-wrapper">
							<img
								className="side-image-main"
								src={headlineImage}
								alt={headlineImageAlt}
								srcSet={srcset ? srcset : []}
								sizes="330px"
							/>
						</div>
					</a>
				</Link>
				<div className="side-title-info">
					<h1 className="side-title">
						<Link href={contentLink}>
							<a className="info-link">{headline}</a>
						</Link>
						<h2 className="side-title">
							<Link href={contentLink}>
								<a className="category-link">{category}</a>
							</Link>
						</h2>
					</h1>
				</div>
			</LazyLoad>

			<style jsx>{`
				.category-link {
					color: #fff;
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
					color: #fff;
					font-size: 1.5rem;
					letter-spacing: -0.02em;
					line-height: 1.2;
					margin: 0.5rem;
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
					margin-bottom: 1rem;
					position: relative;
					cursor: pointer;
					padding: 0;
					width: 100%;
				}
				.side-headline-anchor {
					width: 100%;
					display: flex;
					height: 100%;
					flex-direction: column;
					text-decoration: none;
				}
				.side-image-wrapper {
					height: 100%;
					width: 100%;
				}
				.side-image-main {
					display: flex;
					height: 100%;
					width: 100%;
					background-color: ${theme.secondary};
				}
				.side-image-main:hover {
					opacity: 0.7;
				}
				.side-title-info {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
				}
				.side-title {
					position: relative;
					width: 100%;
					text-transform: uppercase;
					margin: 0;
					padding: 0;
					background: rgba(16, 16, 16, 0.75);
					overflow: hidden;
				}
				@media only screen and (max-width: 1000px) {
					.info-link {
						font-size: 2.5rem;
					}
					.side-content {
						padding: 0rem 0rem 0rem 0rem;
					}
				}
				@media only screen and (max-width: 645px) {
					.info-link {
						font-size: 1.5rem;
					}
				}
			`}</style>
		</article>
	);
};
MainScrollingContent.propTypes = {
	category: PropTypes.String,
	headline: PropTypes.String,
	headlineImage: PropTypes.String,
	headlineImageAlt: PropTypes.String,
	index: PropTypes.int,
	srcset: PropTypes.array,
};
export default MainScrollingContent;
