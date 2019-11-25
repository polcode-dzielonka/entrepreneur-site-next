import { useRouter } from "next/router";
import QuickViewLayout from "../../../../../components/Layouts/QuickViewLayout";
import { withApollo } from "../../../../../lib/apollo";

const Slide = () => {
	const router = useRouter();
	const { slideContentId, slideId, url } = router.query;
	return <QuickViewLayout id={slideId} position={slideContentId} url={url} />;
};

export default withApollo(Slide);
