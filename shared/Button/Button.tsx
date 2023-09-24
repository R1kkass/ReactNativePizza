import { FC } from "react"
import { MyTouch, TextTouch } from "./style"
import { IButton } from "./interface"


const Button:FC<IButton> = (props) => {
    return(
        <MyTouch {...props}>
            <TextTouch {...props}></TextTouch>
        </MyTouch>
    )
}

export default Button