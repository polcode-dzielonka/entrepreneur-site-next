import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import Link from "next/link";
import SectionBar from "./SectionBar";

const MainHeadline = ({ data }) => {
	const headlineData = data[0];
	const subHeadlineData = data.filter((x, index) => index !== 0);
	const { id } = headlineData;
	const overview = JSON.parse(headlineData.overview);

	const {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		urlDescription,
		srcset,
	} = overview[0];

	return (
		<section className="header-section">
			<SectionBar title="Featured" titleColor="#fefefe" titleSize="1.25rem" />
			<div className="headline-container">
				<article className="headline-image-container">
					<Link href={`/${urlDescription}/article/${id}`}>
						<a>
							<div className="headline-image-main-wrapper">
								<img
									className="headline-image-main"
									srcSet={srcset ? srcset : []}
									sizes="330px"
									src={headlineImage}
									alt={headlineImageAlt}
								/>
							</div>
						</a>
					</Link>
					<div className="info">
						<h1 className="info-title">
							<Link href="/newsletter">
								<a className="info-link">{headline}</a>
							</Link>
						</h1>
					</div>
				</article>
				<div className="sub-headline-container">
					{subHeadlineData.map((head, index) => {
						const overview = JSON.parse(head.overview);
						const {
							headlineImage,
							headlineImageAlt,
							headline,
							srcset,
						} = overview[0];
						return (
							<article className="sub-article" key={index}>
								<Link href="/newsletter">
									<a className="sub-headline-anchor">
										<div className="sub-headline-image-wrap">
											<img
												className="sub-headline-image"
												src={headlineImage}
												alt={headlineImageAlt}
												srcSet={srcset ? srcset : []}
												sizes="330px"
											/>
										</div>
										<div className="sub-title-container">
											<div className="sub-title-wrap">
												<h2 className="sub-title">{headline}</h2>
											</div>
											<div className="sub-category-wrapper">
												<h2 className="sub-category">{category}</h2>
											</div>
										</div>
									</a>
								</Link>
							</article>
						);
					})}
				</div>
			</div>
			<style jsx>
				{`
					.header-section {
						padding: 2rem;
						font-size: 10px;
						margin: 0 auto;
						background-color: ${theme.secondary};
					}

					.headline-container {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						height: 450px;
						max-width: ${theme.contentMaxWidth};
						margin: 0 auto;
					}

					.headline-image-container {
						width: 60%;
						position: relative;
						cursor: pointer;
					}
					.headline-image-main {
						display: flex;
						height: 100%;
						width: 100%;
						background-color: ${theme.secondary};
					}
					.headline-image-main:hover {
						filter: brightness(120%);
					}
					.headline-image-main-wrapper {
						height: 100%;
						width: 100%;
					}
					.info {
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
						// margin-bottom: 0;
						background: rgba(16, 16, 16, 0.75);
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

					.sub-headline-container {
						display: flex;
						width: 40%;
						position: relative;
						height: 100%;
						flex-direction: column;
					}
					.sub-headline-image {
						display: flex;
						height: 100%;
						width: 100%;
						background-color: ${theme.secondary};
					}
					.sub-headline-image:hover {
						filter: brightness(120%);
					}
					.sub-headline-image-wrap {
						display: flex;
						height: 100%;
						width: 50%;
					}
					.sub-article {
						height: 33%;
						width: 100%;
						padding: 0.25rem;
					}
					.sub-headline-anchor {
						width: 100%;
						display: flex;
						height: 100%;
						flex-direction: row;
						text-decoration: none;
					}
					.sub-title-container {
						width: 55%;
					}
					.sub-info {
						display: flex;
						width: 100%;
						position: relative;
					}

					.sub-category {
						font-size: 0.95rem;
						text-transform: uppercase;
						color: #fefefe;
						padding-right: 0.85rem;
						letter-spacing: 1px;
						padding-bottom: 2rem;
						float: right;

						font-family: ${theme.font};
					}
					.sub-category-wrapper {
						height: 30%;
					}
					.sub-title {
						font-size: 1.1rem;
						text-transform: uppercase;
						color: #fefefe;
						margin: 0;
						padding: 0rem 0.55rem 0rem 0.55rem;
						letter-spacing: 1px;
						line-height: 1.5em;
						overflow: hidden;
						-webkit-line-clamp: 3;
						text-overflow: ellipsis;
						font-family: ${theme.font};
					}
					.sub-title:hover {
						color: ${theme.primary};
					}
					.sub-title-wrap {
						height: 65%;
						color: white;
						text-decoration: none;
						font-weight: 700;
					}
					@media only screen and (max-width: 1000px) {
						.header-section {
							padding: 0rem;
						}
						.headline-container {
							flex-direction: column;
							height: 100%;
							padding: 1rem;
						}
						.headline-image-container {
							width: 100%;
							margin-bottom: 1rem;
						}
						.sub-article:after {
							overflow: hidden;
							width: 100%;
							height: 3px;
							background: ${theme.primary};
							content: " ";
							vertical-align: middle;
							display: inline-block;
							margin: 1rem 0rem 1rem 0rem;
						}
						.sub-headline-container {
							width: 100%;
							flex-direction: column;
						}
						.sub-headline-image-wrap {
							width: 100%;
						}
						.sub-title-container {
							width: 100%;
						}

						.sub-title {
							font-size: 1.65rem;
						}
						.sub-title-wrap {
							height: 80%;
						}
					}
					@media only screen and (max-width: 620px) {
						.info-link {
							color: #fff;
							font-size: 1.75rem;
							letter-spacing: -0.02em;
							line-height: 1.2;
							margin: 1rem;
							margin-bottom: 0.25rem;
						}
						.sub-title {
							font-size: 1.15rem;
						}
						.sub-title-wrap {
							height: 60%;
						}
						.sub-headline-image-wrap {
							width: 100%;
						}
					}
				`}
			</style>
		</section>
	);
};
export default MainHeadline;

MainHeadline.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
