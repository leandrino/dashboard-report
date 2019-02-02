import React from "react";
import styled from "@emotion/styled";
import { Header } from "./app-bar.style";

interface IAppBar {
  title: string;
}

const AppBar = (props: IAppBar) => <Header>{props.title}</Header>;

export default AppBar;
