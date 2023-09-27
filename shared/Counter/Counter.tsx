import { CounterText, CounterView } from "./styles";
import {FC} from 'react'
import { ICounter } from "./interface";
import { useAppSelector } from "../../app/store/hooks";
import { BasketApi } from "../../app/api/basket";

const Counter:FC<ICounter> = ({count, id, refetch}) => {

    const basketId = useAppSelector(state=>state.storageeReducer.basketId)

    function update(count: number) {
        if(count>0){
            BasketApi.updateProduct({id, basketId, count})
        }else{
            BasketApi.deleteProduct(id, basketId)
        }
        refetch()
    }

    return (
        <CounterView>
            <CounterText onPress={()=>{update(count-1)}}>-</CounterText>
            <CounterText>{count}</CounterText>
            <CounterText onPress={()=>{update(count+1)}}>+</CounterText>
        </CounterView>
    );
};

export default Counter;
