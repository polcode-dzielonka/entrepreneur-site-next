import React, { useEffect, useState } from "react";
import ImageLoader from "../../../../Loading/ImageLoader";

const EmbedImage = props => {
	const { attributes, node, children } = props;
	const { data } = node;
	const [embedImage, setEmbedImageUrl] = useState({
		imageUrl: "",
		imageAlt: "",
		imageAttribution: "",
		imageAttributionLink: "",
	});

	useEffect(() => {
		handleImageEmbed();
	}, []);

	const handleImageEmbed = () => {
		const embedImageUrl = data.get("imageUrl");
		const embedImageAlt = data.get("imageAlt");
		const embedImageAttribution = data.get("imageAttribution");
		const embedImageAttributionLink = data.get("imageAttributionLink");
		setEmbedImageUrl({
			imageUrl: embedImageUrl,
			imageAlt: embedImageAlt,
			imageAttribution: embedImageAttribution,
			imageAttributionLink: embedImageAttributionLink,
		});
	};

	return (
		<div
			{...attributes}
			style={{
				display: "block",
				width: "100%",
				margin: "0 auto",
			}}
		>
			<ImageLoader
				src={embedImage.imageUrl}
				alt={embedImage.imageAlt}
				animation={true}
			/>
			{children}
			<span>{embedImage.imageCaption}</span>
		</div>
	);
};

export default EmbedImage;
