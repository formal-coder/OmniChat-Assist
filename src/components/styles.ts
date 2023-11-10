import { useColorScheme } from "react-native";
import { styled } from "styled-components/native";
import { theme } from "./theme";
// import { Text } from "react-native";

// const isDark = useColorScheme() === "dark"

export const CustomText = styled.Text`
    color: ${theme.primary.darkBlackColor};
`
export const CustomTextInput = styled.TextInput`
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: ${theme.primary.color},
    borderRadius: 6,
    width: '80%',
    color: ${theme.primary.darkBlackColor},
    padding: 8,
`