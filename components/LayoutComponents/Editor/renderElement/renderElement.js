import dynamic from "next/dynamic";
import Quote from "./quote/quote";
import EmbedImage from "./embedImage/embedImage";
import SingleLoader from "../../../Loading/SingleLoader";
import LazyLoad from "react-lazyload";
import SiteAd from "./ads/siteAd";
import LinkAd from "./ads/linkAd";
import styles from "./styles/renderElementStyles.module.sass";
const paragraphFontSize = 1.35;
const paragraphLineHeight = 2.5;
const Embed = dynamic(() => import("./embed/embed"), {
	ssr: false,
	loading: () => <SingleLoader />,
});

const formatSize = 18;
const lineHeight = 1.75;

const RenderElement = props => {
	const { attributes, children, element } = props;
	switch (element.type) {
		case "link":
			const { url } = element;
			return (
				<a
					{...attributes}
					className={styles.link}
					href={url}
					rel="noopener noreferrer"
					target="_blank"
				>
					{children}
				</a>
			);
		case "emoji":
			const emoji = element.data;
			return (
				<span {...attributes} className={styles.emoji}>
					{emoji}
					{children}
				</span>
			);
		case "code":
			return (
				<code {...attributes} className={styles.code}>
					{children}
				</code>
			);

		case "bold":
			return <strong {...attributes}>{children}</strong>;
		case "italic":
			return <em {...attributes}>{children}</em>;
		case "strikethrough":
			return <del {...attributes}>{children}</del>;
		case "underline":
			return <u {...attributes}>{children}</u>;
		case "paragraph":
			return (
				<div className={styles.para} {...attributes}>
					{children}
				</div>
			);
		case "heading-one":
			return (
				<h1 {...attributes} className={styles.headOne}>
					{children}
				</h1>
			);
		case "heading-two":
			return (
				<h2 {...attributes} className={styles.headTwo}>
					{children}
				</h2>
			);
		case "heading-three":
			return (
				<h3 {...attributes} className={styles.headThree}>
					{children}
				</h3>
			);
		case "heading-four":
			return (
				<h4 {...attributes} className={styles.headFour}>
					{children}
				</h4>
			);
		case "heading-five":
			return (
				<h5 {...attributes} className={styles.headFive}>
					{children}
				</h5>
			);

		case "format-align-left":
			return (
				<div className={styles.paraLeft} {...attributes}>
					{children}
				</div>
			);
		case "format-align-center":
			return (
				<div className={styles.paraCenter} {...attributes}>
					{children}
				</div>
			);
		case "format-align-right":
			return (
				<div className={styles.paraRight} {...attributes}>
					{children}
				</div>
			);
		case "format-align-justify":
			return (
				<div className={styles.paraJustify} {...attributes}>
					{children}
				</div>
			);
		case "bulleted-list":
			return (
				<ul className={styles.bullet} {...attributes}>
					{children}
				</ul>
			);
		case "numbered-list":
			return (
				<ol className={styles.numList} {...attributes}>
					{children}
				</ol>
			);
		case "list-item":
			return (
				<li className={styles.listItem} {...attributes}>
					{children}
				</li>
			);
		case "quote":
			return <Quote {...props} {...attributes} {...element} {...children} />;

		case "horizontal-line":
			return (
				<span {...attributes} className={style.horizLine}>
					{children}
				</span>
			);

		case "embed-image":
			return (
				<LazyLoad once={true}>
					<EmbedImage
						attributes={attributes}
						element={element}
						children={children}
					/>
				</LazyLoad>
			);
		case "embed":
			return (
				<LazyLoad once={true}>
					<Embed
						attributes={attributes}
						element={element}
						children={children}
					/>
				</LazyLoad>
			);
		case "paid-ad":
			return (
				<div className={styles.paidAd} {...attributes}>
					____________ADVERT____________
					{children}
				</div>
			);
		case "site-ad":
			return (
				<LazyLoad once={true}>
					<SiteAd {...props} {...attributes} {...element} {...children} />
				</LazyLoad>
			);
		case "link-ad":
			return (
				<LazyLoad once={true}>
					<LinkAd {...props} {...attributes} {...element} {...children} />
				</LazyLoad>
			);
		case "table":
			return (
				<table style={{ width: "100%" }}>
					<tbody style={{ border: "1px solid black" }} {...attributes}>
						{children}
					</tbody>
				</table>
			);
		case "table-row":
			return (
				<tr {...attributes} style={{ border: "1px solid black" }}>
					{children}
				</tr>
			);
		case "table-cell":
			return (
				<td {...attributes} style={{ border: "1px solid black" }}>
					{children}
				</td>
			);
		default:
			return (
				<div className={styles.para} {...attributes}>
					{children}
				</div>
			);
	}
};

export default RenderElement;
