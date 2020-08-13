import PropTypes from "prop-types";
import SideBarSmallComponent from "./SideBar/SideBarSmallComponent";
import sideHelper from "../helper/sideBarHelper";
import dynamic from "next/dynamic";

const AdWrapper = dynamic(() => import("../ads/adWrapper"), {
	ssr: false,
});
const SideBarSmallContent = ({ data, type, showAd = false, adCode }) => {
	return (
		<>
			{data.map((content, index) => {
				const {
					headlineImage,
					headlineImageAlt,
					headlineImagePath,
					headlineImageCrop,
					headlineImageCropInfo,
					headline,
					category,
					urlDescription,
					refPath,
					contentLink,
				} = sideHelper(content, type);

				return (
					<SideBarSmallComponent
						key={index}
						type={type}
						headlineImage={headlineImage}
						headlineImageAlt={headlineImageAlt}
						headlineImagePath={headlineImagePath}
						headlineImageCrop={headlineImageCrop}
						headlineImageCropInfo={headlineImageCropInfo}
						headline={headline}
						category={category}
						url={urlDescription}
						refPath={refPath}
						contentLink={contentLink}
					/>
				);
			})}
			{showAd && <AdWrapper adCode={adCode} sticky={true} />}
		</>
	);
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
