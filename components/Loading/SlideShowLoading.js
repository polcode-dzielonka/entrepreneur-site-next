const SlideShowLoading = () => {
	return ["", "", "", ""].map((article, index) => {
		return (
			<article className="large-image-container" key={index}>
				<div className="banner">
					<div className="content"></div>
					<div className="content"></div>
					<div className="content"></div>
				</div>
				<style jsx>{`
					.banner {
						position: absolute;
						width: 100%;
						background-color: white;
						height: 30%;
						content: "";
						bottom: 0;
					}
					.large-image-container {
						position: relative;
						cursor: pointer;
						margin-right: 1rem;
						height: 546px;
						width: 100%;
						margin-bottom: 1rem;
						background-color: #f4f4f4;
					}
					.title {
						height: 25%;
						margin: 25px 0px 0px 0px;
						background-color: #e2e2e2e2;
					}
					.content {
						height: 40px;
						width: 100%;
						margin: 0.4rem 0rem;
						background-color: #e2e2e2e2;
					}
					.content:nth-child(2) {
						width: 80%;
					}
					.content:nth-child(3) {
						width: 60%;
					}
					@media only screen and (max-width: 1000px) {
						.large-image-container {
							height: 450px;
						}
						.title {
							height: 35%;
							margin: 15px 0px 0px 0px;
						}
					}
				`}</style>
			</article>
		);
	});
};
export default SlideShowLoading;

SlideShowLoading.propTypes = {};
