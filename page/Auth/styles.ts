import styled from "styled-components/native";

export const AuthView = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background: white;
`;

export const AuthInput = styled.TextInput`
    border: 1px solid orangered;
    width: 90%;
    height: 45px;
    border-radius: 20px;
    background: rgb(255, 240, 230);
    padding-left: 10px;
    padding-right: 10px;
    max-width: 400px;
    elevation: 2;
`;

export const AuthButton = styled.TouchableOpacity`
    background: orangered;
    width: 50%;
    height: 45px;
    border-radius: 10px;
    elevation: 2;
    align-items: center;
    justify-content: center;
    max-width: 300px;
`;

export const AuthText = styled.Text`
    font-size: 36px;
    margin-bottom: 20px;
`

export const AuthButtonText = styled.Text`
    color: white;
    font-size: 20px;
`

export const AuthLink = styled.Text`
    color: orangered;
    font-size: 15px;
`

export const AuthError = styled.Text`
    color: red;
    font-size: 15px;
`