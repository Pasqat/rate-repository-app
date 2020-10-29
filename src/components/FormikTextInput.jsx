import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginBottom: 2,
    color: theme.colors.error,
    fontFamily: theme.fonts.main,
  },
  input: {
    marginBottom: 5,
    padding: 15,
    borderRadius: theme.border.defaultRadius,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
});

const FormixTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, showError && styles.inputError]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormixTextInput;
