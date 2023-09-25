export function validate(
    email: string,
    password: string,
    passwordRepeat: string
): string {
    if (email.length < 3) {
        return "Введите E-Mail";
    } else if (password.length < 8) {
        return "Введите пароль";
    } else if (password !== passwordRepeat) {
        return "Пароли разные";
    }
    return "";
}
