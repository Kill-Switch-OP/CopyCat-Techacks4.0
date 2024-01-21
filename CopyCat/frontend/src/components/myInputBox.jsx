import React from "react";

function MyInputBox(props) {
	return (
		<div>
			<input type="text" onChange={props.fcn} placeholder={props.placeholderTxt} className="text-input" />
		</div>
	);
}

export default MyInputBox;
