import Layout from "../../Layouts/Layout";
import { theme } from "../../../theme/baseCss";
import QuizLoading from "../QuizLoading";
import SideBarContentLoading from "../SideBarContentLoading";
const Loading = () => {
	return (
		<Layout>
			<div className="home-container">
				<section className="body-container">
					<div className="latest-container">
						<QuizLoading />
					</div>
					<aside className="slide-container">
						<SideBarContentLoading />
					</aside>
				</section>
			</div>
			<style jsx>{`
				.body-container {
					display: flex;
					flex-direction: row;
					padding: 2rem;
					font-size: 10px;
					margin: 0 auto;
					max-width: ${theme.contentMaxWidth};
				}
				.button {
					width: 100%;
					height: 2.5rem;
					margin: 2rem 0;
					background-color: ${theme.secondary};
					cursor: pointer;
				}
				.button:focus {
					outline: none;
				}
				.button:hover {
					background-color: ${theme.primary};
				}
				.latest-container {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
					max-width: 70%;
					padding: 0rem 0.75rem 0.75rem 0;
				}
				.section-padding {
					padding-right: 0.5rem;
				}
				.slide-container {
					display: flex;
					flex-grow: 1;
					flex-direction: column;
					max-width: 30%;
					padding: 0rem 0rem 0.75rem 0.5rem;
				}

				@media only screen and (max-width: 1000px) {
					.body-container {
						flex-direction: column;
						padding: 0rem;
					}
					.latest-container {
						max-width: 100%;
						padding: 1rem;
					}
					.slide-container {
						max-width: 100%;
						padding: 0;
						margin: 0rem 2.5rem;
					}
				}
				@media only screen and (max-width: 646px) {
					.slide-container {
						margin: 0rem 1rem;
					}
				}
			`}</style>
		</Layout>
	);
};
export default Loading;
