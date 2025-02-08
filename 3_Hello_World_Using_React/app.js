const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world using react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// "h1" -> Tag Name
// {id: "heading"} -> Attributes
// "hello world using react" -> Children

// heading is an object its not a html tag its an object but when we render it on the browser using root.render(heading) it will be converted to html tag

//<div id="parent">
//  <div id="child">
//    <h1></h1>
//  </div>
//</div>;

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "i am an h1 tag")
  )
);
const htag = ReactDOM.createRoot(document.getElementById("htag"));
htag.render(parent);

//<div id="parent">
//  <div id="child">
//    <h1></h1>
//    <h2></h2>
//  </div>F
//</div>;

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]));
// const htag = ReactDOM.createRoot(document.getElementById("htag"));
// htag.render(parent);

// if we want to create two tags(siblings) then we can convert it into an array

//<div id="parent">
//  <div id="child">
//    <h1></h1>
//    <h2></h2>
//  </div>
// <div id="child2">
//   <h1>i am an h1 tag</h1>
//   <h2>i am an h2 tag</h2>
// </div>
//</div>;

// const parent = React.createElement("div",{ id: "parent" },[
//   React.createElement("div",{ id: "child" },[
//     React.createElement("h1", {}, "i am an h1 tag"),
//     React.createElement("h2", {}, "i am an h2 tag"),
//   ]),
//   React.createElement("div",{ id: "child2" },[
//     React.createElement("h1", {}, "i am an h1 tag"),
//     React.createElement("h2", {}, "i am an h2 tag"),
//   ]),
// ]);
// const htag = ReactDOM.createRoot(document.getElementById("htag"));
// htag.render(parent);
