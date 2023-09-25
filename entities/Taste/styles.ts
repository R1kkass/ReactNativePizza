import styled from "styled-components/native";

interface IProps{
    position: number
}

export const SizeView = styled.View`
    width: 100%;
    min-height: 30px;
    background: rgb(243, 243, 247);
    position: relative;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    elevation: 3;
`

export const SelectView = styled.View<IProps>`
    width: 50%;
    background: #d4d4d4;
    border-radius: 20px;
    height: 33px;
    position: absolute;
    margin-top: 5px;
    bottom: -2px;
    right: ${(props)=>props.position===100 ? "0" : "none"};
    left: ${(props)=>props.position!==100 ? "0" : "none"};
`

export const TextView = styled.Pressable`
    width: 50%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextText = styled.Text`
    width: 100%;
    height: 100%;
`