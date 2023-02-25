export const load = async () => {
	const getPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/photos');
		const data = await response.json();
		const filterData = data.slice(0, 3);
		return filterData;
	};

	return {
		posts: getPosts()
	};
};
