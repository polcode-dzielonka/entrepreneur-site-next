const ArticlesLoading = () => {
	return ["", "", "", "", "", "", ""].map((article, index) => {
		if (index === 0) {
			return (
				<div className="banner" key={index}>
					<div className="title"></div>
					<div className="title"></div>
					<div className="category"></div>
					<style jsx>{`
						.banner {
							width: 100%;
							background-color: white;
							content: "";
							bottom: 0;
						}

						.title {
							height: 50px;
							width: 100%;
							margin: 15px 0px 0px 0px;
							background-color: #e2e2e2e2;
						}
						.category {
							height: 50px;
							width: 25%;
							margin: 15px 20px 20px 0px;
							background-color: #e2e2e2e2;
						}
					`}</style>
				</div>
			);
		}
		if (index === 1) {
			return (
				<article className="large-image-container" key={index}>
					<div className="banner">
						<div className="title"></div>
						<div className="title"></div>
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
							height: 45%;
							width: 100%;
							margin-bottom: 1rem;
							background-color: #f4f4f4;
						}
						.title {
							height: 25%;
							margin: 25px 0px 0px 0px;
							background-color: #e2e2e2e2;
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
		}

		return (
			<article className="content-section" key={index}>
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>

				<style jsx>{`
					.content-section {
						display: flex;
						flex-direction: column;
						padding: 0.25rem 0;
						position: relative;
						cursor: pointer;
						width: 100%;
						height: 375px;
						background-color: white;
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
						.content-section {
							padding: 0;
							height: 220px;
						}
					}
				`}</style>
			</article>
		);
	});
};
export default ArticlesLoading;

ArticlesLoading.propTypes = {};
