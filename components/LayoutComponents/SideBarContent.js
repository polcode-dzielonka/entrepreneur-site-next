import { Fragment } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import sideHelper from "../helper/sideBarHelper";
import SideBarComponent from "./SideBar/SideBarComponent";
const AdWrapper = dynamic(() => import("../ads/adWrapper"), {
	ssr: false,
});
import {
	AMAZON_AD_CODE,
	AMAZON_KINDLE_CODE_SQUARE,
} from "../ads/code/amazonBusiness";
const SideBarContent = ({ data, type, showAd = false }) => {
	return (
		<>
			{showAd && <AdWrapper adCode={AMAZON_AD_CODE} />}

			{data.map((article, index) => {
				const {
					headlineImage,
					headlineImageAlt,
					headlineImagePath,
					headlineImageCrop,
					headlineImageCropInfo,
					headline,
					category,
					refPath,
					contentLink,
				} = sideHelper(article, type);

				return (
					<Fragment key={index}>
						{index === 2 && showAd && (
							<AdWrapper adCode={AMAZON_KINDLE_CODE_SQUARE} />
						)}
						<SideBarComponent
							type={type}
							headlineImage={headlineImage}
							headlineImageAlt={headlineImageAlt}
							headlineImagePath={headlineImagePath}
							headlineImageCrop={headlineImageCrop}
							headlineImageCropInfo={headlineImageCropInfo}
							headline={headline}
							category={category}
							refPath={refPath}
							contentLink={contentLink}
						/>
					</Fragment>
				);
			})}
			{showAd && <AdWrapper adCode={AMAZON_AD_CODE} />}
		</>
	);
};
export default SideBarContent;

SideBarContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
	type: PropTypes.string,
};
