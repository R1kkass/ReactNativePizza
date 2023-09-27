import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const BasketView = styled.View`
    width: 90%;
    margin: 0 auto;
    align-items: center;
    height: 60px;
    justify-content: center;
`;

export const PriceView = styled.View`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    height: 50px;
    background: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PriceText = styled.Text`
    font-size: 20px;
`