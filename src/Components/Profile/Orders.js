import React from 'react';
import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base';
import Colors from '../../Colors';

const Orders = () => {
    return (
        <Box h="full" bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Paid Order */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-around"
                        alignItems="center"
                        bg={Colors.subGreen}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            0533663536
                        </Text>
                        <Text
                            fontSize={12}
                            bold
                            color={Colors.black}
                            isTruncated
                        >
                            PAID
                        </Text>
                        <Text
                            fontSize={11}
                            italic
                            color={Colors.black}
                            isTruncated
                        >
                            Oct 1 2023
                        </Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={50}
                            bg={Colors.main}
                            _text={{ color: Colors.white }}
                            _pressed={{
                                bg: Colors.main,
                            }}
                        >
                            $456
                        </Button>
                    </HStack>
                </Pressable>
                {/* Not Paid */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-around"
                        alignItems="center"
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            0533663536
                        </Text>
                        <Text
                            fontSize={12}
                            bold
                            color={Colors.black}
                            isTruncated
                        >
                            NOT PAID
                        </Text>
                        <Text
                            fontSize={11}
                            italic
                            color={Colors.black}
                            isTruncated
                        >
                            Sep 8 2023
                        </Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={50}
                            bg={Colors.red}
                            _text={{ color: Colors.white }}
                            _pressed={{
                                bg: Colors.red,
                            }}
                        >
                            $100
                        </Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    );
};

export default Orders;
