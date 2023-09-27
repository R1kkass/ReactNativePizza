import { useState } from "react";
import {
    AuthButton,
    AuthButtonText,
    AuthError,
    AuthInput,
    AuthLink,
    AuthText,
    AuthView,
} from "./styles";
import { AuthApi } from "../../app/api/auth";
import * as SecureStore from "expo-secure-store";
import { validate } from "./validate";
import { appJwtDecode } from "../../app/jwtDecode";
import { useAppDispatch } from "../../app/store/hooks";
import { addBasketId, addToken } from "../../app/store/StorageSlice";

const Auth = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useAppDispatch()

    async function login() {
        if(!validate(email, password)){
            AuthApi.login({ email, password })
            .then(async (e) => {
                await SecureStore.setItemAsync("token", String(e));
                setError('')
                dispatch(addToken(e))
                dispatch(addBasketId(appJwtDecode(e).basketId))
                await SecureStore.setItemAsync("basketId", String(appJwtDecode(String(e)).basketId));
                navigation.navigate('Главная')
            })
            .catch((e) => {
                setError("Неверный пароль или E-mail");
            });
        } else{
            setError(validate(email, password))
        }
    }

    return (
        <AuthView>
            <AuthText>Вход</AuthText>
            <AuthInput inputMode="email" onChangeText={(e:string) => setEmail(e)} placeholder="E-Mail" />
            <AuthInput
                secureTextEntry={true}
                onChangeText={(e: string) => setPassword(e)}
                placeholder="Пароль"
            />
            <AuthButton onPress={login}>
                <AuthButtonText>Войти</AuthButtonText>
            </AuthButton>

            <AuthLink onPress={() => navigation.navigate("Регистрация")}>
                Зарегистрироваться
            </AuthLink>
            <AuthError>{error}</AuthError>
        </AuthView>
    );
};

export default Auth;
