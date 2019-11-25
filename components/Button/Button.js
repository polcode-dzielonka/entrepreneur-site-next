import { theme } from "../../theme/baseCss";
import PropTypes from "prop-types";
import Ripples from "./Ripples";

const RippleButton = ({
	loading,
	handler,
	label,
	color,
	rippleColor,
	hoverColor,
	type,
}) => {
	return (
		<Ripples color={rippleColor}>
			<button
				onClick={handler}
				type={type}
				disabled={loading}
				className="button"
			>
				<div className="submit-button">{label}</div>
				<style jsx>{`
					.react-ripples {
						width: 100%;
						content: "";
					}
					button {
						width: 100%;
						height: 2.5rem;
						background-color: ${color};
						cursor: pointer;
						position: relative;
						border: none;
					}
					.button:focus {
						outline: none;
					}
					.button:hover {
						background-color: ${hoverColor};
					}

					.submit-button {
						font-family: ${theme.font};
						font-size: 2em;
						font-weight: 700;
						width: 100%;
						color: #fefefe;
						text-transform: uppercase;
					}
					.submit-button:hover {
						background-color: ${hoverColor};
					}
					.submit-button:focus {
						outline: none;
					}
				`}</style>
			</button>
		</Ripples>
	);
};
RippleButton.defaultProps = {
	rippleColor: theme.rippleColor,
	color: theme.primary,
	hoverColor: theme.primary,
	handler: () => {},
	type: "button",
};
RippleButton.propTypes = {
	rippleColor: PropTypes.string,
	color: PropTypes.string,
	hoverColor: PropTypes.string,
	handler: PropTypes.func,
	loading: PropTypes.bool,
	label: PropTypes.string,
	type: PropTypes.string,
};

export default RippleButton;
