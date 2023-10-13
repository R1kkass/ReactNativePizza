import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const CardContainer = styled.Pressable`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    border: 0.5px solid #a6a6a6;
`

export const CardImage = styled.Image`
    width: ${Dimensions.get('window').width / 3}px;
    max-width: 150px;
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
    width: ${Dimensions.get('window').width - Dimensions.get('window').width / 3}px;
`

export const TextSize = styled.Text`
    font-size: 14px;
    font-weight: 300;
`

export const CounterView = styled.View`
    position: absolute;
    right: 10px;
    bottom: 5px;
`

export const TextPrice = styled.Text`
    font-size: 20px;
    bottom: 15px;
    margin-top: auto;
`