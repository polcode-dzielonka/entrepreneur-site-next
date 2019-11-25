import SingleLoader from "../Loading/SingleLoader";
import HomeButton from "../Button/HomeButton";
const Error = () => {
	return (
		<div className="error-wrapper">
			<SingleLoader />
			<div className="section">
				<h1 className="section-heading">Error Loading Page </h1>
			</div>
			<HomeButton label="Back To Home" href="/" />
			<style jsx>
				{`
					.error-wrapper {
						margin: 4.5rem 2rem;
					}
					.section {
						margin: 2rem 0rem;
						width: 100%;
					}
					.section-heading {
						font-size: 3.75rem;
						font-weight: 900;
						line-height: 3.95rem;
						padding: 0;
						margin: 0 auto;
						text-align: center;
					}
				`}
			</style>
		</div>
	);
};

export default Error;
