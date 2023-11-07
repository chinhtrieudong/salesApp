import { Box, Heading, ScrollView } from 'native-base';
import React from 'react';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import OrderInfo from '../Components/OrderInfo';
import OrderItem from '../Components/OrderItem';
import PlaceOrderModel from '../Components/PlaceOrderModel';
import { useSelector } from 'react-redux';

const PlaceOrderScreen = ({ route }) => {
    const user = useSelector((state) => state.auth);
    const { email, name } = user.currentUser;
    const [deliveryInfo, pay] = route.params;
    const payMethod = pay;

    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo
                        title="CUSTOMER"
                        subTitle={name}
                        text={email}
                        success
                        icon={
                            <FontAwesome
                                name="user"
                                size={30}
                                color={Colors.white}
                            />
                        }
                    />
                    <OrderInfo
                        title="SHIPPING INFO"
                        subTitle="Shipping: Hackfb"
                        text={`Pay Method: ${payMethod.pay}`}
                        danger
                        icon={
                            <FontAwesome5
                                name="shipping-fast"
                                size={30}
                                color={Colors.white}
                            />
                        }
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Adress:"
                        text={`${deliveryInfo.country}, ${deliveryInfo.city}`}
                        danger
                        icon={
                            <Ionicons
                                name="location-sharp"
                                size={30}
                                color={Colors.white}
                            />
                        }
                    />
                </ScrollView>
            </Box>
            {/* Order Item */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItem />
                {/* Total */}
                <PlaceOrderModel data={route} />
            </Box>
        </Box>
    );
};

export default PlaceOrderScreen;
