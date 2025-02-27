- Header
- -Logo
- -Nav Item
- Body
- -Search Bar
- -Restaurant Container
-     -Restaurant Card
-         -img
-         -name of res , star rating , cuisine , delivery time
- Footer
- -Social Links
- -Contact Us
- -Adress
- -CopyRight

There are two types of exports/imports named and default exports.
Named Exports:

- export const add = (a,b) => a+b;
- export const multiply = (a,b) => a\*b;
- export const ID = 2345;

Default Exports:

- export default (a,b) => a+b;

Named Imports:

- import {useState} from "react";

Default Imports:

- import React from "react";


whenever state variables are updated, react triggers a recollination cycle (it re-renders the component).

//if there is no dependency array then use effect will be called every time the component is re-rendered.
useEffect(() => {
    console.log("use effect called");
},);

//if there is a empty dependency array then use effect will be called only on initial render (only once).
useEffect(() => {
    fetchData();
}, []);

//if there is a dependency array then use effect will be called whenever btn updates or re-renders.
useEffect(() => {
    fetchData();
}, [btn]);


2 types of routing in web apps
- Client Side Routing :- SPA (Single Page Application) - React Router DOM - Reload the affected page/area only - Faster
- Server Side Routing :- MPA (Multi Page Application) - Express Router - Reload the whole page - Slower