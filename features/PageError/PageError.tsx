import { PageErrorText, PageErrorView } from "./styles"
import Button from "@/shared/Button/Button"
import {FC} from 'react'
import { PageErrorProps } from "./interafce"

const PageError:FC<PageErrorProps> = ({onPress}) => {
    return (
        <PageErrorView>
            <PageErrorText>
                Ошибка сервера
            </PageErrorText>
            <Button color={true} large={true} style={{width: '50%',  height: 40}} onPress={onPress}>
                Повторить запрос
            </Button>
        </PageErrorView>
    )
}

export default PageError