const SideBarContentLoading = () => {
	return ["", "", "", "", "", "", "", ""].map((article, index) => {
		return (
			<article className="side-image-container" key={index}>
				<div className="banner">
					<div className="title"></div>
					<div className="category"></div>
				</div>
				<style jsx>{`
					.side-image-container {
						width: 100%;
						height: 70%;
						background-color: #f4f4f4;
						position: relative;
						margin-right: 1rem;
						margin-bottom: 1rem;
					}
					.banner {
						position: absolute;
						width: 100%;
						background-color: white;
						height: 30%;
						content: "";
						bottom: 0;
					}
					.title {
						height: 20%;
						margin: 15px 0px 5px 20px;
						background-color: #e2e2e2e2;
					}
					.category {
						height: 20%;
						width: 25%;
						float: right;
						margin: 5px 0px 10px 20px;
						background-color: #e2e2e2e2;
					}

					@media only screen and (max-width: 1000px) {
						.side-image-container {
							height: 450px;
						}

				`}</style>
			</article>
		);
	});
};
export default SideBarContentLoading;

SideBarContentLoading.propTypes = {};
