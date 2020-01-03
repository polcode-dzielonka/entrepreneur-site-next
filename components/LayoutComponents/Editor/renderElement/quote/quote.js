import React, { useEffect, useState } from "react";
import { topLevelQuote } from "./quoteStyles";
import InstaQuote from "./instagram/instaQuote";
import ElectricQuote from "./electric/electricQuote";
import ShrimpyQuote from "./shrimpy/shrimpyQuote";
import NormalQuote from "./normal/normalQuote";

const Quote = ({ attributes, element, children }) => {
	const { data } = element;
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
		const quote = data.quote;
		const addQuote = data.additionalQuote;
		const author = data.author;
		const image = data.quoteImage;
		const style = data.quoteStyle ? data.quoteStyle : "instagram";
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
			return <InstaQuote {...attributes} {...children} quote={quote} />;
		case "electric":
			return <ElectricQuote {...attributes} {...children} quote={quote} />;
		case "normal":
			return <NormalQuote {...attributes} {...children} quote={quote} />;
		case "shrimpy":
			return <ShrimpyQuote {...attributes} {...children} quote={quote} />;
		default:
			return <div {...attributes}>{children}</div>;
	}
};

export default Quote;
