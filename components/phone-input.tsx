import { colors } from "@/constants/colors";
import { View, StyleSheet, Text, TextInput } from "react-native";

type PhoneInputProps = {}

const PhoneInput = () => {
    return (
        <TextInput style={{
            backgroundColor: colors.lightGrey1,
            height: 50,
        }}>
            <Text>PhoneInput</Text>
        </TextInput>
    )
}

export default PhoneInput;
