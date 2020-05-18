import { useState } from "react";
import Link from "next/link";
import { theme } from "../../theme/baseCss";
import Ripples from "../Button/Ripples";
import EmailIcon from "./emailIcon";
import { EMAIL_SIGN_UP } from "../../graphql/emailSignUp";
import {
	quickEmailSignUp,
	QUICK_INITIAL_STATE,
	QUICK_ERROR_STATE,
} from "../../data/emailSignupData";
import validate from "../../components/FormValidation/Validation";
import Reaptcha from "reaptcha";
import Cookie from "js-cookie";
import manualRequest from "../apiRequest/prodAppsyncRequest";
//Set Cookie Expiration if not signed up (in minutes)
const SignUpModal = () => {
	const [formData, setFormData] = useState(QUICK_INITIAL_STATE);
	const [errors, setErrors] = useState(QUICK_ERROR_STATE);
	const [success, setSuccess] = useState(false);
	const [verified, setVerified] = useState(false);
	let recaptchaRef = null;

	const validateForm = e => {
		if (success) {
			setSuccess(false);
		}
		validate(formData, e.target.name, setErrors, errors);
	};

	const focusForm = () => {
		if (success) {
			setSuccess(false);
		}
	};

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const verifyCallback = () => {
		setVerified(true);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (errors.request) {
			setErrors({
				...errors,
				badRequest: false,
			});
		}

		const submitForm = {
			...formData,
			id: formData.email,
			emailSignupSiteId: process.env.REACT_APP_SITE_ID,
			site: "wealthmack",
			popUp: false,
		};

		try {
			const mutationData = {
				query: EMAIL_SIGN_UP,
				operationName: "CreateEmail",
				variables: { input: submitForm },
			};
			await manualRequest(mutationData);

			setSuccess(true);
			const expiryDate = process.env.COOKIE_ACCEPT_EXPIRY; //Days

			Cookie.set("wealth-cookie-email-signup", JSON.stringify(false), {
				expires: Number(expiryDate),
			});
			setFormData(QUICK_INITIAL_STATE);
			setErrors({
				QUICK_ERROR_STATE,
			});
		} catch (err) {
			console.log("Error with request", err);
			setFormData(QUICK_INITIAL_STATE);
			setErrors({
				...errors,
				badRequest: true,
			});
		}
	};

	return (
		<div className="container">
			<div className="header-container">
				<div className="icon-header">
					<div className="header-wrapper">
						<div className="icon-wrap-left">
							<EmailIcon />
						</div>
						<h1 className="header-primary">WealthMack Newsletters</h1>
						<div className="icon-wrap-right">
							<EmailIcon />
						</div>
					</div>
				</div>

				{!errors.badRequest && (
					<h2 className="header-secondary">
						Subscribe for the most inspirational Business and Personal
						Development content on the internet.
					</h2>
				)}
				{errors.badRequest && (
					<>
						<h2 className="header-secondary">
							Uh Oh! Something went wrong - Please try again or Contact support{" "}
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
				{quickEmailSignUp.map((input, index) => {
					return (
						<div className="form-group" key={index}>
							<label className="form-label">{input.label}</label>
							<input
								autoComplete="off"
								name={input.name}
								required={input.required}
								value={formData[input.name]}
								className={errors[input.name] ? "error" : input.className}
								type={input.type}
								placeholder={
									errors[input.name] ? errors[input.name] : input.placeholder
								}
								rows={input.rows}
								onChange={handleChange}
								onBlur={validateForm}
								onFocus={focusForm}
							/>
						</div>
					);
				})}
				<div className="subscribe-wrapper">
					<Ripples
						color={theme.rippleColor}
						styling={{ height: "100%", margin: 0, padding: 0 }}
					>
						<button className="subscribe" disabled={!verified} type="submit">
							Subscribe
						</button>
					</Ripples>
				</div>
			</form>
			<div className="recaptcha-wrapper">
				<Reaptcha
					sitekey={process.env.NEXT_APP_RECAPTCHA_INVISIBLE_SITEKEY}
					ref={e => (recaptchaRef = e)}
					onVerify={verifyCallback}
					theme="dark"
				/>
			</div>
			{success && (
				<div className="header-container">
					<p className="content">
						Congratulations! You have successfully been added to our email list.
						Keep an eye out for our latest content in your inbox.
					</p>
				</div>
			)}
			{!verified && (
				<div className="header-container">
					<p className="content">
						Please check the checkbox above to confirm you are not a robot
					</p>
				</div>
			)}
			{!success && (
				<div className="header-container">
					<p className="content">
						By clicking Submit, you are subscribing to receive newsletters from
						Derivative Media Ltd. Your data will be processed in accordance with
						our{" "}
						<Link href="/cookies">
							<a className="link" target="_blank">
								Privacy and Cookie Policy.
							</a>
						</Link>
					</p>
				</div>
			)}
			)
			<style jsx>{`
				button {
					background-color: ${theme.primary};
					color: #fefefe;
					width: 100%;
					margin: 0;
				}
				button:focus {
					display: none;
				}
				.container {
					width: 100%;
					background-color: ${theme.secondary};
					display: flex;
					flex-direction: column;
					margin: 2rem 0rem;
				}
				.content {
					font-size: 1rem;
					margin: 0 auto;
					padding: 0rem 2rem;
				}
				.header-container {
					width: 100%;
					margin: 0 auto;
					color: white;
					text-align: center;
					padding-top: 1rem;
				}
				.header-primary {
					font-size: 2rem;
					margin: 0 auto;
					padding: 0;
				}
				.header-secondary {
					font-size: 1.2rem;
					margin: 0 auto;
					color: white;
					padding: 0rem 2rem;
				}
				.header-wrapper {
					width: 60%;
					margin: 0 auto;
					display: flex;
					flex-direction: row;
				}
				.icon-header {
					width: 100%;
					display: flex;
					flex-direction: row;
					margin: 0 auto;
					text-align: center;
				}
				.icon-wrap-left {
					margin-left: 1rem;
				}
				.icon-wrap-right {
					margin-right: 1rem;
				}
				.error {
					font-size: 1.9em;
					font-weight: 400;
					color: #2e2c2b;
					background: #fff;
					display: block;
					padding-left: 10px;
					display: flex;
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
					display: flex;
					flex-direction: row;
				}
				.form-group {
					position: relative;
					width: 80%;
					background: #fff;
					display: flex;
					height: 3rem;
				}
				.form-label {
					position: absolute;
					width: 1px;
					height: 1px;
					margin: -1px;
					overflow: hidden;
				}
				.form-input {
					font-size: 1.9em;
					font-weight: 400;
					color: #2e2c2b;
					background: #fff;
					border: none;
					padding: 0px 10px;
					display: flex;
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
				.recaptcha-wrapper {
					margin: 0 auto;
					padding-top: 0.5rem;
				}
				.subscribe {
					font-family: ${theme.font};
					font-size: 1.5rem;
					height: 3rem;
				}
				.subscribe-wrapper {
					height: 100%;
					width: 20%;
				}
				@media only screen and (max-width: 800px) {
					.form-container {
						flex-direction: column;
						width: 90%;
						margin: 0 auto;
						padding: 0.7rem 0.5rem;
						text-align: center;
					}
					.header-wrapper {
						width: 100%;
					}
					.icon-wrap-left {
						margin-left: 0;
					}
					.icon-wrap-right {
						margin-right: 0;
					}
					.subscribe-wrapper {
						width: 100%;
						margin: 0;
						padding: 0;
					}
					.form-group {
						margin: 0;
						padding: 0;
						width: 100%;
					}
				}
				@media only screen and (max-width: 1200px) {
					.header-wrapper {
						width: 80%;
					}
				}
			`}</style>
		</div>
	);
};
export default SignUpModal;
