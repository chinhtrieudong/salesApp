import {
    Box,
    HStack,
    Text,
    Pressable,
    Center,
    Image,
    VStack,
    Button,
} from 'native-base';
import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { products } from '../data/Products';
import Colors from '../Colors';
import { FontAwesome } from '@expo/vector-icons';

const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slice(0, 2)}
        renderItem={renderItem}
        renderHiddenItem={hiddenItem}
        showsVerticalScrollIndicator={false}
    />
);

function renderItem(data) {
    return (
        <Pressable>
            <Box ml={6} mb={3}>
                <HStack
                    alignItems="center"
                    bg={Colors.white}
                    shadow={1}
                    rounded={10}
                    overflow="hidden"
                >
                    <Center w="25%" bg={Colors.deepGray}>
                        <Image
                            source={data.item.source}
                            alt={data.item.name}
                            w="full"
                            h={24}
                            resizeMode="contain"
                        />
                    </Center>
                    <VStack w="60%" px={2} space={2}>
                        <Text
                            isTruncated // Truncated when there's not enough space to display
                            color={Colors.black}
                            bold
                            fontSize={12}
                        >
                            {data.item.name}
                        </Text>
                        <Text bold color={Colors.lightBlack}>
                            ${data.item.price}
                        </Text>
                    </VStack>
                    <Center>
                        <Button
                            bg={Colors.main}
                            _text={{ color: Colors.white }}
                            _pressed={{ bg: Colors.main }}
                        >
                            5
                        </Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>
    );
}

// Hidden
const hiddenItem = () => {
    return (
        <Pressable
            w={50}
            roundedTopRight={10}
            roundedBottomRight={10}
            h="88%"
            ml="auto"
            justifyContent="center"
            bg={Colors.red}
        >
            <Center alignItems="center" space={2}>
                <FontAwesome name="trash" size={24} color={Colors.white} />
            </Center>
        </Pressable>
    );
};

const CartItems = () => {
    return (
        <Box mr={6}>
            <Swiper />
        </Box>
    );
};

export default CartItems;
