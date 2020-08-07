import PropTypes from "prop-types";
import SideBarSmallComponent from "./SideBar/SideBarSmallComponent";
import sideHelper from "../helper/sideBarHelper";
const SideBarSmallContent = ({ data, type }) => {
	return data.map((content, index) => {
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
	});
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
