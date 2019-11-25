import { PropTypes } from "prop-types";
const CrossIcon = ({ onClick }) => {
	const styles = {
		container: {
			height: "16px",
			width: "16px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			margin: "0 auto",
			cursor: "pointer",
			padding: "16px",
		},
		line: {
			height: "2px",
			width: "20px",
			background: "white",
			margin: "0 auto",

			transition: "all 0.2s ease",
		},
		lineTop: {
			transform: "rotate(45deg)",
			transformOrigin: "top left",
			marginBottom: "5px",
		},
		lineMiddle: {
			opacity: 0,
			transform: "translateX(-16px)",
		},
		lineBottom: {
			transform: "translateX(-1px) rotate(-45deg)",
			transformOrigin: "top left",
			marginTop: "5px",
		},
	};
	return (
		<div style={styles.container} onClick={onClick} className="menu-button">
			<div style={{ ...styles.line, ...styles.lineTop }} />
			<div style={{ ...styles.line, ...styles.lineMiddle }} />
			<div style={{ ...styles.line, ...styles.lineBottom }} />
		</div>
	);
};

CrossIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	open: PropTypes.Boolean,
};

export default CrossIcon;
