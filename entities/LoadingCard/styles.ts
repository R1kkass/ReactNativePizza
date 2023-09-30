import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("window").height;

export const LoadingView = styled.View`
    gap: 10px;
    height: 100%;
    padding-bottom: 10px;
`;

export const LoadingUnit = styled.View`
    width: 100%;
    height: 145px;
`;

export const LoadingUn = styled.View`
    width: 95%;
    height: 120px;
    background: white;
    overflow: hidden;
    border-radius: 30px;
    elevation: 5;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
`;