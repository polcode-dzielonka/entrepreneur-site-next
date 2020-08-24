import PropTypes from "prop-types";
import styles from "./styles/sectionBarStyles.module.sass";
const SectionBar = ({ title, titleColor, titleSize }) => {
	return (
		<div>
			<div className={styles.featuredContent}>
				<h1 className={`${styles.sectionTitle} section-title`}>
					<span>{title}</span>
				</h1>
			</div>

			<style jsx>
				{`
					.section-title {
						color: ${titleColor};
						font-size: ${titleSize};
					}
				`}
			</style>
		</div>
	);
};
export default SectionBar;

SectionBar.propTypes = {
	title: PropTypes.String,
	titleColor: PropTypes.String,
	titleSize: PropTypes.String,
};
