import { theme } from "../../theme/baseCss";
import PropTypes from "prop-types";
import Link from "next/link";
const SlideLinkButton = ({ label, href, imgSrc, srcset, imageAlt }) => {
	return (
		<div className="link-section">
			<div className="scroll-text">Continue Scrolling to Keep Reading</div>
			<div className="scroll-text">
				Click the button below to start the Slideshow.
			</div>
			<div className="link-button">
				<Link href={href}>
					<a className="quickview-link">
						<div className="img-wrapper">
							<img
								src={imgSrc}
								srcSet={srcset}
								sizes="150px"
								className="quickview-image"
								alt={imageAlt}
							/>
						</div>
						<div className="label">
							<div className="link-label">{label}</div>
						</div>
						<div className="arrow-wrapper">
							<img
								className="arrow"
								alt="right-arrow"
								src={"/static/fatArrowRightBlackx128.png"}
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
				.link-label {
					font-size: 2rem;
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
					text-decoration: none;
				}

				.link-button {
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
					background: #fefefe;
				}
				.scroll-text {
					font-size: 1.2rem;
					font-weight: 400;
					color: ${theme.secondary};
					font-family: ${theme.font};
					text-transform: capitalize;
					margin: 1rem 0;
				}
				@media only screen and (max-width: 450px) {
					.arrow {
						width: 60%;
					}
					.img-wrapper {
						height: 100%;
						width: 40%;
						display: flex;
						padding-left: 0.25rem;
					}
					.link-button {
						padding: 0rem;
						margin: 1.2rem 0rem 0rem 0rem;
					}
					.link-label {
						font-size: 1.6rem;
						text-align: center;
					}
					.quickview-image {
						width: 100%;
					}
					.scroll-text {
						margin: 0.1rem 0;
					}
				}
			`}</style>
		</div>
	);
};

SlideLinkButton.defaultProps = {
	href: "/newsletter",
};
SlideLinkButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
	imageAlt: PropTypes.String,
	srcset: PropTypes.array,
};

export default SlideLinkButton;
