import React, { useEffect, useState, useRef, memo } from "react";
import SingleSocialLoader from "../Loading/SingleSocialLoader";
import dynamic from "next/dynamic";
import ImageLoader from "../Loading/ImageLoader";
import embedStyles from "./styles/embedStyles.module.sass";
const EmbedUrl = ({
	embed,
	image,
	imageAlt,
	imageAltAttribution,
	imageAltAttributionLink,
	imagePath,
	imageCrop,
	imageCropInfo,
	styles,
	noMaxHeight,
}) => {
	const Embedo = dynamic(() => import("./embedo/Embed"), {
		ssr: false,
		loading: () => <SingleSocialLoader />,
	});
	return (
		<>
			{!embed && (
				<ImageLoader
					src={image}
					alt={imageAlt ? imageAlt : imageAltAttribution}
					imagePath={imagePath}
					animation={false}
					styles={styles}
					noMaxHeight={noMaxHeight}
					imageCrop={imageCrop}
					imageCropInfo={imageCropInfo}
				/>
			)}
			{embed && (
				<Embedo
					source={image}
					height="550px"
					imageAltAttribution={imageAltAttribution}
					imageAltAttributionLink={imageAltAttributionLink}
				/>
			)}
			{imageAltAttribution && (
				<span>
					<a
						className={embedStyles.embedImageAlt}
						href={imageAltAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Credit:{imageAltAttribution}
					</a>
				</span>
			)}
		</>
	);
};

export default memo(EmbedUrl);
