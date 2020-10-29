import React from "react";
import { Formik } from "formik";
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .length(3, 'Username lenght must be at least 4 characters')
    .required('username is required'),
  password: yup
    .string()
    .length(3, 'Password lenght too short')
    .required('password missing')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.view}>
      <FormixTextInput
        name="username"
        placeholder="Username"
      />
      <FormixTextInput
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
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
