import React from 'react';
import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base';
import Colors from '../Colors';
// import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const navigation = useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={Colors.subGreen}>
            {/* header */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Cart
                </Text>
            </Center>
            {/* If cart is empty
            <CartEmpty /> */}
            {/* CART ITEMS */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItems />
                {/* Total */}
                <Center mt={5}>
                    <HStack
                        rounded={50}
                        justifyContent="space-between"
                        bg={Colors.white}
                        shadow={2}
                        w="90%"
                        pl={5}
                        h={45}
                        alignItems="center"
                    >
                        <Text>Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={50}
                            bg={Colors.main}
                            _text={{
                                color: Colors.white,
                                fontWeight: 'semibold',
                            }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                        >
                            $356
                        </Button>
                    </HStack>
                </Center>
                {/* Checkout */}
                <Center px={5}>
                    <Buttone
                        onPress={() => navigation.navigate('Shipping')}
                        bg={Colors.black}
                        color={Colors.white}
                        mt={10}
                    >
                        CHECKOUT
                    </Buttone>
                </Center>
            </ScrollView>
        </Box>
    );
};

export default CartScreen;
