import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SocialShareCount = ({ children, className, getCount, url }) => {
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		updateCount(url);
	}, []);
	const updateCount = url => {
		if (getCount) {
			setIsLoading(true);
			getCount(url, count => {
				setCount(count);
				setIsLoading(false);
			});
		}
	};
	return <div className={className}>{!isLoading && children(count || 0)}</div>;
};

SocialShareCount.propTypes = {
	children: PropTypes.func,
	className: PropTypes.string,
	getCount: PropTypes.func,
	url: PropTypes.string.isRequired,
};

SocialShareCount.defaultProps = {
	children: shareCount => shareCount,
};

export default function shareCountFactory(getCount) {
	return props => <SocialShareCount getCount={getCount} {...props} />;
}
