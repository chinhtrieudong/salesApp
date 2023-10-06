import { Box, Flex, Heading, ScrollView, Text } from 'native-base';
import React from 'react';
import { products } from '../data/Products';
import { Pressable } from 'native-base';
import Colors from '../Colors';
import Rating from './Rating';
import { Image } from 'react-native';

function HomeProducts() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {products.map((product) => (
                    <Pressable
                        key={product._id}
                        w="47%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                    >
                        <Image
                            // source={{ uri: '../../assets/images/1.png' }}
                            source={product.source}
                            alt={product.name}
                            w="full"
                            h={24}
                            resizeMode="contain"
                        />
                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>
                                ${product.price}
                            </Heading>
                            <Text fontSize={10} mt={1} isTruncated w="trull">
                                {product.name}
                            </Text>
                            {/* rating */}
                            <Rating value={product.rating} />
                        </Box>
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    );
}

export default HomeProducts;
