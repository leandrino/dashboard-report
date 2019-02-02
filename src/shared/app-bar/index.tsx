import React from "react";

interface IAppBar {
  title: string;
}

const AppBar = (props: IAppBar) => <div>{props.title}</div>;

export default AppBar;
