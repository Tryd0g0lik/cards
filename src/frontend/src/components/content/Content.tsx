import React from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Btn from "../button/Button.tsx";
import data from "../data.ts";
interface Card {
  title: string
  children: string
}

export default function ContentFC(props: Card): React.JSX.Element {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.children}</p>
      <Btn>{data[0].button}</Btn>
    </div>
  );
}
