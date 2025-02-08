import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "i am an h1 tag")
  )
);
const htag = createRoot(document.getElementById("htag"));
htag.render(parent);
