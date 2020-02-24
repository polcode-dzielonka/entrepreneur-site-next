const links = [
	{ href: "/people", label: "People" },
	{ href: "/motivation", label: "Motivation" },
	{ href: "/quotes", label: "Quotes" },
	{ href: "/networth", label: "Net Worth" },
	{ href: "/quiz", label: "Quiz" },
];
const mobileLinks = [
	{ href: "/", label: "Home" },
	{ href: "/people", label: "People" },
	{ href: "/motivation", label: "Motivation" },
	{ href: "/quotes", label: "Quotes" },
	{ href: "/networth", label: "Net Worth" },
	{ href: "/quiz", label: "Quiz" },
];
const footerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/contact", label: "Contact Us" },
	{ href: "/terms", label: "Terms" },
	{ href: "/privacy", label: "Privacy" },
	{ href: "/cookies", label: "Cookies" },
	{ href: "/about", label: "About Us" },
];
const socialLinks = [
	{
		href: process.env.RSS_URL,
		icon: "/static/rss_icon.png",
	},
	{
		href: "https://www.facebook.com/WealthMack-103552984448329/",
		icon: "/static/facebookIcon.png",
	},
	{ href: "https://www.bbc.co.uk/", icon: "/static/youtubeIcon.png" },
	{ href: "https://www.bbc.co.uk/", icon: "/static/instagramIcon.png" },
	{ href: "https://twitter.com/wealthmack", icon: "/static/twitterIcon.png" },
	{
		href: "https://www.linkedin.com/company/wealthmack",
		icon: "/static/linkedinIcon.png",
	},
];

export { links, mobileLinks, socialLinks, footerLinks };
