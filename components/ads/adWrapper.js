import styles from "./styles/adStyles.module.sass";

const AdWrapper = ({ adCode, sticky = false }) => {
	return (
		<div
			style={{ position: sticky ? "sticky" : null, top: sticky ? 70 : null }}
		>
			<div className={styles.adWrap}>
				<div className={styles.adHeader}>
					<div className={styles.advert}>ADVERTISEMENT</div>

					<div
						className={styles.sideAdSquareWrap}
						dangerouslySetInnerHTML={{
							__html: adCode,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdWrapper;
