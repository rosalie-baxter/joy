import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the home landing page component", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});

// test("Jest is working", () => {
//   expect(true).toBeTruthy();
// });
