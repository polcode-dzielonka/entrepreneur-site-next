import PropTypes from "prop-types";
import Ripples from "./Ripples";
import styles from "./styles/buttonStyles.module.sass";
import baseTheme from "../../theme/baseTheme.json";
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
				className={`${styles.button} ripple-button`}
			>
				<div className={`${styles.submitButton} ripple-button-label`}>
					{label}
				</div>
				<style jsx>{`
					.ripple-button {
						background-color: ${color};
					}
					.ripple-button:hover {
						background-color: ${hoverColor};
					}
					.ripple-button-label:hover {
						background-color: ${hoverColor};
					}
				`}</style>
			</button>
		</Ripples>
	);
};
RippleButton.defaultProps = {
	rippleColor: baseTheme.rippleColor,
	color: baseTheme.primary,
	hoverColor: baseTheme.primary,
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
