const SocialSingleLoader = () => {
	return (
		<article className="image-container">
			<div className="social-container">
				<div className="header">
					<div className="profile">
						<div className="profile-circle"></div>
					</div>
					<div className="category">
						<div className="category-lines"></div>
						<div className="category-lines"></div>
					</div>
				</div>
				<div className="image"></div>
				<div className="footer">
					<div className="footer-category-lines"></div>
					<div className="footer-category-lines"></div>
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
					.category {
						height: 100%;
						width: 80%;
						display: flex;
						flex-direction: column;
						align-items: left;
					}
					.category-lines {
						width: 95%;
						background-color: #e2e2e2;
						height: 20%;
						margin-top: 1rem;
					}
					.category-lines:nth-child(2n) {
						width: 80%;
					}
					.footer {
						width: 100%;
						height: 20%;
					}

					.footer-category-lines {
						width: 95%;
						background-color: #e2e2e2;
						height: 20%;
						margin: 0 auto;
						margin-top: 1rem;
					}
					.header {
						width: 100%;
						height: 20%;
						display: flex;
						flex-direction: row;
						align-items: center;
					}
					.image-container {
						width: 100%;
						background-color: #fefefe;
						position: relative;
						height: 550px;
					}
					.image {
						width: 100%;
						height: 60%;
						background-color: #f4f4f4;
					}
					.social-container {
						width: 80%;
						margin: 0 auto;
						border: 1px solid #e2e2e2e2;
						height: 100%;
						display: flex;
						flex-direction: column;
					}
					.profile {
						width: 20%;
						height: 100%;
						display: flex;
						align-items: center;
					}
					.profile-circle {
						width: 75%;
						height: 75%;
						border-radius: 50%;
						margin: 0 auto;
						background-color: #f4f4f4;
					}
					@media only screen and (max-width: 1200px) {
						.social-container {
							width: 100%;
						}
					}
				`}
			</style>
		</article>
	);
};
export default SocialSingleLoader;
