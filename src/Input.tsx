import React from "react";

export const Input = ({ input, handleInput, handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Add todo..." onChange={handleInput} value={input} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};
