import { PropTypes } from "prop-types";
import menuStyles from "../styles/menuButtonStyles.module.sass";

const MenuButton = ({ open, onClick }) => {
	return (
		<div onClick={onClick} className={menuStyles.container}>
			<div className={`${menuStyles.line} ${menuStyles.lineTop} line-top`} />
			<div className={`${menuStyles.line} line-middle`} />
			<div
				className={`${menuStyles.line} ${menuStyles.lineBottom} line-bottom`}
			/>
			<style jsx>
				{`
					.line-top {
						transform: ${open ? "rotate(45deg)" : "none"};
					}
					.line-middle {
						opacity: ${open ? 0 : 1};
						transform: ${open ? "translateX(-16px)" : "none"};
					}
					.line-bottom {
						transform: ${open ? "translateX(-1px) rotate(-45deg)" : "none"};
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
