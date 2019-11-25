import { theme } from "../../../../../theme/baseCss";
import PropTypes from "prop-types";
import Link from "next/link";

const NextLink = ({ brief, headline, image, url }) => {
	return (
		<div className="link-section">
			<div className="scroll-text">Next:</div>
			<div className="link-button">
				<Link href={url}>
					<a className="quickview-link">
						<div className="img-wrapper">
							<img src={image} className="quickview-image" />
						</div>
						<div className="label">
							<div className="link-label">{headline}</div>
							<div className="link-label-brief">{brief}</div>
						</div>

						<div className="arrow-wrapper">
							<img className="arrow" src={"/static/right-arrow.svg"} />
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
				}
				.link-label-brief:hover {
					color: ${theme.primary};
				}
				.link-label {
					font-size: 2rem;
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
			`}</style>
		</div>
	);
};

NextLink.defaultProps = {
	url: "/",
};
NextLink.propTypes = {
	brief: PropTypes.String,
	headline: PropTypes.String,
	image: PropTypes.String,
	url: PropTypes.String,
};

export default NextLink;
