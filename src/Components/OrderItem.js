import {
    Box,
    Button,
    Center,
    FlatList,
    HStack,
    Image,
    Pressable,
    Text,
    VStack,
} from 'native-base';
import React from 'react';
import { products } from '../data/Products';
import Colors from '../Colors';
import { useSelector } from 'react-redux';

const OrderItem = () => {
    const cartItems = useSelector((state) => state.cart.itemList);
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack
                            alignItems="center"
                            bg={Colors.white}
                            shadow={1}
                            rounded={10}
                            overflow="hidden"
                        >
                            <Center w="25%" bg={Colors.deepGray}>
                                <Image
                                    source={item.source}
                                    alt={item.name}
                                    w="full"
                                    h={24}
                                    resizeMode="contain"
                                />
                            </Center>
                            <VStack w="60%" px={2}>
                                <Text
                                    isTruncated
                                    color={Colors.black}
                                    bold
                                    fontSize={14}
                                >
                                    {item.name}
                                </Text>
                                <Text color={Colors.lightBlack} mt={2} bold>
                                    ${item.totalPrice}
                                </Text>
                            </VStack>
                            <Center>
                                <Button
                                    bg={Colors.main}
                                    _pressed={{ bg: Colors.main }}
                                    _text={{ color: Colors.white }}
                                >
                                    {item.quantity}
                                </Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        ></FlatList>
    );
};

export default OrderItem;
