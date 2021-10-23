import React from "react";
import Signup from "./Signup";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Signup", () => {
  it("renders corectly", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("What is you name?*")).toHaveAttribute(
      "name",
      "name"
    );
    expect(getByLabelText("Password*")).toHaveAttribute("name", "password");
  });
});
