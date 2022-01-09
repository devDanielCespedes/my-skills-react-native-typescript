import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home/Home";

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};
