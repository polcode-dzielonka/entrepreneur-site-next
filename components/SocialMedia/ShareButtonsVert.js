import { memo } from "react";
import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";
import SocialSvgFactory from "./utils/svgFactory";
const VerticalShareButtons = ({
	data,
	url,
	image,
	headline,
	brief,
	handle,
	hashtag,
	facebookQuote,
}) => {
	const options = {
		facebook: {
			quote: facebookQuote,
		},
		twitter: {
			title: brief,
			via: handle,
			hastags: [hashtag],
		},
		LinkedIn: {},
		Email: {
			subject: headline,
			body: brief,
			separator: ":- ",
		},
		Pinterest: {
			media: image,
			description: brief,
		},
		Whatsapp: {
			title: headline,
		},
	};
	return (
		<div className="button-vertical-container">
			<div className="button-container">
				{data.map((button, index) => {
					const { ShareButton, ShareCount } = button;
					return (
						<ShareButton
							className={"indiv-button"}
							style={{
								width: button.height,
								backgroundColor: button.secondaryColor,
							}}
							url={url}
							key={index}
							{...options[button.name]}
						>
							<div className="button-content">
								<SocialSvgFactory button={button} />
								<span className="button-text">{button.text}</span>
								{ShareCount && <ShareCount className="share-count" />}
							</div>
						</ShareButton>
					);
				})}
			</div>

			<style jsx>
				{`
					button {
						border: none;
						outline: none;
						transition: all 0.15s ease;
						align-items: center;
						margin: 0.1rem;
						border-radius: 4px;
					}
					button:hover {
						filter: brightness(120%);
					}
					.button-container {
						margin: 1rem 0rem;
						width: 100%;
						display: flex;
						flex-direction: column;
					}
					.button-content {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin: 0 auto;
						width: 100%;
					}
					.button-vertical-container {
						position: fixed;
						left: 0.5%;
						top: 30%;
						z-index: 50;
					}
					.indiv-button {
						width: 100%;
						border-radius: 4px;
					}

					.button-text {
						text-transform: uppercase;
						color: #fff;
						font-size: 1.1rem;
						font-family: ${theme.font};
					}
					.share-count {
						color: white;
						padding-bottom: 0.3rem;
						font-size: 0.7rem;
					}
					@media only screen and (min-width: 760px) and (max-width: 1267px) {
						.button-vertical-container {
							display: none;
						}
					}

					@media only screen and (max-width: 760px) {
						button:hover {
							opacity: 1;
						}
						.button-text {
							display: none;
						}

						.button-vertical-container {
							left: 0;
							bottom: 0;
							width: 100%;
							text-align: center;
							top: 92%;
						}
						.button-content {
							margin: 0 auto;
							text-align: center;
							width: 100%;
						}
						.button-container {
							flex-direction: row;
						}
						.indiv-button {
							width: ${100 / data.length - 1}%;
							margin: 0 auto;
						}
					}
				`}
			</style>
		</div>
	);
};

VerticalShareButtons.propTypes = {
	data: PropTypes.array,
	url: PropTypes.string,
	image: PropTypes.string,
	headline: PropTypes.string,
	brief: PropTypes.string,
	handle: PropTypes.string,
	hashtag: PropTypes.string,
	facebookQuote: PropTypes.string,
};
VerticalShareButtons.defaultProps = {
	data: PropTypes.array,
	image: process.env.SITE_IMAGE,
	handle: process.env.SITE_NAME,
	hashtag: `#${process.env.SITE_NAME}`,
	headline: process.env.SITE_NAME,
	brief: process.env.SITE_DESC,
	url: process.env.SITE_ADDRESS,
	facebookQuote: "",
};
export default memo(VerticalShareButtons);
