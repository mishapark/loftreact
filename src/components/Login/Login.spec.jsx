import React from "react";
import { LoginWithAuth } from "../Login/Login";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  it("renders corectly", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <LoginWithAuth />
      </BrowserRouter>
    );

    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Password")).toHaveAttribute("name", "password");
  });
});
