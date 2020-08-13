import styles from "./styles/adStyles.module.sass";

const AdWrapper = ({ adCodeOne, adCodeTwo, sticky = false }) => {
	return (
		<div
			style={{ position: sticky ? "sticky" : null, top: sticky ? 70 : null }}
		>
			<div className={styles.adWrap}>
				<div className={styles.adHeader}>
					<div className={styles.advert}>ADVERTISEMENT</div>
					<div className={styles.multiAdWrap}>
						<div
							className={styles.multiSideAdSquareWrap}
							dangerouslySetInnerHTML={{
								__html: adCodeOne,
							}}
						/>
						<div
							className={styles.multiSideAdSquareWrap}
							dangerouslySetInnerHTML={{
								__html: adCodeTwo,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdWrapper;
