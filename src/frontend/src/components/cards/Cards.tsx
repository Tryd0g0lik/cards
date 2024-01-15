import React from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import data from "../data.ts";
import Content from "../content/Content.tsx";

export default function CardFC(): React.JSX.Element {
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src="https://prodod.moscow/wp-content/uploads/hmX6QigpmCs.jpg" alt="environment" />
      <Content title="Card title">{data[0].text}</Content>
    </div>
  );
}
