import React from "react";
import { createRoot } from "react-dom/client";

//react element
const Heading = () => (
      <h1 id="heading" className="h1_heading">
        hi bro what's up
      </h1>
  );

//react component
//class based component - old
//functional component - new

//functional component - just a normal javascript function

const number =1000;
const HeadingComponent = () => (
    <div id="container">
      <Heading />
      {/* {we can write any javascript code here but it should be inside curly braces} */}
      {number}
      <h1>hi bro what's uppp</h1>
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// const fn=()=>{
//   return true;
// }
// const fn2=()=>true;
//fn and fn2 are the same
