import { FC, useState } from "react";
import { ImageTaste, NameTaste, PriceTaste, TasteUnitView } from "./styles";
import { ITasteUnit } from "./interface";

const TasteUnit: FC<ITasteUnit> = ({ tas }) => {
    const [state, setState] = useState(false);

    return (
        <TasteUnitView
            onPress={() => setState((p) => !p)}
            style={{ borderColor: state ? "orangered" : "#dedede" }}
        >
            <ImageTaste source={{ uri: tas.image }} />
            <NameTaste key={tas._id}>{tas.name}</NameTaste>
            <PriceTaste>{tas.price}₽</PriceTaste>
        </TasteUnitView>
    );
};

export default TasteUnit;
