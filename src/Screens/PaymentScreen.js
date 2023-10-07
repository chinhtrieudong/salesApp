import {
    Box,
    Center,
    FormControl,
    HStack,
    Image,
    Input,
    ScrollView,
    Spacer,
    Text,
    VStack,
} from 'native-base';
import React from 'react';
import Colors from '../Colors';
import Buttone from '../Components/Buttone';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const paymentMethodes = [
    {
        image: require('../../assets/images/paypal.png'),
        alt: 'paypal',
        icon: 'Ionicons',
    },
    {
        image: require('../../assets/images/discover.png'),
        alt: 'discover',
        icon: 'FontAwesome',
    },
    {
        image: require('../../assets/images/googlepay.png'),
        alt: 'googlepay',
        icon: 'FontAwesome',
    },
];

const PaymentScreen = () => {
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    PAYMENT METHOD
                </Text>
            </Center>
            {/* Selection */}
            <Box h="full" bg={Colors.subGreen} px={5}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {paymentMethodes.map((i, index) => (
                            <HStack
                                key={index}
                                alignItems="center"
                                bg={Colors.white}
                                px={3}
                                py={1}
                                rounded={10}
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Image
                                        source={i.image}
                                        resizeMode="contain"
                                        w={60}
                                        h={50}
                                        alt={i.alt}
                                    />
                                </Box>
                                {i.icon === 'Ionicons' ? (
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={30}
                                        color={Colors.main}
                                    />
                                ) : (
                                    <FontAwesome
                                        name="circle-thin"
                                        size={30}
                                        color={Colors.main}
                                    />
                                )}
                            </HStack>
                        ))}
                        <Buttone bg={Colors.main} color={Colors.white} mt={5}>
                            CONTINUE
                        </Buttone>
                        <Text italic textAlign="center">
                            Payment method is <Text bold>Paypal</Text> by
                            default
                        </Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default PaymentScreen;
