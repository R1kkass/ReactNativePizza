import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get('window').height


export const PageErrorView = styled.View`
    width: 100%;
    height: ${height-100}px;
    margin: 0 auto;
    align-items: center;
    gap: 20px;
    flex: 1;
    justify-content: center;
`;

export const PageErrorText = styled.Text`
    font-size: 24px;
    color: orangered;
`;
