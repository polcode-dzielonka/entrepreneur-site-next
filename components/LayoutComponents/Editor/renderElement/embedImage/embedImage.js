import React, { useEffect, useState } from "react";
import ImageLoader from "../../../../Loading/EditorImageLoader";
import styles from "../styles/embedImage/embedImageStyles.module.sass";
const EmbedImage = ({ attributes, element, children }) => {
	const { data } = element;
	const [embedImage, setEmbedImageUrl] = useState({
		imageUrl: "",
		imageAlt: "",
		imagePath: "",
		imageAttribution: "",
		imageAttributionLink: "",
	});
	useEffect(() => {
		handleImageEmbed();
	}, []);

	const handleImageEmbed = () => {
		const embedImageUrl = data.image;
		const embedImageAlt = data.imageAlt;
		const embedImagePath = data.imagePath;
		const embedImageAttribution = data.imageAttribution;
		const embedImageAttributionLink = data.imageAttributionLink;
		const embedImageComment = data.imageComment;
		setEmbedImageUrl({
			imageUrl: embedImageUrl,
			imageAlt: embedImageAlt,
			imageAttribution: embedImageAttribution,
			imageAttributionLink: embedImageAttributionLink,
			imagePath: embedImagePath,
			imageComment: embedImageComment,
		});
	};

	return (
		<div {...attributes} className={styles.embedWrapper}>
			<ImageLoader
				src={embedImage.imageUrl}
				alt={embedImage.imageAlt}
				imagePath={embedImage.imagePath}
				animation={true}
				sizes="330px"
				noMaxHeight={true}
				styles={{
					width: "100%",
					centerize: true,
				}}
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
			imagePath: "",
		},
	},
};
export default EmbedImage;
