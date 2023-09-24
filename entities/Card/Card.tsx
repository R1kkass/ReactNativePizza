import { View } from "react-native"
import { CardContainer, CardImage, TextIngredients, TextName } from "./styles"
import {FC, useState} from 'react'
import { ICard } from "./interface"
import { InView } from "react-native-intersection-observer"
import { MyTouch } from "../../shared/Button/style"
import Button from "../../shared/Button/Button"
import { useFonts } from "expo-font";

const Card:FC<ICard> = ({image, price, name, category, ingredients, navigation, _id}) => {
    
    const [view, setView] = useState(false)
    
    function vis(bol: boolean){
        if(bol){
            setView(true)
        } else{
            setView(false)
        }
    }

    const [fontsLoaded, fontError] = useFonts({
        'Comfortaa': require('../../assets/fonts/Comfortaa.ttf'),
      });

      if (!fontsLoaded && !fontError) {
        return null;
      }

    return(
        <CardContainer  onPress={()=>navigation.navigate('Товар', {_id, name, price, image})}>
            <InView style={{minHeight: 130, minWidth: 130}} onChange={(bol)=>vis(bol)}>
                {
                    view &&
                    <CardImage style={{resizeMode: 'stretch'}} source={{
                        uri: image
                    }}/>
                }
            </InView>
            <View>
                <TextName style={{fontFamily: 'Comfortaa'}}>
                    {name}
                </TextName>
                <TextIngredients>
                    {ingredients}
                </TextIngredients>
                <Button>от {category==="Пицца" ? Number(price)-300 : price} ₽</Button>
            </View>
        </CardContainer>
    )
}

export default Card
