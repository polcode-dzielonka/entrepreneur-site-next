import { PropTypes } from "prop-types";
const MenuButton = ({ open, onClick }) => {
	const styles = {
		container: {
			height: "32px",
			width: "32px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
			padding: "16px",
		},
		line: {
			height: "2px",
			width: "20px",
			background: "white", //"this.state.color",
			transition: "all 0.2s ease",
		},
		lineTop: {
			transform: open ? "rotate(45deg)" : "none",
			transformOrigin: "top left",
			marginBottom: "5px",
		},
		lineMiddle: {
			opacity: open ? 0 : 1,
			transform: open ? "translateX(-16px)" : "none",
		},
		lineBottom: {
			transform: open ? "translateX(-1px) rotate(-45deg)" : "none",
			transformOrigin: "top left",
			marginTop: "5px",
		},
	};
	return (
		<div style={styles.container} onClick={onClick} className="menu-button">
			<div style={{ ...styles.line, ...styles.lineTop }} />
			<div style={{ ...styles.line, ...styles.lineMiddle }} />
			<div style={{ ...styles.line, ...styles.lineBottom }} />
			<style jsx>
				{`
					@media only screen and (min-width: 1001px) {
						display: none;
					}
				`}
			</style>
		</div>
	);
};

MenuButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	open: PropTypes.Boolean,
};

export default MenuButton;
