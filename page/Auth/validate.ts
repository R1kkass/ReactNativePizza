export function validate(email: string, password: string) {
    if (email.length < 3) {
        return "Введите E-mail";
    } else if (password.length == 0) {
        return "Введите пароль";
    } else if (password.length < 5) {
        return "Пароль слишком короткий";
    }
    return "";
}
