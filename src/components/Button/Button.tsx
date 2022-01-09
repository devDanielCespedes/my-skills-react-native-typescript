import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}
export const Button = ({ title, ...rest }: IButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
