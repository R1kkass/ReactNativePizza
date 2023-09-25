import { Text, View } from "react-native"
import { TextError, ViewError } from "./styles"

const Error = () => {
    return (
        <ViewError>
            <TextError>Ошибка</TextError>
        </ViewError>
    )
}

export default Error