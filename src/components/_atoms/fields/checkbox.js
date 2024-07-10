import { useState } from "react";
import "./fields.css";

function Checkbox({ label, handleChange }) {
	const [checked, setChecked] = useState(false);
	const id = label.toLowerCase().replaceAll(" ", "");

	return (
		<>
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onChange={() => {
					setChecked(!checked);
					handleChange(!checked);
				}}
			/>
			<label htmlFor={id}>{label}</label>
		</>
	);
}
export default Checkbox;
