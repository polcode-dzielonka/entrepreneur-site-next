import PropTypes from "prop-types";

const SocialSvgFactory = ({ button }) => {
	return (
		<svg viewBox="0 0 64 64" width={64} height={64}>
			<g>
				<path d={button.icon} fill={button.primaryColor} />
				{button.secondaryIcon ? button.secondaryIcon : null}
			</g>
		</svg>
	);
};

SocialSvgFactory.propTypes = {
	button: PropTypes.object,
};
export default SocialSvgFactory;
