import "./fields.css";

function SearchBar({ placeholder, list }) {
	const handleChange = (value) => {
		const searchList = list.tourDeFrance2024.filter(
			(stage) =>
				stage.start.toLowerCase().startsWith(value) ||
				stage.finish.toLowerCase().startsWith(value)
		);
		list.setList(searchList);
	};
	return (
		<input
			className="searchbar"
			placeholder={placeholder}
			onChange={(event) =>
				handleChange(event.currentTarget.value.toLowerCase())
			}
		/>
	);
}
export default SearchBar;
