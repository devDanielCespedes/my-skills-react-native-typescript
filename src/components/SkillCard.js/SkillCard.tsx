import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export const SkillCard = ({ skill, ...rest }: ISkillCardProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.touchableSkills} {...rest}>
      <Text style={styles.skills}>{skill}</Text>
    </TouchableOpacity>
  );
};
