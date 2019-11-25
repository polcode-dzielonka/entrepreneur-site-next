import Head from "next/head";
import PropTypes from "prop-types";

const DynamicHeader = ({
	title,
	description,
	image,
	url,
	imageWidth,
	imageHeight,
	canonical,
	next,
	prev,
}) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="canonical" href={canonical} />
			{next && <link rel="next" href={next} />}
			{prev && <link rel="prev" href={prev} />}
			<meta name="description" content={description} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:url" content={url} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:image" content={image} />
			<meta name="og:url" content={url} />
			<meta name="og:image:width" content={imageWidth} />
			<meta name="og:image:height" content={imageHeight} />
		</Head>
	);
};

DynamicHeader.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	canonical: PropTypes.string,
	image: PropTypes.string,
	url: PropTypes.string,
	imageWidth: PropTypes.int,
	imageHeight: PropTypes.int,
	next: PropTypes.string,
	prev: PropTypes.string,
};
DynamicHeader.defaultProps = {
	imageWidth: 1024,
	imageHeight: 576,
	url: process.env.SITE_ADDRESS,
	canonical: process.env.SITE_ADDRESS,
	image: process.env.SITE_IMAGE,
	next: "",
	prev: "",
};
export default DynamicHeader;
