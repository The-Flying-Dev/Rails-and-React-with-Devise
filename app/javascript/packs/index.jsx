// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { render } from "react-dom";
import App from "./App";




document.addEventListener('DOMContentLoaded', () => {
  render(
    <div><h1>Hello There</h1></div>, document.getElementById('root'),
  )
});
