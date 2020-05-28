import { memo } from "react";
import PropTypes from "prop-types";
import SocialSvgFactory from "./utils/svgFactory";
import createUtm from "../utm/createUtm";

const HorizontalShareButtons = ({
	data,
	url,
	image,
	headline,
	brief,
	handle,
	hashtag,
	facebookQuote,
	position,
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
	const utmOptions = {
		facebook: {
			originalUrl: url,
			campaignSource: "facebook",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
		twitter: {
			originalUrl: url,
			campaignSource: "twitter",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
		LinkedIn: {
			originalUrl: url,
			campaignSource: "linkedin",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
		Email: {
			originalUrl: url,
			campaignSource: "email",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
		Pinterest: {
			originalUrl: url,
			campaignSource: "pinterest",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
		Whatsapp: {
			originalUrl: url,
			campaignSource: "whatsapp",
			campaignMedium: "shared_link",
			campaignName: "organic",
			campaignContent: position,
		},
	};
	return (
		<div className="button-container">
			{data.map((button, index) => {
				const { ShareButton } = button;
				return (
					<ShareButton
						className="indiv-button"
						style={{
							width: button.width,
							backgroundColor: button.secondaryColor,
						}}
						url={createUtm(utmOptions[button.name])}
						key={index}
						{...options[button.name]}
					>
						<div className="button-content">
							<SocialSvgFactory button={button} />
							<span className="button-text">{button.text}</span>
						</div>
					</ShareButton>
				);
			})}
			<style jsx>
				{`
					button {
						border: none;
						outline: none;
						transition: all 0.15s ease;
						align-items: center;
						margin: 0.1rem;
						border-radius: 4px;
						padding: 0rem 1rem;
					}
					button:hover {
						filter: brightness(120%);
					}

					.button-container {
						margin: 1rem 0rem;
						height: 100%;
						display: flex;
						flex-direction: row;
					}
					.button-content {
						display: flex;
						flex-direction: row;
						align-items: center;
						margin: 0 auto;
					}
					.button-text {
						text-transform: uppercase;
						color: #fff;
						font-size: 1.1rem;
						font-family: ${theme.font};
					}
					.indiv-button {
						width: 20%;
					}

					@media only screen and (max-width: 760px) {
						.button-text {
							display: none;
						}
					}
					@media only screen and (max-width: 450px) {
						.button-text {
							display: none;
						}
					}
				`}
			</style>
		</div>
	);
};

HorizontalShareButtons.propTypes = {
	data: PropTypes.array,
	url: PropTypes.string,
	image: PropTypes.string,
	headline: PropTypes.string,
	brief: PropTypes.string,
	handle: PropTypes.string,
	hashtag: PropTypes.string,
	facebookQuote: PropTypes.string,
	position: PropTypes.String,
};
HorizontalShareButtons.defaultProps = {
	data: PropTypes.array,
	image: process.env.SITE_IMAGE,
	handle: process.env.SITE_NAME,
	hashtag: `#${process.env.SITE_NAME}`,
	headline: process.env.SITE_NAME,
	brief: process.env.SITE_DESC,
	url: process.env.SITE_ADDRESS,
	facebookQuote: "",
};
export default memo(HorizontalShareButtons);
