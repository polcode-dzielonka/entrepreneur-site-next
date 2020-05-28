import PropTypes from "prop-types";
import Ripples from "./Ripples";
import styles from "./styles/buttonStyles.module.sass";
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
				styles={{ backgroundColor: color }}
			>
				<div className={styles.submitButton}>{label}</div>
				<style jsx>{`
					.button:hover {
						background-color: ${hoverColor};
					}
					.submit-button:hover {
						background-color: ${hoverColor};
					}
				`}</style>
			</button>
		</Ripples>
	);
};
RippleButton.defaultProps = {
	rippleColor: "#FFAB66",
	color: "#ff4500",
	hoverColor: "#ff4500",
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
