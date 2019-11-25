import { useRouter } from "next/router";
import SlideLayout from "../../../../../components/Layouts/SlideShowLayout";
import { withApollo } from "../../../../../lib/apollo";

const Slide = ({ initialCookieValue }) => {
	const router = useRouter();
	const { slideContentId, slideId, url } = router.query;

	return <SlideLayout id={slideId} position={slideContentId} url={url} />;
};

export default withApollo(Slide);
