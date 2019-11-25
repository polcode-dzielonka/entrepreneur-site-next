import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
const SectionBar = ({ title, titleColor, titleSize }) => {
	return (
		<>
			<div className="featured-content">
				<h1 className="section-title">
					<span>{title}</span>
				</h1>
			</div>

			<style jsx>
				{`
					.featured-content {
						width: 100%;
						margin: 0 auto;
						max-width: ${theme.contentMaxWidth};
					}
					.section-title {
						color: ${titleColor};
						font-size: ${titleSize};
						text-transform: uppercase;
						font-style: italic;
						letter-spacing: 1px;
						line-height: 0.75rem;
						padding: 0.5rem 0rem;
						white-space: nowrap;
						overflow: hidden;
						font-weight: 900;
					}
					.section-title:after {
						overflow: hidden;
						width: 100%;
						height: 3px;
						background: ${theme.primary};
						content: "";
						vertical-align: middle;
						margin-left: 0.75rem;
						padding-right: 0.75rem;
						display: inline-block;
					}

					@media only screen and (max-width: 1000px) {
						.section-title {
							margin: 2rem 0rem;
						}
						.featured-content {
							width: 97%;
						}
					}
				`}
			</style>
		</>
	);
};
export default SectionBar;

SectionBar.propTypes = {
	title: PropTypes.String,
	titleColor: PropTypes.String,
	titleSize: PropTypes.String,
};
