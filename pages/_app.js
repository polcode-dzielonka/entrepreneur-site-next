import App from "next/app";
import UserContext from "../utils/Context";
import Cookie from "js-cookie";
import SignUp from "../components/SignUpModal/signUpModal";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
	gtmId: `${process.env.REACT_APP_GOOGLE_TAG_ID}`,
};
class OverviewApp extends App {
	state = {
		cookie: false,
		emailCookie: true,
		cpcMarker: false,
	};

	componentDidMount() {
		TagManager.initialize(tagManagerArgs);
		const cookieMarker = Cookie.get("cookie-accept")
			? JSON.parse(Cookie.get("cookie-accept"))
			: true;
		const cookieEmailMarker = Cookie.get("wealth-cookie-email-signup")
			? JSON.parse(Cookie.get("wealth-cookie-email-signup"))
			: true;
		const cpcMarker = Cookie.get("CPC") ? JSON.parse(Cookie.get("CPC")) : false;
		this.setState({
			cookie: cookieMarker,
			emailCookie: cookieEmailMarker,
			cpcMarker,
		});
	}

	handleState = value => {
		this.setState({
			...this.state,
			...value,
		});
	};

	render() {
		const { Component, pageProps, initialCookieValue } = this.props;
		return (
			<UserContext.Provider
				value={{
					cookie: this.state.cookie,
					handleState: this.handleState,
					emailCookie: this.state.emailCookie,
					cpcMarker: this.state.cpcMarker,
				}}
			>
				<SignUp />
				<Component {...pageProps} />
			</UserContext.Provider>
		);
	}
}

export default OverviewApp;
