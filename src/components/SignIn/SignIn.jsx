import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import theme from "../../theme";

import Text from "../Text";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import FormixTextInput from "../FormikTextInput";

import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: theme.border.defaultRadius,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  text: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username lenght must be at least 4 characters")
    .required("username is required"),
  password: yup
    .string()
    .min(3, "Password lenght too short")
    .required("password missing"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.view}>
      <FormixTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
      />
      <FormixTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        testID="passwordField"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={onSubmit}
        testID="submitButton"
      >
        <Text style={styles.text}>Sign In</Text>
      </TouchableHighlight>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
