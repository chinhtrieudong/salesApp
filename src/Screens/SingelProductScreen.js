import React, { useEffect } from 'react';
import {
    Box,
    HStack,
    Heading,
    Image,
    ScrollView,
    Spacer,
    Text,
} from 'native-base';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import { useNavigation } from '@react-navigation/native';

import Rating from '../Components/Rating';
import Colors from '../Colors';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';
import { cartActions } from '../store/cart-slice';
import { fetchCartData, sendCartData } from '../store/cart-actions';
import { getProfileFetch } from '../store/auth-actions';
import Toast from 'react-native-toast-message';

const SingelProductScreen = ({ route }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart);
    // console.log(cart);

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const product = route.params;
    const { id, name, price, source, countInStock, numReviews } = product;

    useEffect(() => {
        setTotalPrice(quantity * price);
    }, [quantity]);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (cart.change) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Out of stock',
            text2: 'Please Choose another product!',
        });
    };

    const handleAddToCart = () => {
        if (countInStock > 0) {
            dispatch(
                cartActions.addToCart({
                    id,
                    name,
                    price,
                    source,
                    quantity,
                    numReviews,
                    totalPrice,
                }),
            );
            // navigation.navigate('Cart');
        } else if (countInStock === 0) {
            showToast();
        }
        // dispatch(getProfileFetch());
    };

    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsHorizontalScrollIndicator={false}>
                <Image
                    source={product.source}
                    alt="Image"
                    w="full"
                    h={300}
                    resizeMode="contain"
                />
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    {product.name}
                </Heading>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
                <HStack space={2} alignItems="center" my={5}>
                    {product.countInStock > 0 ? (
                        <>
                            <NumericInput
                                onChange={(value) => setQuantity(value)}
                                value={quantity}
                                totalWidth={140}
                                totalHeight={30}
                                iconSize={25}
                                step={1}
                                maxValue={product.countInStock}
                                minValue={0}
                                borderColor={Colors.deepGray}
                                rounded
                                textColor={Colors.black}
                                iconStyle={{ color: Colors.white }}
                                rightButtonBackgroundColor={Colors.main}
                                leftButtonBackgroundColor={Colors.main}
                            />
                        </>
                    ) : (
                        <Heading bold color={Colors.black} fontSize={19}>
                            Out of stock
                        </Heading>
                    )}
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        {totalPrice}
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    {product.description}
                </Text>
                <Buttone
                    onPress={() => {
                        handleAddToCart();
                    }}
                    bg={Colors.main}
                    color={Colors.white}
                    mt={10}
                    mb={10}
                >
                    ADD TO CART
                </Buttone>
                {/* Review */}
                <Review />
            </ScrollView>
        </Box>
    );
};

export default SingelProductScreen;
