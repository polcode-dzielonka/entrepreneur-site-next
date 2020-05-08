import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import Link from "next/link";

const ScrollingArticles = ({ data }) => {
	return data.map((article, index) => {
		const { id } = article;

		const overview = JSON.parse(article.overview);
		const {
			headlineImage,
			headlineImageAlt,
			headline,
			category,
			kicker,
			urlDescription,
			srcset,
		} = overview[0];

		if (index === 0) {
			return (
				<article key={index} className="large-image-container">
					<Link href={`/${urlDescription}/article/${id}`}>
						<a className="large-image-anchor">
							<div className="large-image-main-wrapper">
								<img
									className="large-image-main"
									src={headlineImage}
									alt={headlineImageAlt}
									srcSet={srcset ? srcset : []}
									sizes="330px"
								/>
							</div>
						</a>
					</Link>
					<div className="large-info">
						<div className="info-title">
							<Link href={`/${urlDescription}/article/${id}`}>
								<a className="info-link">{headline}</a>
							</Link>
							{headline.length < 70 && (
								<h2 className="info-title">
									<Link href={`/${urlDescription}/article/${id}`}>
										<a className="category-link">{category}</a>
									</Link>
								</h2>
							)}
						</div>
					</div>
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

						.large-info {
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							padding-bottom: 1rem;
						}

						.info-title {
							position: relative;
							width: 100%;
							padding: 0.5rem;
							text-transform: uppercase;
							margin: 0;
							padding: 0;
							background: rgba(16, 16, 16, 0.75);
							overflow: hidden;
						}
						.info-link {
							color: #fff;
							font-size: 2.5rem;
							font-weight: 700;
							letter-spacing: -0.02em;
							line-height: 1.2;
							margin: 1.25rem;
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
						.large-image-anchor {
							width: 100%;
							display: flex;
							height: 100%;
							flex-direction: column;
							text-decoration: none;
						}
						.large-image-container {
							position: relative;
							cursor: pointer;
							padding: 0rem 0rem 1rem 0rem;
						}
						.large-image-main-wrapper {
							height: 100%;
							width: 100%;
						}

						.large-image-main {
							display: flex;
							height: 100%;
							width: 100%;
							background-color: ${theme.secondary};
						}
						.large-image-main:hover {
							opacity: 0.7;
						}

						@media only screen and (max-width: 645px) {
							.info-link {
								font-size: 1.15rem;
								letter-spacing: -0.02em;
								line-height: 1.35rem;
								margin: 0.7rem;
							}
						}
					`}</style>
				</article>
			);
		}

		return (
			<article className="header-section" key={index}>
				<Link href={`/${urlDescription}/article/${id}`}>
					<a className="scroll-image-anchor">
						<div className="scroll-image-wrapper">
							<img
								className="scroll-image-main"
								src={headlineImage}
								alt={headlineImageAlt}
								srcSet={srcset ? srcset : []}
								sizes="330px"
							/>
							<div className="scroll-title-container">
								<div className="scroll-title-pad">
									<div className="scroll-title-wrap">
										<h1 className="scroll-title">{headline}</h1>
									</div>
									<div className="scroll-kicker-wrapper">
										<p className="scroll-kicker">{kicker}</p>
									</div>
									<div className="scroll-category-wrapper">
										<h2 className="scroll-category">{category}</h2>
									</div>
								</div>
							</div>
						</div>
					</a>
				</Link>
				<style jsx>{`
					.header-section {
						display: flex;
						flex-direction: row;
						padding: 0.25rem 0;
						align-items: flex-start;
						position: relative;
						cursor: pointer;
						width: 100%;
						height: 205px;
					}
					.large-info {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
					}
					.info-title {
						position: relative;
						width: 100%;
						padding: 0.5rem;
						text-transform: uppercase;
						margin: 0;
						padding: 0;
						background: rgba(16, 16, 16, 0.75);
						overflow: hidden;
					}
					.info-link {
						color: #fff;
						font-size: 2.5rem;
						font-weight: 700;
						letter-spacing: -0.02em;
						line-height: 1.2;
						margin: 1.25rem;
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
					.large-image-anchor {
						width: 100%;
						display: flex;
						height: 100%;
						flex-direction: column;
						text-decoration: none;
					}

					.large-image-main-wrapper {
						height: 100%;
						width: 100%;
					}
					.large-image-main {
						display: flex;
						height: 100%;
						width: 100%;
						background-color: ${theme.secondary};
					}
					.large-image-main:hover {
						opacity: 0.7;
					}

					.scroll-category {
						font-size: 0.95rem;
						text-transform: uppercase;
						color: ${theme.primary};
						padding-right: 0.85rem;
						letter-spacing: 1px;
						float: right;
						font-family: ${theme.font};
						vertical-align: center;
						margin: 0;
					}
					.scroll-category-wrapper {
						height: 15%;
					}
					.scroll-headline-anchor {
						width: 100%;
						display: flex;
						height: 100%;
						flex-direction: row;
						text-decoration: none;
					}
					.scroll-image-anchor {
						width: 100%;
						display: flex;
						height: 100%;
						flex-direction: row;
						text-decoration: none;
					}
					.scroll-image-main {
						width: 40%;
						display: flex;
						background-color: ${theme.secondary};
					}
					.scroll-image-main:hover {
						opacity: 0.7;
					}
					.scroll-image-wrapper {
						display: flex;
						height: 100%;
						width: 100%;
					}
					.scroll-kicker-wrapper {
						font-size: 0.95rem;
						height: 35%;
						margin: 0;
						padding: 0;
						line-height: 1.1rem;
						color: #4d4d4d;
						overflow: hidden;
						-webkit-line-clamp: 3;
						text-overflow: ellipsis;
						font-family: ${theme.secondaryFont};
					}
					.scroll-kicker {
						color: #4d4d4d;
						margin-top: 0.45rem;
						padding: 0;
						font-family: ${theme.secondaryFont};
					}
					.scroll-title {
						font-size: 2.75rem;
						line-height: 2.75rem;
						color: ${theme.secondary};
						margin: 0;
						padding: 0;
						overflow: hidden;
						-webkit-line-clamp: 3;
						text-overflow: ellipsis;
						font-weight: 900;
						font-family: ${theme.font};
					}

					.scroll-title:hover {
						color: ${theme.primary};
					}
					.scroll-title-container {
						width: 60%;
					}
					.scroll-title-pad {
						padding: 0.7rem;
					}

					@media only screen and (max-width: 645px) {
						.scroll-category-wrapper {
							display: none;
						}
						.scroll-title {
							font-size: 1.3rem;
							line-height: 1.5rem;
						}
						.scroll-title-container {
							padding: 0rem 0.5rem;
						}
						.scroll-title-wrap {
							height: 60%;
						}
						.scroll-headline-image-wrap {
							width: 100%;
						}
						.scroll-image-main {
							width: 45%;
						}
						.header-section {
							padding: 0;
							height: 9rem;
							margin: 0.25rem 0rem;
						}
						.scroll-title-pad {
							padding: 0.1rem;
						}
						.scroll-kicker-wrapper {
							font-size: 0.9rem;
							height: 35%;
						}
						.scroll-kicker {
							margin-top: 0.25rem;
						}
					}
					@media only screen and (max-width: 480px) {
						.scroll-category-wrapper {
							display: none;
						}
						.scroll-title {
							font-size: 1rem;
							line-height: 1.15rem;
							font-weight: 900;
						}
						.scroll-title-container {
							padding: 0rem 0.5rem;
						}
						.scroll-title-wrap {
							height: 60%;
						}
						.scroll-headline-image-wrap {
							width: 100%;
						}
						.scroll-image-main {
							width: 45%;
						}
						.header-section {
							padding: 0;
							height: 8.5rem;
							margin: 0.25rem 0rem;
						}
						.scroll-title-pad {
							padding: 0.1rem;
						}
						.scroll-kicker-wrapper {
							font-size: 0.8rem;
							line-height: 0.95rem;
							height: 35%;
						}
						.scroll-kicker {
							margin-top: 0.25rem;
						}
					}
				`}</style>
			</article>
		);
	});
};
export default ScrollingArticles;

ScrollingArticles.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
