import { Center, Icon, ScrollView, Text, Pressable, Button } from 'native-base';
import {
    MaterialCommunityIcons,
    FontAwesome5,
    Ionicons,
    Entypo,
} from '@expo/vector-icons';
import Colors from '../Colors';
import { useState } from 'react';

const categoryItems = [
    { name: 'Shoes', logo: <MaterialCommunityIcons name="shoe-formal" /> },
    {
        name: 'Clothes',
        logo: <Ionicons name="shirt-outline" size={24} color="black" />,
    },
    {
        name: 'Head Phone',
        logo: <FontAwesome5 name="headphones" size={24} color="black" />,
    },
    {
        name: 'Game',
        logo: <Ionicons name="game-controller" size={24} color="black" />,
    },
    {
        name: 'Watch',
        logo: <Entypo name="stopwatch" size={24} color="black" />,
    },
    { name: 'Laptop', logo: <Entypo name="laptop" size={24} color="black" /> },
];

const Category = () => {
    return (
        <ScrollView
            flex={1}
            px={6}
            // mt={7}
            my={5}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {categoryItems.map((item) => (
                <Center space={5} mr={6} key={item.name}>
                    <Button
                        rounded={100}
                        size="70px"
                        bg={Colors.white}
                        shadow="1"
                        _pressed={{
                            bg: Colors.deepGray,
                            // _text: {
                            //     color: Colors.white,
                            // },
                        }}
                    >
                        <Icon
                            as={item.logo}
                            size={10}
                            color={Colors.black}
                            // _pressed={{ color: Colors.white }}
                        />
                    </Button>
                    <Text mt={2}>{item.name}</Text>
                </Center>
            ))}
        </ScrollView>
    );
};

export default Category;
