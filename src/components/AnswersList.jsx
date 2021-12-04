import React from "react";
import { Answer } from "./index";

const AnswersList = (props) => {
	return (
		<div className="c-grid__answer">
			{props.answers.map((v, i) => {
				return (
					<Answer
						content={v.content}
						key={i.toString()}
						nextId={v.nextId}
						select={props.select}
					/>
				);
			})}
		</div>
	);
};

export default AnswersList;
