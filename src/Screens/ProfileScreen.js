import { Box, Center, Heading, Image, Text } from 'native-base';
import React from 'react';
import Colors from '../Colors';
import Tabs from '../Components/Profile/Tabs';

const ProfileScreen = () => {
    return (
        <>
            <Center bg={Colors.main} pt={10} pb={6}>
                <Image
                    source={{
                        uri: 'https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png',
                    }}
                    alt="profile"
                    w={24}
                    h={24}
                    resizeMode="cover"
                />
                <Heading
                    bold
                    fontSize={15}
                    isTruncated
                    my={2}
                    color={Colors.white}
                >
                    CHINH
                </Heading>
                <Text italic fontSize={10} color={Colors.white}>
                    Joined Oct 1 2023
                </Text>
            </Center>
            {/* TABS */}
            <Tabs />
        </>
    );
};

export default ProfileScreen;
