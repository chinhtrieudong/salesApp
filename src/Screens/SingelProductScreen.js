import React from 'react';
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
import NumericInput from 'react-native-numeric-input';
import { useNavigation } from '@react-navigation/native';

import Rating from '../Components/Rating';
import Colors from '../Colors';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';

const SingelProductScreen = ({ route }) => {
    const [value, setValue] = useState(0);
    const navigation = useNavigation();
    const product = route.params;
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
                                value={value}
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
                        {product.price}
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    {product.description}
                </Text>
                <Buttone
                    onPress={() => navigation.navigate('Cart')}
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
