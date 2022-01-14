import React from "react";
import { Spin } from "antd";

export default function index() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spin size="large" />
    </div>
  );
}
