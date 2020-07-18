import { useState } from "react";
import PropTypes from "prop-types";
export const config = { amp: "hybrid" };
import { useAmp } from "next/amp";
import loaderStyles from "./styles/imageLoaderStyles.module.sass";
import CloudImage from "../Image/cloudImage";
import { getImagePath } from "../helper/imageUrlHelper";
const ImageLoader = ({
	src,
	alt,
	animation,
	styles,
	imageAltAttribution,
	imageAltAttributionLink,
	imagePath,
	noMaxHeight,
}) => {
	const [classStyle, setClassStyle] = useState(
		animation ? "imgLoadingAnimation" : "imgLoading",
	);
	const imageCheck = imagePath || src.indexOf("content-factory-media") > 1;

	const isAmp = useAmp();

	const onLoad = () => {
		setClassStyle(
			animation
				? "imgLoadingWithAnimation"
				: `${loaderStyles.imgLoaded} img-loaded`,
		);
	};
	return (
		<>
			{!isAmp && (
				<div className={loaderStyles[classStyle]}>
					{imageCheck && (
						<CloudImage
							imagePath={imagePath ? imagePath : getImagePath(src)}
							imageAlt={alt}
							layout={"content"}
							onLoad={onLoad}
						/>
					)}
					{!imageCheck && (
						<img src={src} alt={alt} style={styles} onLoad={onLoad} />
					)}
				</div>
			)}
			{isAmp && (
				<amp-img
					src={src}
					alt={alt}
					style={styles}
					className={loaderStyles.classStyle}
					onLoad={onLoad}
				/>
			)}
			{imageAltAttribution && (
				<span>
					<a
						className={styles.imageLink}
						href={imageAltAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Credit:{imageAltAttribution}
					</a>
				</span>
			)}
			<style jsx>{`
				.img-loaded {
					max-height: ${noMaxHeight ? null : "550px"};
				}
			`}</style>
		</>
	);
};

export default ImageLoader;
ImageLoader.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	animation: PropTypes.boolean,
	styles: PropTypes.object,
	imagePath: PropTypes.string,
	imageAltAttribution: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	noMaxHeight: PropTypes.boolean,
};

ImageLoader.defaultProps = {
	isAmp: false,
};
