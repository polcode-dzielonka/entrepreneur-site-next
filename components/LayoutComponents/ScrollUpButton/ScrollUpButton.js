import { useState, useEffect } from "react";
import { theme } from "../../../theme/baseCss";
import Arrow from "./Arrow";

const ScrollUpButton = () => {
	const [scrollButton, setScrollButton] = useState(false);

	const handleScrollButton = () => {
		const rootNode = document.documentElement;
		const body = document.body;
		const top = "scrollTop";
		const height = "scrollHeight";
		const percentage =
			((rootNode[top] || body[top]) /
				((rootNode[height] || body[height]) - rootNode.clientHeight)) *
			100;

		if (percentage > 45) {
			setScrollButton(true);
		} else if (percentage <= 45) {
			setScrollButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollButton, { passive: true });
		handleScrollButton();

		return () => {
			window.removeEventListener("scroll", handleScrollButton);
		};
	}, []);

	const handleScrollUp = () => {
		setScrollButton(true);
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<>
			{scrollButton && (
				<button className="scroll-up" onClick={handleScrollUp}>
					<Arrow fillColor="#fefefe" />
				</button>
			)}
			<style jsx>{`
				button {
					background-color: ${theme.secondary};
					border: 4px solid ${theme.primary};
					width: 5rem;
					height: 5rem;
					margin: 0;
					opacity: 0.7;
				}
				button:focus {
					display: none;
				}
				.scroll-up {
					position: fixed;
					right: 3%;
					top: 70%;
					z-index: 100;
				}
				.up-arrow {
					background-color: red;
				}

				@media only screen and (max-width: 760px) {
					button {
						display: none;
					}
				}
			`}</style>
		</>
	);
};
export default ScrollUpButton;
