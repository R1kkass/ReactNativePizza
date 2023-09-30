import Button from "@/shared/Button/Button";
import { FC } from "react";
import { IButtonSubmit } from "./interface";

const ButtonSubmit: FC<IButtonSubmit> = ({ onPress }) => {
    return (
        <Button onPress={onPress} large={true} color={true}>
            К оформлению заказа
        </Button>
    );
};

export default ButtonSubmit;
