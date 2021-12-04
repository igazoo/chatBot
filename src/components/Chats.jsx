import React from "react";
import List from "@material-ui/core/List";
import { Chat } from "./index";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		chats: {
			height: 400,
			padding: 0,
			overflow: "auto",
		},
	})
);

const Chats = (props) => {
	const classes = useStyles();
	return (
		<List className={classes.chats}>
			{props.chats.map((v, i) => {
				return <Chat text={v.text} type={v.type} key={i.toString()} />;
			})}
		</List>
	);
};

export default Chats;
