import styled from "styled-components/native";

interface IProps {
    position: number;
}

export const SizeView = styled.View`
    width: 100%;
    min-height: 30px;
    background: rgb(243, 243, 247);
    position: relative;
    border-radius: 20px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    elevation: 3;
`;

export const SelectView = styled.View<IProps>`
    width: 33%;
    background: #d4d4d4;
    border-radius: 20px;
    height: 33px;
    position: absolute;
    bottom: -2px;
    right: ${(props) => (props.position === 100 ? "0" : "none")};

    left: ${(props) => (props.position === 100 ? "none" : props.position === 50 ? "33%" : '0')};
`;

export const TextView = styled.Pressable`
    width: 33%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
