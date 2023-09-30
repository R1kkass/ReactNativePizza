import { SafeAreaView } from "react-native-safe-area-context";
import { SubmitText, SubmitView, TextError } from "./styles";
import Button from "@/shared/Button/Button";
import { Alert, ScrollView, View } from "react-native";
import InputForm from "@/shared/InputForm/InputForm";
import { useForm } from "react-hook-form";
import { ISubmit } from "@/app/services/interface";
import UnitInput from "@/entities/UnitInput/UnitInput";

const Submit = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISubmit>();

    const onSubmit = (data: any) => Alert.alert(JSON.stringify(data));

    return (
        <SafeAreaView>
            <ScrollView
                style={{ height: "100%" }}
                contentContainerStyle={{
                    display: "flex",
                    marginTop: "auto",
                    marginBottom: "auto",
                    justifyContent: "center",
                }}
                alwaysBounceHorizontal={true}
            >
                <SubmitView>
                    <SubmitText>Оформление заказа</SubmitText>
                    <View>
                        <InputForm
                            control={control}
                            placeholder="Имя"
                            {...register("name", { required: "Заполните имя" })}
                            message={"Запоните имя"}
                        />
                        {errors?.name && (
                            <TextError>{errors?.name?.message}</TextError>
                        )}
                    </View>
                    <UnitInput
                        errors={errors}
                        name="phone"
                        control={control}
                        placeholder="Номер телефона"
                        rules={{
                            required: "Заполните номер телефона",
                            minLength: {
                                value: 10,
                                message: "Заполните номер полностью",
                            },
                        }}
                    />
                    <UnitInput
                        name="city"
                        control={control}
                        placeholder="Город"
                        rules={{
                            required: "Заполните город",
                            minLength: {
                                value: 3,
                                message: "Заполните город полностью",
                            },
                        }}
                    />
                    <UnitInput
                        register={register}
                        name="street"
                        control={control}
                        placeholder="Улица"
                        rules={{
                            required: "Заполните улицу",
                            minLength: {
                                value: 3,
                                message: "Заполните улицу полностью",
                            },
                        }}
                    />
                    <UnitInput
                        register={register}
                        name="house"
                        control={control}
                        placeholder="Дом"
                        rules={{
                            required: "Заполните дом",
                            minLength: {
                                value: 3,
                                message: "Заполните дом полностью",
                            },
                        }}
                    />
                    <UnitInput
                        register={register}
                        name="apartament"
                        control={control}
                        placeholder="Квартира"
                        rules={{
                            required: false,
                        }}
                    />
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        large={true}
                        color={true}
                    >
                        Подтвердить
                    </Button>
                </SubmitView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Submit;
