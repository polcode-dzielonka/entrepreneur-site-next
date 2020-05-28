import { useRef } from "react";
import Ripples from "../Button/Ripples";
import CrossIcon from "../Icons/crossIcon";
import PropTypes from "prop-types";
//Set Cookie Expiration if not signed up (in minutes)
const SuccessModal = ({ successModal, setSuccessModal }) => {
	const clickAway = useRef(null);

	const awayClick = e => {
		if (e.target.className === clickAway.current.className) {
			setSuccessModal(false);
		}
	};

	return (
		<>
			{successModal && (
				<div className="modal-background" ref={clickAway} onClick={awayClick}>
					<div className="modal-box">
						<div className="modal-content-wrapper">
							<div className="modal-title">
								<div className="modal-exit">
									<div className="icon">
										<CrossIcon onClick={() => setSuccessModal(false)} />
									</div>
								</div>
								<div className="logo-wrapper">
									<img
										src="/static/business_motivation.svg"
										className="modal-logo"
										alt="wealthmack_logo"
									/>
								</div>
								<div className="header-container">
									<h1 className="header-primary">Congratulations!</h1>
									<h2 className="header-secondary">
										You have been successfully added to our Newsletter.
									</h2>
									<h2 className="header-secondary">
										Keep an eye out in your inbox for our latest content.
									</h2>
								</div>

								<div className="cookie-wrapper">
									<Ripples color={theme.rippleColor}>
										<button
											className="subscribe"
											onClick={() => setSuccessModal(false)}
										>
											Continue
										</button>
									</Ripples>
									<h3 className="header-tertiary">
										If you don't see anything from us, please check your
										Promotions or Spam folder.
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<style jsx>{`
				.cookie-wrapper {
					margin: 0;
					padding: 0rem 2rem;
				}
				h1,
				h2,
				h3 {
					color: #fefefe;
					margin: 0 auto;
					position: relative;
					text-align: center;
					width: 100%;
					padding: 0;
					margin: 0;
				}
				.header-container {
					padding: 0rem 2rem;
				}
				.header-primary {
					font-size: 4rem;
				}
				.header-secondary {
					font-size: 1.75rem;
				}
				.header-tertiary {
					font-size: 1.5rem;
				}
				.logo-wrapper {
					display: flex;
					width: 100%;
					height: 75px;
					align-items: center;
					margin: 0 auto;
				}
				.modal-background {
					height: 100%;
					width: 100%;
					position: fixed;
					top: 0;
					left: 0;
					z-index: 500;
					background-color: rgb(0, 0, 0); /* Fallback color */
					background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
				}
				.modal-box {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 40%;
					position: fixed;
					background-color: ${theme.secondary};
					top: 15%;
					left: 20%;
					right: 20%;
					z-index: 1000;
					margin: 0 auto;
					max-width: 750px;
					border: none;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
						0 6px 20px 0 rgba(0, 0, 0, 0.19);
				}
				.modal-content-wrapper {
					height: 100%;
					width: 100%;
					border: 3px solid #fefefe;
				}

				.modal-exit {
					display: flex;
					flex-direction: row;
					align-items: flex-end;
					justify-content: flex-end;
				}
				.modal-logo {
					height: 75px;
					opacity: 1;
					background-color: white;
					align-items: center;
					margin: 0 auto;
					border: 1px solid white;
				}
				.modal-title {
					margin: 0 auto;
					position: absolute;
					width: 100%;
					display: flex;
					flex-direction: column;
				}

				button {
					background-color: ${theme.primary};
					color: #fefefe;
					width: 100%;
					border: none;
					margin: 0;
				}
				button:focus {
					display: none;
				}
				.subscribe {
					font-family: ${theme.font};
					font-size: 2rem;
				}

				@media only screen and (max-width: 1081px) {
					.modal-box {
						height: 40%;
						width: 75%;
						left: 0;
						right: 0;
					}
					.header-primary {
						font-size: 3.5rem;
					}
					.header-secondary {
						font-size: 1.5rem;
					}
				}
				@media only screen and (max-width: 800px) {
					.modal-box {
						height: 40%;
						width: 90%;
					}
					.header-primary {
						font-size: 3rem;
						margin-top: 0.5rem;
					}
					.header-secondary {
						font-size: 1.2rem;
					}
				}
			`}</style>
		</>
	);
};

SuccessModal.propTypes = {
	successModal: PropTypes.Boolean,
	setSuccessModal: PropTypes.Func,
};
export default SuccessModal;
