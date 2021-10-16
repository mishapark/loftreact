import React from "react";
import Signup from "./Signup";
import { render } from "@testing-library/react";

describe("Signup", () => {
  it("renders corectly", () => {
   const { getByLabelText } = render(<Signup/>)

   expect(getByLabelText("Email*")).toHaveAttribute("name", "email")
   expect(getByLabelText("What is you name?*")).toHaveAttribute("name", "name")
   expect(getByLabelText("Password*")).toHaveAttribute("name", "password")
  });
});