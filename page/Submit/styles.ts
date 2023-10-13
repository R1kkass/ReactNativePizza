import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const SubmitView = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    gap: 20px;
    justify-content: center;
    display: block;
    padding-top: 10px;
    min-height: fit-content;
    max-width: 400px;
    margin: 0 auto;
`;

export const SubmitText = styled.Text`
    font-size: 33px;
    text-align: center;
`;

export const TextError = styled.Text`
    color: red;
    height: fit-content;
    padding: 0;
    margin: 0;
`