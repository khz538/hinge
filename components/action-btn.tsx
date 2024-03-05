import { useMemo, ReactNode } from "react";
import { Pressable, View, Text } from "react-native";
import { MotiPressable } from "moti/interactions";
import { colors } from "@/constants/colors";

type ActionBtnProps = {
    onPress?: () => void;
    backgroundColor?: keyof typeof colors | "transparent";
    size?: number;
    style?: any,
    children: ReactNode;
};

const ActionBtn = ({
        onPress,
        backgroundColor = "white",
        size = 52,
        style,
        children
    } : ActionBtnProps) => {
    return (
        <MotiPressable
            onPress={onPress}
            style={[
                {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    height: size,
                    width: size,
                    backgroundColor: backgroundColor === "transparent" ? "transparent" : colors[backgroundColor],
                    borderRadius: size,                },
                style,
            ]}
            animate={useMemo(
                () => ({ hovered, pressed }) => {
                  'worklet'

                  return {
                    opacity: hovered || pressed ? 0.95 : 1,
                  }
                },
                []
              )}
        >
            {children}
        </MotiPressable>
    )
}

export default ActionBtn;
