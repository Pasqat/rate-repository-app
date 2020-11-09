import React from "react";
import { SignInContainer } from "./SignIn";

import { render, fireEvent, waitFor } from "@testing-library/react-native";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId("usernameField"), "pasqat");
      fireEvent.changeText(getByTestId("passwordField"), "password");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        expect(onSubmit).toBeCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "pasqat",
          password: "password",
        });
        // expect the onSubmit function te have been called
        // once and wuth a correct first arguments
      });
    });
  });
});
