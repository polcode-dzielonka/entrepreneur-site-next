import { useState, useEffect } from "react";
import Arrow from "./Arrow";
import styles from "./styles/scrollUpStyles.module.sass";
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
				<button className={styles.scrollUp} onClick={handleScrollUp}>
					<Arrow fillColor="#fefefe" />
				</button>
			)}
		</>
	);
};
export default ScrollUpButton;
