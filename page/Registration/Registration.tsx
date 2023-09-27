import { useState } from "react";
import {
    AuthButton,
    AuthButtonText,
    AuthError,
    AuthInput,
    AuthText,
    AuthView,
} from "./styles";
import { validate } from "./validate";
import { AuthApi } from "../../app/api/auth";
import * as SecureStore from "expo-secure-store";
import { addBasketId, addToken } from "../../app/store/StorageSlice";
import { appJwtDecode } from "../../app/jwtDecode";
import { useAppDispatch } from "../../app/store/hooks";

const Registration = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useAppDispatch();

    function registration() {
        if (!validate(email, password, repeatPassword)) {
            AuthApi.registration({
                email,
                password,
                basketId:
                    Number(SecureStore.getItemAsync("basketId")) || Date.now(),
            })
                .then(async (e) => {
                    setError("");
                    await SecureStore.setItemAsync("token", String(e));
                    dispatch(addToken(e));
                    dispatch(addBasketId(appJwtDecode(e).basketId));
                    navigation.navigate("Главная");
                })
                .catch((e) => {
                    setError(e.response.data.message);
                });
        } else {
            setError(validate(email, password, repeatPassword));
        }
    }

    return (
        <AuthView>
            <AuthText>Регистрация</AuthText>
            <AuthInput onChangeText={(e) => setEmail(e)} placeholder="E-Mail" />
            <AuthInput
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
                placeholder="Пароль"
            />
            <AuthInput
                secureTextEntry={true}
                onChangeText={(e) => setRepeatPassword(e)}
                placeholder="Повторите пароль"
            />
            <AuthButton onPress={registration}>
                <AuthButtonText>Зарегистрироваться</AuthButtonText>
            </AuthButton>
            <AuthError>{error}</AuthError>
        </AuthView>
    );
};

export default Registration;
