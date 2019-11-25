import PropTypes from "prop-types";
import { theme } from "../../theme/baseCss";

const MainHeadlineLoading = () => {
	return (
		<section className="header-section">
			<div className="headline-container">
				<article className="headline-image-container">
					<div className="banner">
						<div className="title"></div>
						<div className="category"></div>
					</div>
				</article>
				<div className="sub-articles">
					{["", "", ""].map((loading, index) => {
						return (
							<article className="sub-article" key={index}>
								<div className="sub-article-wrap"></div>
								<div className="sub-article-title-wrap">
									<div className="sub-title-one"></div>
									<div className="sub-title-two"></div>
								</div>
							</article>
						);
					})}
				</div>
			</div>

			<style jsx>
				{`
					.banner {
						position: absolute;
						width: 100%;
						background-color: white;
						height: 30%;
						content: "";
						bottom: 0;
					}
					.header-section {
						padding: 2rem 0rem 2rem 0rem;
						margin: 0 auto;
						background-color: ${theme.secondary};
					}
					.headline-container {
						display: flex;
						flex-direction: row;
						height: 450px;
						max-width: ${theme.contentMaxWidth};
						margin: 0 auto;
					}
					.headline-image-container {
						width: 60%;
						background-color: #f4f4f4;
						position: relative;
						margin-right: 1rem;
					}
					.sub-articles {
						width: 40%;
						background-color: white;
						position: relative;
					}
					.sub-article {
						width: 100%;
						height: 32%;
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
					.title {
						height: 25%;
						margin: 25px 20px 0px 20px;
						background-color: #e2e2e2e2;
					}
					.category {
						height: 25%;
						width: 25%;
						float: right;
						margin: 25px 20px 0px 20px;
						background-color: #e2e2e2e2;
					}

					@media only screen and (max-width: 1000px) {
						.headline-container {
							flex-direction: column;
							height: 100%;
							padding: 2rem;
						}
						.headline-image-container {
							width: 100%;
							height: 100%;
							height: 526px;
							marginbottom: 2rem;
						}

						.sub-articles {
							margin-top: 2rem;
							width: 100%;
							height: 100%;
						}
						.sub-articles {
							height: 526px;
						}
					}
					@media only screen and (max-width: 576px) {
						.headline-container {
							flex-direction: column;
							height: 100%;
							padding: 0rem;
						}
						.headline-image-container {
							width: 100%;
							height: 100%;
							height: 476px;
							marginbottom: 2rem;
						}

						.sub-articles {
							margin-top: 2rem;
							width: 100%;
							height: 100%;
						}
						.sub-articles {
							height: 476px;
						}
					}
				`}
			</style>
		</section>
	);
};
export default MainHeadlineLoading;

MainHeadlineLoading.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
