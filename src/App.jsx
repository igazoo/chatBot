import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [],
			chats: [],
			currentId: "init",
			detaset: defaultDataset,
			open: false,
		};
		this.selectAnswer = this.selectAnswer.bind(this);
	}

	displayNextQuestion = (nextQuestionId) => {
		const chats = this.state.chats;
		chats.push({
			text: this.state.detaset[nextQuestionId].question,
			type: "question",
		});

		this.setState({
			answers: this.state.detaset[nextQuestionId].answers,
			chats: chats,
			currentId: nextQuestionId,
		});
	};

	selectAnswer = (selectAnswer, nextQuestionId) => {
		switch (true) {
			case nextQuestionId === "init":
				this.displayNextQuestion(nextQuestionId);
				break;
			default:
				const chats = this.state.chats;
				chats.push({
					text: selectAnswer,
					type: "answer",
				});
				this.setState({
					chats: chats,
				});
				this.displayNextQuestion(nextQuestionId);
				break;
		}
	};

	componentDidMount() {
		const initAnswer = "";
		this.selectAnswer(initAnswer, this.state.currentId);
	}

	render() {
		return (
			<section className="c-section">
				<div className="c-box">
					<Chats chats={this.state.chats} />
					<AnswersList
						answers={this.state.answers}
						select={this.selectAnswer}
					/>
				</div>
			</section>
		);
	}
}
