import React from "react";
import { Formik } from "formik";

import theme from "../theme";

import Text from "./Text";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import FormixTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  input: {
    marginBottom: 5,
    padding: 15,
    borderRadius: theme.border.defaultRadius,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    fontSize: theme.fontSizes.subheading
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
    fontWeight: theme.fontWeights.bold
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.view}>
      <FormixTextInput
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormixTextInput
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableHighlight>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
