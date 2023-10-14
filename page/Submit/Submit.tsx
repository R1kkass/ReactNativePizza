import { SafeAreaView } from "react-native-safe-area-context";
import { SubmitText, SubmitView, TextError } from "./styles";
import Button from "@/shared/Button/Button";
import { Alert, ScrollView, Text, View } from "react-native";
import InputForm from "@/shared/InputForm/InputForm";
import { useForm } from "react-hook-form";
import { ISubmit } from "@/app/services/interface";
import UnitInput from "@/entities/UnitInput/UnitInput";
import { useAppSelector } from "@/app/store/hooks";
import { basketApi } from "@/app/services/BasketService";
import Loading from "@/entities/Loading/Loading";
import NotificationError from "@/entities/NotificationError/NotificationError";

const Submit = ({ navigation }: any) => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISubmit>();
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const { data: basket, refetch } = basketApi.useGetBasketQuery(
        basketId || "0"
    );

    const token = useAppSelector((state) => state.storageeReducer.token);

    const [sendBasket, { isSuccess, isError, isLoading }] =
        basketApi.useSendBasketMutation();

    const onSubmit = async (data: any) => {
        data.count = basket?.reduce((acc, bask) => acc + bask.count, 0);
        data.date = Date.now();
        data.price = basket?.reduce((acc, bask) => acc + Number(bask.price), 0);
        data.product = basket;
        data.token = token;
        await sendBasket(data);
        if (isSuccess) {
            navigation.navigate("Вход");
        }
    };

    return (
        <SafeAreaView>
            {isError && <NotificationError style={{top: 60}}/>}

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
                {isLoading && <Loading />}
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
                        name="apartment"
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
                        style={{ minWidth: "100%" }}
                    >
                        Подтвердить
                    </Button>
                </SubmitView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Submit;
