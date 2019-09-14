import Header from "./Header";

const Layout = props => (
	<div style={{ margin: 0 }}>
		<Header />

		{props.children}
		<style jsx>{`
			:global(body) {
				margin: 0px;
				font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
					Helvetica, sans-serif;
			}
		`}</style>
	</div>
);

export default Layout;
