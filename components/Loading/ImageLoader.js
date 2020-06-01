import { useState } from "react";
import PropTypes from "prop-types";
export const config = { amp: "hybrid" };
import { useAmp } from "next/amp";
import loaderStyles from "./styles/imageLoaderStyles.module.sass";
const ImageLoader = ({
	src,
	alt,
	animation,
	styles,
	srcset,
	imageAltAttribution,
	imageAltAttributionLink,
	noMaxHeight,
}) => {
	const [classStyle, setClassStyle] = useState(
		animation ? "imgLoadingAnimation" : "imgLoading",
	);
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
				<img
					src={src}
					alt={alt}
					style={styles}
					className={loaderStyles.classStyle}
					onLoad={onLoad}
					srcSet={srcset}
					sizes="350px"
				/>
			)}
			{isAmp && (
				<amp-img
					src={src}
					alt={alt}
					style={styles}
					className={loaderStyles.classStyle}
					onLoad={onLoad}
					srcSet={srcset}
					sizes="350px"
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
	srcset: PropTypes.array,
	imageAltAttribution: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	noMaxHeight: PropTypes.boolean,
};

ImageLoader.defaultProps = {
	isAmp: false,
};
