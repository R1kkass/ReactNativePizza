import { Text, View } from "react-native";
import InputForm from "@/shared/InputForm/InputForm";
import { useController } from "react-hook-form";
import { Input } from "@/page/Auth/styles";
import { TextError } from "@/page/Submit/styles";

const UnitInput = ({ control, name, rules, placeholder }: any) => {
    const {
        field,
        formState: { errors },
    } = useController({
        control,
        defaultValue: "",
        name,
        rules: rules || { required: `Заполните ${placeholder || name}` },
    });

    return (
        <View>
            <Input
                value={field.value}
                onChangeText={field.onChange}
                placeholder={placeholder}
            />
            {errors?.[name] && <TextError>{errors?.[name]?.message || ""}</TextError>}
        </View>
    );
};

export default UnitInput;
