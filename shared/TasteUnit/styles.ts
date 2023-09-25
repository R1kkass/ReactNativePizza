import styled from "styled-components/native";
import { Dimensions } from "react-native";
export const TasteView = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;   
    gap: 10px; 
`

export const TasteUnitView = styled.Pressable`
    padding: 7px;
    width: ${Dimensions.get('window').width/3 - 20}px;
    height: ${Dimensions.get('window').width/3 + 20}px;
    elevation: 3;
    background: white;
    overflow: hidden;
    border:1px solid #dedede;
    border-radius: 10px;
    display: flex;
    aling-items: space-between;
` 

export const ImageTaste = styled.Image`
    height: 65%;
    width: 100%;
    object-fit: contain;
`

export const NameTaste = styled.Text`
    font-size: 12px;
    text-align: center;
    height: 20%;
`

export const PriceTaste = styled.Text`
    font-size: 16px;
    text-align: center;
`

export const AddTasteText = styled.Text`
    font-size: 20px;
`