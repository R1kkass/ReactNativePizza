import styled from 'styled-components/native'
import { IButton } from './interface';


export const MyTouch = styled.TouchableOpacity<Pick<IButton, 'color' | 'large'>>`
    width: ${props=>props?.large ? '100%' : '100px'};
    height: ${props=>props?.large ? '50px' : '20px'};
    background: ${(props)=>props.color ? 'orangered' : 'rgb(255, 240, 230)'};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

export const TextTouch = styled.Text<Pick<IButton, 'color' | 'large'>>`
    color: ${props=>props?.color ? 'white' : "orangered"};
    font-size: ${props=>props?.large ? '18px' : '16px'};
    align-items: center;

`