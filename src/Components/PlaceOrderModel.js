import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, HStack, Modal, VStack, Text, Button } from 'native-base';

import Buttone from './Buttone';
import Colors from '../Colors';
import { OrdersInfos } from '../data/OrdersInfos';

const PlaceOrderModel = ({ data }) => {
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false);
    const ordersInfoList = OrdersInfos();
    const state = data.params;

    return (
        <Center>
            <Buttone
                onPress={() => setShowModel(true)}
                bg={Colors.black}
                color={Colors.white}
                mt={5}
            >
                SHOW TOTAL
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
                        <Button
                            flex={1}
                            bg={Colors.main}
                            h={45}
                            _text={{ color: Colors.white }}
                            onPress={() => {
                                navigation.navigate('Order', state);
                                setShowModel(false);
                            }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                        >
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default PlaceOrderModel;
