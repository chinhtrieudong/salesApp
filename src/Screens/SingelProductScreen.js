import { View, Text } from 'react-native';
import React from 'react';
import { Box, HStack, Heading, Image, ScrollView, Spacer } from 'native-base';
import Colors from '../Colors';
import Rating from '../Components/Rating';
import NumericInput from 'react-native-numeric-input';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';

const SingelProductScreen = ({ value }) => {
    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsHorizontalScrollIndicator={false}>
                <Image
                    source={require('../../assets/images/6.png')}
                    alt="Image"
                    w="full"
                    h={300}
                    resizeMode="contain"
                />
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    new t-shirt
                </Heading>
                <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    <NumericInput
                        value={value}
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.deepGray}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{ color: Colors.white }}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                    />
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        $400
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    Getting Started NativeBase is a component library that
                    enables devs to build universal design systems. It is built
                    on top of React Native, allowing you to develop apps for
                    Android, iOS and the Web. IMPORTANT MESSAGE — If you are
                    starting a new project with NativeBase, we recommend using
                    gluestack-ui instead. Know More. NativeBase v1.x :
                    NativeBase started out as an open source framework that
                    enabled developers to build high-quality mobile apps using
                    React Native.
                </Text>
                <Buttone bg={Colors.main} color={Colors.white} mt={10} mb={10}>
                    ADD TO CART
                </Buttone>
                {/* Review */}
                <Review />
            </ScrollView>
        </Box>
    );
};

export default SingelProductScreen;
