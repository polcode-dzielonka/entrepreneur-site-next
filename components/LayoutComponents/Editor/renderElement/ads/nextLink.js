import { theme } from "../../../../../theme/baseCss";
import PropTypes from "prop-types";
import Link from "next/link";

const NextLink = ({ brief, headline, image, url, title, srcset, imageAlt }) => {
	return (
		<div className="link-section">
			<div className="scroll-text">{title}</div>
			<div className="link-button">
				<Link href={url}>
					<a className="quickview-link">
						<div className="img-wrapper">
							<img
								src={image}
								className="quickview-image"
								srcSet={srcset ? srcset : []}
								sizes="150px"
								alt={imageAlt}
							/>
						</div>
						<div className="label">
							<div className="link-label">{headline}</div>
							<div className="link-label-brief">{brief}</div>
						</div>

						<div className="arrow-wrapper">
							<img
								className="arrow"
								src={"/static/right-arrow.svg"}
								alt="right-arrow"
							/>
						</div>
					</a>
				</Link>
			</div>
			<style jsx>{`
				.arrow {
					width: 40%;
				}
				.arrow-wrapper {
					width: 20%;
					position: relative;
					display: flex;
					align-items: center;
				}
				.link-label-brief {
					font-size: 1rem;
					font-weight: 400;
					width: 100%;
					height: 50%;
					text-align: center;
					text-transform: capitalize;
				}
				.link-label-brief:hover {
					color: ${theme.primary};
				}
				.link-label {
					font-size: 1.75rem;
					line-height: 1.9rem;
					width: 100%;
					height: 50%;
					text-align: center;
				}
				.link-label:hover {
					color: ${theme.primary};
				}
				.img-wrapper {
					height: 100%;
					width: 20%;
					display: flex;
					padding-left: 1.75rem;
				}
				.label {
					text-align: center;
					width: 60%;
					display: flex;
					flex-direction: column;
					text-decoration: none;
					padding: 0rem 1rem;
				}

				.link-button {
					padding: 2rem;
					position: relative;
					border: 1px solid rgba(51, 51, 51, 0.15);
					padding: 1.5rem;
					border-radius: 3px;
					text-decoration: none;
					margin: 1rem 0rem;
					display: flex;
					flex-direction: row;
				}
				.link-section {
					text-align: center;
				}
				.quickview-image {
					width: 100%;
				}
				.quickview-link {
					display: flex;
					text-decoration: none;
					align-items: center;
					flex-direction: row;
					justify-content: space-between;
					position: relative;
					font-size: 2.2em;
					font-weight: 700;
					color: ${theme.secondary};
					font-family: ${theme.font};
					text-transform: uppercase;
					width: 100%;
					border-radius: 3px;
					background: #f2f2f2;
					box-shadow: 0 1px 4px 2px rgba(16, 16, 16, 0.15);
					overflow: hidden;
					transition: all 0.2s ease;
					padding: 1rem 0rem;
				}

				.quickview-link:hover {
					background: ${theme.secondary};
					color: #fefefe;
				}
				.scroll-text {
					font-size: 2rem;
					font-weight: 900;
					color: ${theme.secondary};
					font-family: ${theme.font};
					text-transform: capitalize;
					margin: 1rem 0;
				}

				@media only screen and (max-width: 670px) {
					.arrow {
						width: 15%;
						margin: 0 auto;
						padding: 1rem;
					}
					.arrow-wrapper {
						width: 100%;
						height: 20%;
					}
					.link-label {
						width: 90%;
						padding: 1rem;
						margin: 0 auto;
						padding-bottom: 0rem;
					}
					.link-label-brief {
						width: 90%;
						padding: 1rem;
						margin: 0 auto;
						padding-bottom: 0rem;
					}
					.label {
						height: 40%;
						width: 100%;
						padding: 0rem 1rem;
					}
					.quickview-link {
						flex-direction: column;
					}
					.img-wrapper {
						height: 40%;
						width: 100%;
						padding-left: 0rem;
					}
					.quickview-image {
						width: 50%;
						margin: 0 auto;
					}
				}
				@media only screen and (max-width: 450px) {
					.link-label {
						font-size: 1rem;
						line-height: 1.2rem;
					}
				}
			`}</style>
		</div>
	);
};

NextLink.defaultProps = {
	url: "/",
	image: process.env.SITE_IMAGE,
	title: "Next:",
};
NextLink.propTypes = {
	brief: PropTypes.String,
	headline: PropTypes.String,
	image: PropTypes.String,
	url: PropTypes.String,
	title: PropTypes.String,
	imageAlt: PropTypes.String,
	srcset: PropTypes.Array,
};

export default NextLink;
