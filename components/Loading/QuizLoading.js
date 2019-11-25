const QuizLoading = () => {
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
							margin-bottom: 3rem;
							background-color: #f4f4f4;
						}
						.title {
							height: 20%;
							width: 100%;
							margin: 25px 0px 0px 0px;
							background-color: #e2e2e2e2;
						}
						.title:nth-child(2) {
							width: 80%;
						}
						.title:nth-child(3) {
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
		}

		return (
			<article className="header-section" key={index}>
				<div className="sub-article">
					<div className="sub-article-wrap"></div>
					<div className="sub-article-title-wrap">
						<div className="sub-title-one"></div>
						<div className="sub-title-two"></div>
					</div>
				</div>

				<style jsx>{`
					.header-section {
						display: flex;
						flex-direction: row;
						padding: 0.25rem 0;
						position: relative;
						cursor: pointer;
						width: 100%;
						height: 300px;
						background-color: white;
					}
					.sub-article {
						width: 100%;
						height: 100%;
						background-color: #f4f4f4;
						position: relative;
						display: flex;
						margin-bottom: 0.4rem;
						flex-direction: row;
					}
					.sub-article-wrap {
						width: 40%;
						background-color: #f4f4f4;
						height: 100%;
					}
					.sub-article-title-wrap {
						width: 60%;
						background-color: white;
						height: 100%;
					}
					.sub-title-one {
						height: 15%;
						width: 90%;
						position: relative;
						margin: 0.25rem 1rem 0.5rem 0.5rem;
						background-color: #e2e2e2e2;
					}
					.sub-title-two {
						height: 15%;
						width: 80%;
						position: relative;
						margin: 0.25rem 1rem 0rem 0.5rem;
						background-color: #e2e2e2e2;
					}

					@media only screen and (max-width: 1000px) {
                    .header-section {
                        height: 450px;
                        margin-top:2rem;
                    }
                    .sub-article {
                        flex-direction: column;
                    }
					
					.sub-article-wrap {
						width: 100%;
						height: 1000px;
					}
					.sub-article-title-wrap {
						width: 100%;
					}
					.sub-title-one {
						height: 20%;
						margin: 0.45rem 1rem 0.5rem 0rem;
					}
					.sub-title-two {
						height: 20%;
						margin: 0.25rem 1rem 0rem 0rem;
					}
				`}</style>
			</article>
		);
	});
};
export default QuizLoading;

QuizLoading.propTypes = {};
