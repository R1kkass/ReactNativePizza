import { useFocusEffect } from "@react-navigation/native"
import { useAppDispatch } from "../../app/store/hooks"
import * as SecureStore from "expo-secure-store";
import { addBasketId, addToken } from "../../app/store/StorageSlice";

const Wrapper = () => {

    const dispatch = useAppDispatch()

    useFocusEffect(()=>{
        SecureStore.getItemAsync('basketId').then(async (e)=>{
            if(!e){
                dispatch(addBasketId(Date.now()))
                await SecureStore.setItemAsync('basketId', String(Date.now()))
            } else{
                dispatch(addBasketId(e))
            }
        })
        SecureStore.getItemAsync('token').then(e=>{
            if(e){
                dispatch(addToken(e))
            }            
        })
    })

    return null
}

export default Wrapper