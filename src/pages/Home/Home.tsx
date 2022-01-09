import React, { useEffect, useState } from "react";

import { View, Text, TextInput, FlatList } from "react-native";
import { Button } from "../../components/Button/Button";
import { SkillCard } from "../../components/SkillCard.js/SkillCard";
import { styles } from "./styles";

interface ISkillData {
  id: string;
  name: string;
}
export const Home = (): JSX.Element => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);
  const [greting, setGreting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) setGreting("Good morning");
    else if (currentHour >= 12 && currentHour < 18)
      setGreting("Good afternoon");
    else setGreting("Good afternoon");
  }, []);

  const handleAddNewSkill = () => {
    const newSkillData = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((previusState) => [...previusState, newSkillData]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills((previousState) =>
      previousState.filter((skill) => skill.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, Daniel!</Text>
      <Text style={styles.gretting}> {greting} </Text>
      <TextInput
        onChangeText={setNewSkill}
        placeholderTextColor="#555"
        placeholder="New skill"
        style={styles.input}
      />
      <Button title="Add" activeOpacity={0.7} onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
