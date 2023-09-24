import {ScrollView, Image, Text} from 'react-native'
import {FC} from 'react'
import { IProduct } from './interface'
import { ButtonView, NameProduct, ProductScroll } from './styles'
import Button from '../../shared/Button/Button'

const Product:FC<IProduct> = ({route}) => {

    const {image, name, price} = route.params 


    
    return(
        <>
            <ProductScroll>
                <Image style={{minHeight: 400, width: '100%'}} source={{
                    uri: image
                }}/>
                <NameProduct>{name}</NameProduct>
                <Text>{price}</Text>
            </ProductScroll>
            <ButtonView>
                <Button large={true} color={true}>Добавить в корзину {price}₽</Button>
            </ButtonView>
        </>
    )
}

export default Product