import { useContext } from "react";
import Link from "next/link";
import { theme } from "../../theme/baseCss";
import Ripples from "../Button/Ripples";
import Cookie from "js-cookie";
import Context from "../../utils/Context";

const CookieBanner = () => {
	const { cookie, handleState } = useContext(Context);
	console.log("COOKIE", cookie);
	console.log("Handle State", handleState);
	const changeCookie = () => {
		console.log("HIT ME", process.env);
		console.log("HIT ME", process.env.COOKIE_ACCEPT_EXPIRY);
		//set expiry to 10 minutes:- new Date(new Date().getTime() + 10 * 60 * 1000)
		const expiryDate = process.env.COOKIE_ACCEPT_EXPIRY; //Days
		Cookie.set("cookie-accept", JSON.stringify(false), {
			expires: expiryDate,
		});
		handleState({ cookie: false });
	};

	return (
		<>
			{cookie && (
				<div className="alert-box">
					<div className="alert-box-wrapper">
						<p className="banner-content">
							We use cookies to ensure you get the best experience possible.
							Carry on browsing if you're okay with this, or find out how to
							manage cookies in our Cookie Settings. In addition, by navigating
							on this website you acknowledge that Cookies may be used to serve
							you personalized ads throughout your online experience. To learn
							more or disable this service please consult our{" "}
							<Link href="/cookies">
								<a className="link" target="_blank">
									Cookie Policy.
								</a>
							</Link>
						</p>
						<div className="cookie-wrapper">
							<Ripples color={theme.rippleColor}>
								<button onClick={changeCookie}>Accept</button>
							</Ripples>
						</div>
					</div>
				</div>
			)}
			<style jsx>{`
				.alert-box {
					color: #fefefe;
					bottom: 0;
					position: fixed;
					border: none;
					background-color: rgba(0, 0, 0, 0.85);
					animation-name: slideIn;
					animation-duration: 1s;
				}

				.alert-box-wrapper {
					font-family: Arial, sans-serif;
					line-height: 1.5rem;
					display: flex;
					flex-direction: row;
					width: 100%;
					height: 100%;
					position: relative;
				}
				.banner-content {
					padding: 0.75rem;
					margin: 0;
				}
				button {
					background-color: ${theme.primary};
					color: #fefefe;
					font-family: ${theme.font};
					font-size: 2rem;
					width: 100%;
					max-width: 300px;
					border: none;
					padding: 0rem 2.1rem 0rem 2.1rem;
					cursor: pointer;
				}
				button:focus {
					display: none;
				}
				.cookie-wrapper {
					display: flex;
					margin-right: 1.2rem;
				}
				.link {
					text-decoration: none;
					color: #fefefe;
					font-weight: 900;
				}
				@keyframes slideIn {
					from {
						bottom: -300px;
						opacity: 0;
					}
					to {
						bottom: 0;
						opacity: 1;
					}
				}
				@media only screen and (max-width: 1000px) {
					.alert-box-wrapper {
						flex-direction: column;
						width: 100%;
						padding: 0rem;
						margin: 0rem;
					}
					.banner-content {
						padding: 0rem 0.75rem 0rem 0.75rem;
						margin-bottom: 0;
					}
					.cookie-wrapper {
						margin: 0rem;
						padding: 0rem;
					}
					button {
						width: 100%;
						max-width: 100%;
						padding: 0;
						margin: 0;
					}
				}
			`}</style>
		</>
	);
};
export default CookieBanner;
