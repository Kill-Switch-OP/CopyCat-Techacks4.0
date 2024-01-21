import React from "react";
import MyInputBox from "./myInputBox";
import MyButton from "./MyButton";
import MyText from "./MyText";

function GetterGroup(props) {
	return (
		<div>
			<MyText text={props.text_app} link={props.link_app} />
			<div className="multi-col-group">
				<MyInputBox fcn={props.fcnI1_app} placeholderTxt={props.placeholderTxt1_app} />
				<MyButton fcn={props.fcnB1_app} buttonLabel={props.buttonLabel_app} />
			</div>
		</div>
	);
}

export default GetterGroup;
