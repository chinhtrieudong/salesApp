import { Pressable, ScrollView, Image } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Colors from '../Colors';
import Rating from './Rating';
import { products } from '../data/Products';
import { axiosInstance } from '../api/request';
import Category from './Category';

function HomeProducts() {
    const navigation = useNavigation();
    const [data, setData] = useState();

    const fetchHandler = async () => {
        const response = await axiosInstance.get('/api/v1/products', {
            params: {
                current: 1,
                pageSize: 5,
            },
        });
        try {
            if (response) {
                setData(response.data.data.result);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHandler();
    }, []);

    // console.log(data);

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Category />
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {products.map((product) => (
                    <Pressable
                        onPress={() => navigation.navigate('Single', product)}
                        key={product.id}
                        w="47%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                        alignItems="center"
                    >
                        <Box>
                            <Image
                                // source={{ uri: '../../assets/images/1.png' }}
                                source={product.source}
                                alt={product.name}
                                w="full"
                                size="2xl"
                            />
                        </Box>
                        <Box px={4} pt={1} w="full">
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
