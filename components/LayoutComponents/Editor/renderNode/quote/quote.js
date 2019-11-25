import React, { useEffect, useState } from "react";
import { topLevelQuote } from "./quoteStyles";
import InstaQuote from "./instagram/instaQuote";
import ElectricQuote from "./electric/electricQuote";
import ShrimpyQuote from "./shrimpy/shrimpyQuote";
import NormalQuote from "./normal/normalQuote";
const Quote = props => {
	const { attributes, node, children } = props;
	const { data } = node;
	const [quote, setQuote] = useState({
		quote: "",
		additionalQuote: "",
		author: "",
		quoteImage: "",
		styleQuote: "instagram",
	});

	useEffect(() => {
		handleEmbed();
	}, []);

	const handleEmbed = () => {
		const quote = data.get("quote");
		const addQuote = data.get("additionalQuote");
		const author = data.get("author");
		const image = data.get("quoteImage");
		const style = data.get("quoteStyle") ? data.get("quoteStyle") : "instagram";
		setQuote({
			quote,
			additionalQuote: addQuote,
			author,
			quoteImage: image,
			styleQuote: style,
		});
	};

	switch (quote.styleQuote) {
		case "instagram":
			return <InstaQuote {...props} quote={quote} />;
		case "electric":
			return <ElectricQuote {...props} quote={quote} />;
		case "normal":
			return <NormalQuote {...props} quote={quote} />;
		case "shrimpy":
			return <ShrimpyQuote {...props} quote={quote} />;
		default:
			return <div {...attributes}>{children}</div>;
	}
};

export default Quote;
