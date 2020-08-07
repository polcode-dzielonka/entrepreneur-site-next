import React from "react";
import params from "./layout";
import { newImageUrl } from "../helper/imageUrlHelper";
import styles from "./styles/cloudStyles.module.sass";

const CloudImageComponent = ({
	imagePath,
	imageAlt,
	layout,
	onLoad,
	imageCrop,
	imageCropInfo,
}) => {
	const cloudfrontUrl = newImageUrl(imagePath);
	const layoutParams = params[layout] ? params[layout] : params["content"];
	return (
		<figure className={styles.cloudWrapper}>
			<picture>
				{layoutParams.map(imageProps => {
					let cropParams = null;

					if (imageCrop && imageCropInfo) {
						const parsedInfo = imageCropInfo; //JSON.parse(imageCropInfo);
						cropParams = {
							crop: imageCrop,
							x: (parsedInfo.x, 2).toFixed(2),
							y: (parsedInfo.y, 2).toFixed(2),
							aspect: parsedInfo.aspect ? parsedInfo.aspect.toFixed(2) : 1.7,
						};
					}
					const parameterList = {
						...imageProps.imageParams,
						...cropParams,
					};
					const parameterUrl = Object.keys(parameterList)
						.map(key => `${key}=${parameterList[key]}`)
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
					className={styles.baseImage}
					alt={imageAlt}
					src={cloudfrontUrl}
					onLoad={onLoad}
				/>
			</picture>
		</figure>
	);
};

export default CloudImageComponent;
