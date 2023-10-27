import { Box, Heading, ScrollView } from 'native-base';
import React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import OrderInfo from '../Components/OrderInfo';
import OrderItem from '../Components/OrderItem';
import OrderModel from '../Components/OrderModel';

const OrderScreen = () => {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo
                        title="SHIPPING INFO"
                        success
                        subTitle="Shipping: Hackfb"
                        text="Pay Method: Paypal"
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
                <OrderModel />
            </Box>
        </Box>
    );
};

export default OrderScreen;
