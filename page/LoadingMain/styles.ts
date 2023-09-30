import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("window").height;

export const LoadingView = styled.View`
    gap: 10px;
    height: 100%;
    padding-bottom: 10px;
`;

