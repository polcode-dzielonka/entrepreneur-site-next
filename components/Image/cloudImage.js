import React from "react";
import params from "./layout";
import { newImageUrl } from "../helper/imageUrlHelper";
const CloudImageComponent = ({ imagePath, imageAlt, layout, onLoad }) => {
	const cloudfrontUrl = newImageUrl(imagePath);

	const layoutParams = params[layout] ? params[layout] : params["content"];
	return (
		<figure
			style={{
				padding: 0,
				margin: 0,
				width: "100%",
				height: "100%",
			}}
		>
			<picture>
				{layoutParams.map(imageProps => {
					const parameterUrl = Object.keys(imageProps.imageParams)
						.map(key => `${key}=${imageProps.imageParams[key]}`)
						.join("&");

					return (
						<source
							srcSet={`${cloudfrontUrl}?${parameterUrl} ${Math.round(
								imageProps.imageParams.width * imageProps.ratio,
								0,
							)}w`}
							data-srcSet={`${cloudfrontUrl}?${parameterUrl} ${Math.round(
								imageProps.imageParams.width * imageProps.ratio,
								0,
							)}w`}
							type={`image/${imageProps.imageParams.format}`}
							sizes={imageProps.sizes}
							media={imageProps.media ? imageProps.media : null}
						/>
					);
				})}
				<img
					style={{
						display: "flex",
						height: "100%",
						width: "100%",
						objectFit: "fit",
					}}
					alt={imageAlt}
					src={cloudfrontUrl}
					onLoad={onLoad}
				/>
			</picture>
		</figure>
	);
};

export default CloudImageComponent;
