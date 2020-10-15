import React from "react";
import { Image, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
   imageSmall: {
      width: 45,
      height: 45,
      borderRadius: 10,
    },
    imageBig: {
      width: 90,
      height: 90
    }
});

/**
 * @param size to set the size of the avatar, 'big' or 'small'
 */
const Avatar = ({ size, style, ...props }) => {
  const imageStyle = [
    size === 'small' ? styles.imageSmall : styles.imageBig,
    style,
  ];

  return <Image style={imageStyle} {...props} />;
};

export default Avatar;