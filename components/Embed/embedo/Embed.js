import React, { useRef, useEffect, useState } from "react";
import Embedo from "./embedo";
import PropTypes from "prop-types";

const EmbedUrl = ({ source, height }) => {
	const embedoContainer = useRef(null);

	useEffect(() => {
		Embedo.load(embedoContainer.current, source, { centerize: true })
			.done(() => {})
			.fail(err => {
				console.error("error", err);
			});
	}, []);

	return (
		<>
			<div
				className="embedo"
				target="_blank"
				rel="noopener noreferrer"
				ref={embedoContainer}
			/>
		</>
	);
};
EmbedUrl.propTypes = {
	source: PropTypes.String,
	height: PropTypes.String,
};

export default EmbedUrl;
