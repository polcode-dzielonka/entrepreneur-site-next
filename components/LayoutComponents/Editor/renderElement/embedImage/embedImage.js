import React, { useEffect, useState } from "react";
import ImageLoader from "../../../../Loading/ImageLoader";

const EmbedImage = ({ attributes, element, children }) => {
	const { data } = element;
	const [embedImage, setEmbedImageUrl] = useState({
		imageUrl: "",
		imageAlt: "",
		imageAttribution: "",
		imageAttributionLink: "",
		srcset: [],
	});

	useEffect(() => {
		handleImageEmbed();
	}, []);

	const handleImageEmbed = () => {
		const embedImageUrl = data.imageUrl;
		const embedImageAlt = data.imageAlt;
		const embedImageAttribution = data.imageAttribution;
		const embedImageAttributionLink = data.imageAttributionLink;
		const embedImageSrcset = data.srcset ? data.srcset : [];

		setEmbedImageUrl({
			imageUrl: embedImageUrl,
			imageAlt: embedImageAlt,
			imageAttribution: embedImageAttribution,
			imageAttributionLink: embedImageAttributionLink,
			srcset: embedImageSrcset,
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
				srcset={embedImage.srcset}
				sizes="330px"
			/>
			{children}
			<span>{embedImage.imageCaption}</span>
		</div>
	);
};

EmbedImage.defaultProps = {
	element: {
		data: {
			url: "",
			imageAlt: "",
			imageAttribution: "",
			imageAttributionLink: "",
		},
	},
};
export default EmbedImage;
