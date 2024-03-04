import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="standouts" />
        <Tabs.Screen name="likes" />
        <Tabs.Screen name="matches" />
        <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
