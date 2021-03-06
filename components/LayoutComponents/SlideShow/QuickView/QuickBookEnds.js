import PropTypes from "prop-types";
import Embed from "../../../Embed/Embed";
import styles from "./styles/quickBookEndStyles.module.sass";
import Adsense from "../../../ads/code/adsense/adsense";
import adsenseStyles from "../../../ads/code/adsense/adsenseStyles";
import Reader from "../../Editor/reader";
const BookEnds = ({
	image,
	imageAlt,
	imagePath,
	imageAltAttribution,
	imageAltAttributionLink,
	title,
	details,
	embed,
}) => {
	return (
		<div className={styles.bookEndWrapper}>
			<div>
				<Adsense
					client="ca-pub-2068760522034474"
					slot="3049705177"
					responsive={false}
					adStyle={adsenseStyles["maxHeight"]}
				/>
			</div>
			<h1 className={styles.sectionHeader}>{title}</h1>
			<div className={styles.sectionParagraph}>
				<Reader value={details[0].children} />
			</div>
			<div className={styles.imageWrap}>
				<Embed
					embed={embed}
					image={image}
					imageAlt={imageAlt}
					imageAltAttribution={imageAltAttribution}
					imageAltAttributionLink={imageAltAttributionLink}
					imagePath={imagePath}
					styles={{ width: "100%", height: "100%" }}
					noMaxHeight={true}
				/>
			</div>
			<div className={styles.adWrap}>
				<Adsense
					client="ca-pub-2068760522034474"
					slot="1874540097"
					responsive={false}
					adStyle={adsenseStyles["maxHeight"]}
				/>
			</div>
		</div>
	);
};
BookEnds.propTypes = {
	position: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	imageAltAttribution: PropTypes.string,
	imagePath: PropTypes.string,
	imageAltAttributionLink: PropTypes.string,
	title: PropTypes.string,
	details: PropTypes.Object,
	embed: PropTypes.string,
};
BookEnds.defaultProps = {
	details: [
		{
			type: "paragraph",
			children: [{ text: "" }],
		},
	],
};

export default BookEnds;
