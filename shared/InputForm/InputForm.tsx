import { useController } from "react-hook-form";
import { Input } from "@/page/Auth/styles";

const InputForm = ({ name, control, placeholder }: any) => {
    
    const { field } = useController({
        control,
        defaultValue: "",
        name,
    });

    return (
        <Input
            placeholder={placeholder}
            value={field.value}
            onChangeText={field.onChange}
        />
    );
};

export default InputForm;
