import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../Auth/styles";
import { SubmitScroll, SubmitText, SubmitView } from "./styles";
import Button from "../../shared/Button/Button";

const Submit = () => {
    return (
        <SafeAreaView>
            <SubmitScroll>
                <SubmitView>
                    <SubmitText>Оформление заказа</SubmitText>
                    <Input placeholder="Имя" />
                    <Input placeholder="Номер телефона" />
                    <Input placeholder="Город" />
                    <Input placeholder="Улица" />
                    <Input placeholder="Дом" />
                    <Input placeholder="Квартира" />
                    <Button large={true} color={true}>
                        Подтвердить
                    </Button>
                </SubmitView>
            </SubmitScroll>
        </SafeAreaView>
    );
};

export default Submit;
