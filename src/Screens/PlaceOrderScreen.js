import { Box, Heading, ScrollView } from 'native-base';
import React from 'react';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import OrderInfo from '../Components/OrderInfo';
import OrderItem from '../Components/OrderItem';
import PlaceOrderModel from '../Components/PlaceOrderModel';

const PlaceOrderScreen = () => {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo
                        title="CUSTOMER"
                        subTitle="Chinh"
                        text="chinh@gmail.com"
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
                        text="Pay Method: Paypal"
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
                        text="Japan, Osaka"
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
                <PlaceOrderModel />
            </Box>
        </Box>
    );
};

export default PlaceOrderScreen;
