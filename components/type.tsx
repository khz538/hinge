import { ReactNode } from 'react';
import { View, Text, TextStyle } from 'react-native';
import { typography } from '@/constants/typography';
import { colors } from '@/constants/colors';

type TypeProps = {
    variant?: keyof typeof typography;
    color?: keyof typeof colors;
    textAlign?: "left" | "center" | "right";
    textDecorationLine?: "none" | "underline" | "line-through";
    style?: TextStyle;
    children: ReactNode;
}

const Type = ({
    variant = "body",
    color = "black",
    textAlign = "left",
    textDecorationLine = "none",
    style,
    children,
} : TypeProps) => {
    return (
        <View>
            <Text style={[
                typography[variant],
                {
                    color: colors[color],
                    textAlign,
                    textDecorationLine
                },
                style,
            ]}>{children}</Text>
        </View>
    );
}

export default Type;
