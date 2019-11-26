import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { theme } from "../../theme/baseCss";
import Ripples from "../Button/Ripples";
import Context from "../../utils/Context";
import CrossIcon from "../Icons/crossIcon";
import axios from "axios";
import { EMAIL_SIGN_UP } from "../../graphql/emailSignUp";
import {
	emailSignUp,
	INITIAL_STATE,
	ERROR_STATE,
} from "../../data/emailSignupData";
import validate from "../../components/FormValidation/Validation";
import SuccessModal from "./successModal";
import Cookie from "js-cookie";

//Set Cookie Expiration if not signed up (in minutes)
const cookieTime = 1;
const SignUpModal = () => {
	const { emailCookie, handleState } = useContext(Context);
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [errors, setErrors] = useState(ERROR_STATE);
	const [showModal, setShowModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [count, setCount] = useState(0);

	const handleScroll = () => {
		const top = window.pageYOffset || document.documentElement.scrollTop;

		if (top > 200 && count < 1) {
			setCount(count + 1);
			setShowModal(top > 200);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const changeEmailCookie = value => {
		//if clicked away and not signed up push cookie expiry to a couple of hours
		const expiryDate = new Date(new Date().getTime() + cookieTime * 60 * 1000);
		Cookie.set("wealth-cookie-email-signup", JSON.stringify(false), {
			expires: expiryDate,
		});
		handleState({ emailCookie: value });
	};

	const validateForm = e => {
		validate(formData, e.target.name, setErrors, errors);
	};

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (errors.badRequest) {
			setErrors({
				...errors,
				badRequest: false,
			});
		}

		const submitForm = {
			...formData,
			id: formData.email,
			emailSignupSiteId: process.env.REACT_APP_SITE_ID,
			popUp: true,
		};

		try {
			const mutationData = {
				query: EMAIL_SIGN_UP,
				operationName: "CreateEmailSignup",
				variables: { input: submitForm },
			};
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(mutationData),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});

			const expiryDate = process.env.COOKIE_ACCEPT_EXPIRY; //Days

			Cookie.set("wealth-cookie-email-signup", JSON.stringify(false), {
				expires: Number(expiryDate),
			});
			setFormData(INITIAL_STATE);
			setSuccessModal(true);
			handleState({ emailCookie: false });
			setErrors({
				ERROR_STATE,
			});
		} catch (err) {
			console.log("Error with request", err);
			setFormData(INITIAL_STATE);
			setErrors({
				...errors,
				badRequest: true,
			});
		}
	};

	return (
		<>
			{emailCookie && showModal && (
				<div className="modal-background">
					<div className="modal-box">
						<div className="modal-content-wrapper">
							<div className="modal-title">
								<div className="modal-exit">
									<div className="icon">
										<CrossIcon onClick={() => changeEmailCookie(false)} />
									</div>
								</div>
								<div className="header-container">
									<div className="logo-wrapper">
										<img
											src="/static/business_motivation.svg"
											className="modal-logo"
										/>
									</div>
									<h1 className="header-primary">Keep Me Updated</h1>

									{!errors.badRequest && (
										<h2 className="header-secondary">
											Stay up to date with the most inspirational Business and
											Personal Development content on the internet.
										</h2>
									)}
									{errors.badRequest && (
										<>
											<h2 className="header-secondary">
												Uh Oh! Something went wrong - Please try again or
												Contact support{" "}
												<Link href="/contact">
													<a className="link" target="_blank">
														here.
													</a>
												</Link>
											</h2>
										</>
									)}
								</div>
								<form className="form-container" onSubmit={handleSubmit}>
									{emailSignUp.map((input, index) => {
										return (
											<div className="form-group" key={index}>
												<label className="form-label">{input.label}</label>
												<input
													name={input.name}
													required={input.required}
													value={formData[input.name]}
													className={
														errors[input.name] ? "error" : input.className
													}
													type={input.type}
													placeholder={
														errors[input.name]
															? errors[input.name]
															: input.placeholder
													}
													rows={input.rows}
													onChange={handleChange}
													onBlur={validateForm}
												/>
											</div>
										);
									})}
									<div className="cookie-wrapper">
										<Ripples color={theme.rippleColor}>
											<button className="subscribe" onClick={changeEmailCookie}>
												Subscribe
											</button>
										</Ripples>
										<Ripples
											color={theme.rippleColor}
											styling={{
												marginBottom: "0px",
												marginTop: "0px",
											}}
										>
											<button
												className="non-subscribe"
												onClick={() => changeEmailCookie(false)}
											>
												No Thanks I don't want expert knowledge of how to build
												wealth
											</button>
										</Ripples>
									</div>
								</form>
								<div className="header-container">
									<p className="modal-content">
										By clicking Submit, you are subscribing to receive
										newsletters from Derivative Media Ltd. Your data will be
										processed in accordance with our{" "}
										<Link href="/cookies">
											<a className="link" target="_blank">
												Privacy and Cookie Policy.
											</a>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<SuccessModal
				successModal={successModal}
				setSuccessModal={setSuccessModal}
			/>
			<style jsx>{`
				.cookie-wrapper {
					margin: 0;
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
					font-size: 3.75rem;
				}
				.header-secondary {
					font-size: 1.75rem;
				}
				.error {
					font-size: 1.1em;
					font-weight: 400;
					color: #2e2c2b;
					background: #fff;
					display: block;
					border: 0;
					padding-left: 10px;
					display: flex;
					height: 2.5rem;
					margin: 0px;
					width: 100%;
					border-radius: 0;
					font-family: ${theme.font};
					border: 1px solid ${theme.primary};
				}
				.error::placeholder {
					color: ${theme.primary};
				}
				.form-container {
					margin: 0.5rem 0.5rem;
					padding: 0rem 2.5rem;
				}
				.form-group {
					position: relative;
					margin-top: 0.5rem;
					width: 100%;
					background: #fff;
					display: flex;
				}
				.form-label {
					position: absolute;
					width: 1px;
					height: 1px;
					margin: -1px;
					overflow: hidden;
				}
				.form-input {
					font-size: 1.3em;
					font-weight: 400;
					color: #2e2c2b;
					background: #fff;
					border: 0;
					padding: 0px 10px;
					display: flex;
					height: 2.5rem;
					margin: 0px;
					width: 100%;
					border-radius: 0;
					font-family: ${theme.font};
				}
				.form-input::placeholder {
					color: grey;
				}
				.form-input:focus {
					outline: none;
				}

				.link {
					color: #fefefe;
					font-weight: 900;
				}
				.logo-wrapper {
					display: flex;
					width: 100%;
					height: 100%;
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
					height: 58%;
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
					animation-name: animateTop;
					animation-duration: 1s;
				}
				.modal-content-wrapper {
					height: 100%;
					width: 100%;
				}
				.modal-content {
					color: #fefefe;
					padding-left: 0.2rem;
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
				@keyframes animateTop {
					from {
						top: -100%;
						opacity: 1;
					}
					to {
						top: 15%;
						opacity: 1;
					}
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
				.non-subscribe {
					font-family: ${theme.font};
					font-size: 1.2rem;
				}

				@media only screen and (max-width: 1081px) {
					.modal-box {
						height: 56%;
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
						height: 64%;
						width: 90%;
					}
					.header-primary {
						font-size: 3.5rem;
					}
					.header-secondary {
						font-size: 1.5rem;
					}
				}
			`}</style>
		</>
	);
};
export default SignUpModal;
