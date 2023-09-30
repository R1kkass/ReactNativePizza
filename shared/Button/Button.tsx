import { FC } from "react"
import { MyTouch, TextTouch } from "./style"
import { IButton } from "./interface"


const Button:FC<IButton> = (props) => {
    return(
        <MyTouch {...props}>
            <TextTouch large={props?.large || false} color={props?.color}>{props?.children}</TextTouch>
        </MyTouch>
    )
}

export default Button