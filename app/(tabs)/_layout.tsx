import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";
import { HingeIcon, StarIcon, HeartIcon, MessageIcon, PersonIcon } from "@/constants/icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.darkGrey1,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.darkGrey2,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          switch(route.name) {
            case "index":
              return <HingeIcon fill={color} />;
            case "standouts":
              return <StarIcon fill={color} />;
            case "likes":
              return <HeartIcon fill={color} />;
            case "matches":
              return <MessageIcon fill={color} />;
            case "account":
              return <PersonIcon fill={color} />;
            default:
              return null;
          }
        },
      })}
    >
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
