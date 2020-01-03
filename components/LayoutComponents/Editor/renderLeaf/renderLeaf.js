import React from "react";
import PropTypes from "prop-types";
const renderLeaf = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	if (leaf.code) {
		children = <code>{children}</code>;
	}

	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	if (leaf.underline) {
		children = <u>{children}</u>;
	}

	if (leaf.strikethrough) {
		children = <del>{children}</del>;
	}
	return <span {...attributes}>{children}</span>;
};

export default renderLeaf;
renderLeaf.propTypes = {
	attributes: PropTypes.object,
	children: PropTypes.function,
	leaf: PropTypes.object,
};
