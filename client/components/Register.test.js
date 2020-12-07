import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { Register } from "./Register";

test("renders register form correctly", () => {
  const { asFragment } = render(<Register />);
  expect(asFragment()).toMatchSnapshot();
});

test("form field values update correctly on input", async () => {
  render(<Register />);

  const usernameInput = await screen.getByRole("textbox", {
    name: "Username",
  });
  const passwordInput = await screen.getByLabelText("Password");
  fireEvent.change(usernameInput, { target: { value: "test username" } });
  fireEvent.change(passwordInput, { target: { value: "test password" } });

  expect(usernameInput.value).toBe("test username");
  expect(passwordInput.value).toBe("test password");
});

test("calls registerUser on register button click", async () => {
  const registerUser = jest.fn();
  render(<Register registerUser={registerUser} />);

  const registerButton = await screen.getByRole("button", { name: "Register" });
  fireEvent.click(registerButton);

  expect(registerUser).toHaveBeenCalled();
});
