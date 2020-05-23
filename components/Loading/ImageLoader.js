import { useState } from "react";
import PropTypes from "prop-types";
export const config = { amp: "hybrid" };
import { useAmp } from "next/amp";

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
		animation ? "img-loading-animation" : "img-loading",
	);
	const isAmp = useAmp();

	const onLoad = () => {
		setClassStyle(animation ? "img-loading-with-animation" : "img-loaded");
	};
	return (
		<>
			{!isAmp && (
				<img
					src={src}
					alt={alt}
					style={styles}
					className={classStyle}
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
					className={classStyle}
					onLoad={onLoad}
					srcSet={srcset}
					sizes="350px"
				/>
			)}
			{imageAltAttribution && (
				<span>
					<a
						href={imageAltAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Credit:{imageAltAttribution}
					</a>
				</span>
			)}
			<style jsx>{`
				a {
					font-size: 1rem;
					text-decoration: none;
					float: right;
				}
				@keyframes fadeInImg {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.img-loading {
					width: 100%;
					height: 100%;
					// height: 100%;
					background: #f4f4f4;
				}
				.img-loading-animation {
					width: 100%;
					height: 550px;
					background: #f4f4f4;
					opacity: 0;
				}
				.img-loading-with-animation {
					opacity: 0;
					width: 100%;
					max-height: 550px;
					animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
					animation-fill-mode: forwards;
					animation-duration: 0.7s;
					animation-delay: 0.1s;
					position: relative;
				}
				.img-loaded {
					position: relative;
					width: 100%;
					max-height: ${noMaxHeight ? null : "550px"};
					object-fit: cover;
				}

				@media only screen and (max-width: 450px) {
					.img-loading {
						width: 100%;
						height: 250px;
						// height: 100%;
						background: #f4f4f4;
					}
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
