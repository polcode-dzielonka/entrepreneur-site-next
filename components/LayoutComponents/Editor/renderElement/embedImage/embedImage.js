import React, { useEffect, useState } from "react";
import ImageLoader from "../../../../Loading/EditorImageLoader";

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
		const embedImageComment = data.imageComment;
		setEmbedImageUrl({
			imageUrl: embedImageUrl,
			imageAlt: embedImageAlt,
			imageAttribution: embedImageAttribution,
			imageAttributionLink: embedImageAttributionLink,
			srcset: embedImageSrcset,
			imageComment: embedImageComment,
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
			{embedImage.imageAltAttribution && (
				<span>
					<a
						href={embedImage.imageAltAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Credit:{embedImage.imageAltAttribution}
					</a>
				</span>
			)}
			<span className="comment">{embedImage.imageComment}</span>
			<style jsx>
				{`
					a {
						font-size: 1rem;
						text-decoration: none;
						float: right;
					}
					.comment {
						font-size: 1rem;
						text-decoration: none;
						margin: 0;
						text-transform: capitalize;
					}
				`}
			</style>
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
