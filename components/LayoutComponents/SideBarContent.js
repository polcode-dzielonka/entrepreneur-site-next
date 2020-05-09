import { Fragment } from "react";
import PropTypes from "prop-types";
import sideHelper from "../helper/sideBarHelper";
import SideBarComponent from "./SideBar/SideBarComponent";
const SideBarContent = ({ data, type }) => {
	return data.map((article, index) => {
		const {
			headlineImage,
			headlineImageAlt,
			headline,
			category,
			url,
			contentLink,
			srcset,
		} = sideHelper(article, type);

		return (
			<Fragment key={index}>
				<SideBarComponent
					type={type}
					headlineImage={headlineImage}
					headlineImageAlt={headlineImageAlt}
					headline={headline}
					category={category}
					url={url}
					contentLink={contentLink}
					srcset={srcset}
				/>
			</Fragment>
		);
	});
};
export default SideBarContent;

SideBarContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
	type: PropTypes.string,
};
