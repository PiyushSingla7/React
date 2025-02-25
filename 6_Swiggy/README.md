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