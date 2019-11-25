import { useRouter } from "next/router";
import ArticleLayout from "../../../components/Layouts/ArticleLayout";
import { withApollo } from "../../../lib/apollo";

const Article = () => {
	const router = useRouter();
	const { id, url } = router.query;

	return <ArticleLayout id={id} />;
};

export default withApollo(Article);
