import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const CardContainer = styled.Pressable`
    width: 95%;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    border: 0.5px solid #a6a6a6;
    elevation: 5;
    background: white;
    margin-top: 10px;
    border-radius: 20px;
`

export const CardImage = styled.Image`
    width: ${Dimensions.get('window').width / 3}px;
    max-width: 300px;
    height: 100%;
`

export const TextName = styled.Text`
    font-size: 18px;
    font-weight: 700;
`

export const TextIngredients = styled.Text`
    font-size: 10px;
    font-weight: 100;
    min-height: 65px;
    width: ${Dimensions.get('window').width - Dimensions.get('window').width / 3 - Dimensions.get('window').width * 0.05}px;
`

export const TextSize = styled.Text`
    font-size: 16px;
    font-weight:
`