import React, { useEffect, useState } from "react";
import ImageLoader from "../../../../Loading/EditorImageLoader";
import styles from "../styles/embedImage/embedImageStyles.module.sass";
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
		<div {...attributes} className={styles.embedWrapper}>
			<ImageLoader
				src={embedImage.imageUrl}
				alt={embedImage.imageAlt}
				animation={true}
				srcset={embedImage.srcset}
				sizes="330px"
				noMaxHeight={true}
			/>
			{children}
			{embedImage.imageAttribution && (
				<span>
					<a
						href={embedImage.imageAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.embed}
					>
						Credit:{embedImage.imageAttribution}
					</a>
				</span>
			)}
			<span className={styles.comment}>{embedImage.imageComment}</span>
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
