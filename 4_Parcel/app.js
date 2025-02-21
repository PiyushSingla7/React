import React from "react";
import { createRoot } from "react-dom/client";

//h1 created using react.
//react..createElement -> object -> converted to html element when rendered
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hi bro what's up"
);
console.log(heading);

//h1 created using jsx.
//jsx->html like or xml like syntax
//in backend jsx is converted to react.createElement using babel -> object -> converted to html element when rendered
const jsxheading = (<h1 id="heading" className="h1_heading">hi bro what's up</h1>);
console.log(jsxheading);

const root = createRoot(document.getElementById("root"));
//root.render(heading);
root.render(jsxheading);

