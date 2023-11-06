import React, { useEffect, useState } from 'react';
import {
    Center,
    HStack,
    Modal,
    VStack,
    Text,
    Button,
    Pressable,
    Image,
} from 'native-base';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors';
import Buttone from './Buttone';
import { OrdersInfos, calculateTotalPrice } from '../data/OrdersInfos';
import { sendOrderData } from '../store/order-actions';

const OrderModel = ({ data }) => {
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const cartItems = useSelector((state) => state.cart);
    const currentUser = useSelector((state) => state.auth.currentUser.id);

    const { itemList, totalQuantity } = cartItems;

    const ordersInfoList = OrdersInfos();

    // Calculation total price
    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cartItems));
    }, [cartItems]);

    const state = [
        ...data.params,
        { cartItems: itemList, totalQuantity, totalPrice },
    ];

    const handlePay = () => {
        sendOrderData(currentUser, state);
    };

    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </Buttone>
            <Modal
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                size="lg"
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {ordersInfoList.map((i, index) => (
                                <HStack
                                    key={index}
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text
                                        color={
                                            i.color === 'main'
                                                ? Colors.main
                                                : Colors.black
                                        }
                                        bold
                                    >
                                        {i.price}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable
                            w="full"
                            justifyContent="center"
                            bg={Colors.paypal}
                            h={45}
                            rounded={2}
                            overflow="hidden"
                            onPress={() => setShowModel(false)}
                        >
                            <Image
                                source={require('../../assets/images/paypal.png')}
                                alt="paypal"
                                resizeMode="contain"
                                w="full"
                                h={34}
                            />
                        </Pressable>
                        <Button
                            w="full"
                            mt={3}
                            bg={Colors.black}
                            h={45}
                            _text={{ color: Colors.white }}
                            onPress={() => {
                                navigation.navigate('Home');
                                setShowModel(false);
                                handlePay();
                            }}
                            _pressed={{
                                bg: Colors.black,
                            }}
                        >
                            PAY
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModel;
