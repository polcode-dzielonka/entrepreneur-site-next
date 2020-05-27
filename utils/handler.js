export const filterUnique = (originalContent, filterContent) => {
	return originalContent.filter(item => {
		return (
			filterContent.filter(filteredItem => {
				return filteredItem.id === item.id;
			}).length == 0
		);
	});
};
