import {
	facebook,
	twitter,
	linkedin,
	email,
	pinterest,
	whatsapp,
	Youtube,
	Instagram,
	copyLink,
} from "./utils/icons";
const closingWidth = "16%";
export const openingSocialButtons = [facebook, twitter, linkedin, email];
export const sideSocialButtons = [
	facebook,
	twitter,
	linkedin,
	email,
	pinterest,
];

export const closingSocialButtons = [
	{ ...facebook, width: closingWidth },
	{ ...twitter, width: closingWidth },
	{ ...linkedin, width: closingWidth },
	{ ...email, width: closingWidth },
	{ ...pinterest, width: closingWidth },
	{ ...whatsapp, width: closingWidth },
];

export const midSocialButtons = [
	{ ...facebook, width: "33%" },
	{ ...linkedin, width: "33%" },
	{ ...email, width: "33%" },
];
