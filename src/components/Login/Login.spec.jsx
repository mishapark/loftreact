import React from "react";
import { LoginWithAuth } from "../Login/Login";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("renders corectly", () => {
   const { getByLabelText } = render(<LoginWithAuth/>)

   expect(getByLabelText("Email")).toHaveAttribute("name", "email")
   expect(getByLabelText("Password")).toHaveAttribute("name", "password")
  });
});