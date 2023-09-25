import { FC, useState } from "react";
import { ImageTaste, NameTaste, PriceTaste, TasteUnitView } from "./styles";
import { ITasteUnit } from "./interface";
import { useDispatch } from "react-redux";
import { addTaste, deleteTaste } from "../../app/store/TasteSlice";

const TasteUnit: FC<ITasteUnit> = ({ tas }) => {
    const [state, setState] = useState(false);
    const dispatch = useDispatch()

    function taste(){
        if(!state){
            setState((p) => !p)
            dispatch(addTaste(tas))
        } else{
            setState((p) => !p)
            dispatch(deleteTaste(tas._id))
        }
    }

    return (
        <TasteUnitView
            onPress={taste}
            style={{ borderColor: state ? "orangered" : "#dedede" }}
        >
            <ImageTaste source={{ uri: tas.image }} />
            <NameTaste key={tas._id}>{tas.name}</NameTaste>
            <PriceTaste>{tas.price}₽</PriceTaste>
        </TasteUnitView>
    );
};

export default TasteUnit;
