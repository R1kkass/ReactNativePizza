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

const Auth = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function login() {
        if(!validate(email, password)){
            AuthApi.login({ email, password })
            .then(async (e) => {
                await SecureStore.setItemAsync("token", String(e));
                setError('')
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
            <AuthInput inputMode="email" onChangeText={(e) => setEmail(e)} placeholder="E-Mail" />
            <AuthInput
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
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
