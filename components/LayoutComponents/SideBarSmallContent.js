import PropTypes from "prop-types";
import SideBarSmallComponent from "./SideBar/SideBarSmallComponent";
import sideHelper from "../helper/sideBarHelper";
import dynamic from "next/dynamic";
import Adsense from "../ads/code/adsense/adsense";
const AdWrapper = dynamic(() => import("../ads/adWrapper"), {
	ssr: false,
});
const SideBarSmallContent = ({
	data,
	type,
	showAd = false,
	adCode,
	limit = 0,
	cpcAd,
}) => {
	const slicedData = limit > 0 ? data.slice(0, limit) : data;
	return (
		<>
			{slicedData.map((content, index) => {
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
			{showAd && !cpcAd && (
				<Adsense
					sticky={true}
					client="ca-pub-2068760522034474"
					slot="5182944308"
				/>
			)}
			{cpcAd && <AdWrapper adCode={cpcAd.displayAd} sticky={true} />}
		</>
	);
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
