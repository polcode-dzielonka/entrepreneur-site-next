import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Ripple = props => {
	const { children, styling } = props;

	const [boxStyle, setBoxStyle] = useState({
		position: "relative",
		display: "inline-flex",
		overflow: "hidden",
		width: "100%",
		marginBottom: "20px",
		marginTop: "20px",
		...styling,
	});
	const [rippleStyles, setRippleStyle] = useState({
		rippleStyle: {
			position: "absolute",
			borderRadius: "50%",
			opacity: 0.5,
			width: 35,
			height: 35,
			transform: "translate(-50%, -50%)",
			pointerEvents: "none",
		},
	});
	const [timer, setTimer] = useState(false);
	const [size, setSize] = useState(0);

	useEffect(() => {
		const { during } = props;
		if (timer) {
			setTimeout(() => {
				setRippleStyle({
					rippleStyle: {
						...rippleStyles.rippleStyle,
						opacity: 0,
						transform: `scale(${size / 9})`,
						transition: `all ${during}ms`,
					},
				});
			}, 50);
			setTimer(false);
			setSize(0);
		}
	}, [timer]);

	const onClick = ev => {
		const { color, buttonClick } = props;
		ev.stopPropagation();

		const { pageX, pageY, currentTarget } = ev;

		const rect = currentTarget.getBoundingClientRect();

		const left = pageX - (rect.left + window.scrollX);
		const top = pageY - (rect.top + window.scrollY);
		const buttonSize = Math.max(rect.width, rect.height);
		setSize(buttonSize);
		setTimer(true);
		setRippleStyle({
			rippleStyle: {
				...rippleStyles.rippleStyle,
				left,
				top,
				opacity: 0.5,
				transform: "translate(-50%, -50%)",
				transition: "initial",
				backgroundColor: color,
			},
		});

		if (buttonClick) buttonClick(ev);
	};
	return (
		<div
			{...props}
			className={`react-ripples`}
			style={boxStyle}
			onClick={onClick}
		>
			{children}
			<s style={rippleStyles.rippleStyle} />
		</div>
	);
};
Ripple.propTypes = {
	children: PropTypes.Object,
	color: PropTypes.String,
	buttonClick: PropTypes.Func,
	during: PropTypes.Int,
	styling: PropTypes.Object,
};

Ripple.defaultProps = {
	color: "rgba(0, 0, 0, .3)",
	buttonClick: () => {},
	during: 1200,
	styling: {},
};
export default Ripple;
