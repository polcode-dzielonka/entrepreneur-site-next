import { theme } from "../../theme/baseCss";
import PropTypes from "prop-types";
import Link from "next/link";
const SlideLinkButton = ({
	label,
	href,
	imgSrc,
	handler,
	srcset,
	imageAlt,
}) => {
	return (
		<div className="link-section">
			<button className="link-button" onClick={handler}>
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
							<div className="link-label">{label} </div>
						</div>
						<div className="arrow-wrapper">
							<img
								className="arrow"
								src={"/static/fatArrowRightWhitex128.png"}
								alt="right-arrow"
							/>
						</div>
					</a>
				</Link>
			</button>
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
					padding: 2rem;
					position: relative;
					border: 1px solid rgba(51, 51, 51, 0.15);
					padding: 1.5rem;
					border-radius: 3px;
					text-decoration: none;
					margin: 1rem 0rem;
					display: flex;
					flex-direction: row;
					margin: 0 auto;
					width: 100%;
				}
				.link-section {
					text-align: center;
					width: 100%;
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
					color: #fefefe;
					font-family: ${theme.font};
					text-transform: uppercase;
					width: 100%;
					border-radius: 3px;
					background: ${theme.secondary};
					box-shadow: 0 1px 4px 2px rgba(16, 16, 16, 0.15);
					overflow: hidden;
					transition: all 0.2s ease;
					padding: 1rem 0rem;
				}
				.quickview-link:hover {
					background: ${theme.primary};
				}

				.scroll-text {
					font-size: 1.2rem;
					font-weight: 400;
					color: ${theme.secondary};
					font-family: ${theme.font};
					text-transform: capitalize;
					margin: 1rem 0;
				}
				@media only screen and (max-width: 670px) {
					.link-section {
						margin: 1.5rem 0;
					}
				}
				@media only screen and (max-width: 450px) {
					.arrow {
						width: 60%;
					}
					.img-wrapper {
						height: 100%;
						width: 40%;
						display: flex;
						padding-left: 0.75rem;
					}
					.link-button {
						padding: 0rem;
						margin: 1.2rem 0rem 0rem 0rem;
					}
					.link-label {
						font-size: 1.6rem;
						text-align: center;
					}
					.link-section {
						margin: 0rem 0rem 2rem 0rem;
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
	handler: () => {},
};
SlideLinkButton.propTypes = {
	href: PropTypes.String,
	label: PropTypes.String,
	imgSrc: PropTypes.String,
	imageAlt: PropTypes.String,
	handler: PropTypes.Func,
	srcset: PropTypes.Array,
};

export default SlideLinkButton;
