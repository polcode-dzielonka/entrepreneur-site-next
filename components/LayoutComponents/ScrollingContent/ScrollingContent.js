import { useEffect, useState } from "react";
import ScrollingArticlesLoading from "../../Loading/ScrollingArticlesLoading";
import PropTypes from "prop-types";
import SubScrollingContent from "./SubContent";
import MainScrollingContent from "./MainContent";
import SectionBar from "../SectionBar";
import sideHelper from "../../helper/sideBarHelper";
import querySelect from "./utils/querySelect";
import prodRequest from "../../apiRequest/prodRequest";
import { filterUnique } from "../../../utils/handler";
import styles from "./styles/scrollingContentStyles.module.sass";
const limit = 5;
const ScrollingContent = ({ id, title, type }) => {
	const [QUERY, queryString, operationName] = querySelect(type);
	const [content, setContent] = useState([]);
	const [nextToken, setNextToken] = useState("");
	let throttle = null;

	useEffect(() => {
		getContent();
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleInfiniteScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleInfiniteScroll);
		};
	}, [nextToken]);

	const getQueryData = async queryData => {
		try {
			const { data } = await prodRequest(queryData);
			const uniqueContent = filterUnique(data[queryString].items, content);
			const scrollingContent = content.concat(uniqueContent);
			setContent(scrollingContent);
			setNextToken(data[queryString].nextToken);
		} catch (err) {
			console.log("Error with requests", err);
			setNextToken(false);
		}
	};

	const getContent = () => {
		const queryData = {
			query: QUERY,
			operationName: operationName,
			variables: { id: process.env.REACT_APP_SITE_ID, limit: limit },
		};

		getQueryData(queryData);
	};

	const handleInfiniteScroll = () => {
		if (throttle === null) {
			throttle = setTimeout(() => {
				const rootNode = document.documentElement;
				const body = document.body;
				const top = "scrollTop";
				const height = "scrollHeight";
				const percentage =
					((rootNode[top] || body[top]) /
						((rootNode[height] || body[height]) - rootNode.clientHeight)) *
					100;

				if (percentage > 85) {
					if (nextToken) {
						const queryData = {
							query: QUERY,
							operationName: operationName,
							variables: {
								id: process.env.REACT_APP_SITE_ID,
								limit: limit,
								nextToken: nextToken,
							},
						};
						getQueryData(queryData);
					}
				}

				throttle = null;
			}, 500);
		}
	};

	if (!content || content.length < 1)
		return <ScrollingArticlesLoading height="200px" />;
	return (
		<div className={styles.scrollingWrapper}>
			<SectionBar title={title} titleColor="#111" titleSize="2rem" />
			{content.map((content, index) => {
				if (content.id === id) return null;

				const {
					headlineImage,
					headlineImageAlt,
					headline,
					category,
					contentLink,
					refPath,
				} = sideHelper(content, type);

				if (index % 4 === 0) {
					return (
						<MainScrollingContent
							category={category}
							headline={headline}
							headlineImage={headlineImage}
							headlineImageAlt={headlineImageAlt}
							index={index}
							key={index}
							contentLink={contentLink}
							refPath={refPath}
						/>
					);
				}
				return (
					<SubScrollingContent
						category={category}
						headline={headline}
						headlineImage={headlineImage}
						headlineImageAlt={headlineImageAlt}
						index={index}
						key={index}
						contentLink={contentLink}
						refPath={refPath}
					/>
				);
			})}
		</div>
	);
};

ScrollingContent.propTypes = {
	QUERY: PropTypes.String,
	filter: PropTypes.Object,
	limit: PropTypes.Int,
	title: PropTypes.String,
	id: PropTypes.String,
	type: PropTypes.String,
};

ScrollingContent.defaultProps = {
	title: "Latest",
	type: "article",
};
export default ScrollingContent;
