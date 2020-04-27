import React, { useEffect, useState } from "react";
import ClassicQuote from "./classic/classicQuote";
import BlockQuote from "./block/blockQuote";
import ElegantQuote from "./elegant/elegantQuote";

const Quote = ({ attributes, element, children }) => {
	const { data } = element;
	const [quote, setQuote] = useState({
		quote: "",
		additionalQuote: "",
		author: "",
		quoteImage: "",
		styleQuote: "classic",
	});

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		handleEmbed();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleEmbed = () => {
		const quote = data.quote;
		const addQuote = data.additionalQuote;
		const author = data.author;
		const image = data.quoteImage;
		const style = data.quoteStyle ? data.quoteStyle : "classic";
		setQuote({
			quote,
			additionalQuote: addQuote,
			author,
			quoteImage: image,
			styleQuote: style,
		});
	};

	// const onChange = e => {
	// 	const embed = e.target.value;
	// 	const { node, editor } = this.props;
	// 	editor.setNodeByKey(node.key, { data: { embed } });
	// };

	switch (quote.styleQuote) {
		case "classic":
			return <ClassicQuote {...attributes} {...children} quote={quote} />;
		case "block":
			return <BlockQuote {...attributes} {...children} quote={quote} />;
		case "elegant":
			return <ElegantQuote {...attributes} {...children} quote={quote} />;
		default:
			return <BlockQuote {...attributes} {...children} quote={quote} />;
	}
};

export default Quote;
