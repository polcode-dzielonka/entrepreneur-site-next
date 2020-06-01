import { useState } from "react";
import PropTypes from "prop-types";
export const config = { amp: "hybrid" };
import { useAmp } from "next/amp";
import loadStyles from "./styles/editorImageLoaderStyles.module.sass";
const ImageLoader = ({ src, alt, animation, styles, srcset }) => {
	const [classStyle, setClassStyle] = useState(
		animation ? "imgLoadingAnimation" : "imgLoading",
	);
	const isAmp = useAmp();

	const onLoad = () => {
		setClassStyle(animation ? "imgLoadingWithAnimation" : "imgLoaded");
	};
	return (
		<>
			{!isAmp && (
				<img
					src={src}
					alt={alt}
					style={styles}
					className={loadStyles[classStyle]}
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
					className={loadStyles[classStyle]}
					onLoad={onLoad}
					srcSet={srcset}
					sizes="350px"
				/>
			)}
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
};

ImageLoader.defaultProps = {
	isAmp: false,
};
