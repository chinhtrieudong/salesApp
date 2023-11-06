import React from 'react';
import { Box, Button, Center, HStack, Text, View } from 'native-base';
import Colors from '../Colors';
// import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Notification from '../Components/Notifications/Notification';
import Toast from 'react-native-toast-message';

const CartScreen = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart);
    // const notif = useSelector(state => state.notif.notification)
    const totalPrice = cart.itemList.reduce((accumulator, currenItem) => {
        return accumulator + currenItem.totalPrice;
    }, 0);

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Cart Empty!',
            // text2: 'Please Choose another product!',
        });
    };

    const handleCheckOut = () => {
        if (cart.totalQuantity) {
            navigation.navigate('Shipping');
        } else {
            showToast();
            // <Notification type="warning" message="Cart Empty!" />;
        }
    };
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
            <View>
                {/* Thay thế ScrollView = View để không bị lỗi nested */}
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
                            // _text={{
                            //     color: Colors.white,
                            //     fontWeight: 'semibold',
                            // }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                        >
                            <Text color={Colors.white} fontWeight="semibold">
                                $ {totalPrice.toFixed(2)}
                            </Text>
                        </Button>
                    </HStack>
                </Center>
                {/* Checkout */}
                <Center px={5}>
                    <Buttone
                        onPress={handleCheckOut}
                        bg={Colors.black}
                        color={Colors.white}
                        mt={10}
                    >
                        CHECKOUT
                    </Buttone>
                </Center>
            </View>
            {/* </ScrollView> */}
        </Box>
    );
};

export default CartScreen;
