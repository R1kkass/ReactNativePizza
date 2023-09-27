import styled from 'styled-components/native'

interface IProps{
    large?: boolean;
    color?: boolean
}

export const MyTouch = styled.TouchableOpacity<IProps>`
    width: ${props=>props?.large ? '100%' : '100px'};
    height: ${props=>props?.large ? '50px' : '20px'};
    background: ${(props)=>props.color ? 'orangered' : 'rgb(255, 240, 230)'};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

export const TextTouch = styled.Text<IProps>`
    color: ${props=>props?.color ? 'white' : "orangered"};
    font-size: ${props=>props?.large ? '18px' : '16px'};
    align-items: center;

`