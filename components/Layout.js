import Header from "./Header";
import PostLink from "./PostLink";
const layoutStyle = {
	// margin: 20,
	// padding: 20,
	// border: "1px solid #DDD",
};

const Layout = props => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
);

export default Layout;
