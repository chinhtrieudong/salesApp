import { Box, HStack, Input } from 'native-base';
import { Pressable } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Colors';
import { useNavigation } from '@react-navigation/native';

function HomeSearch(props) {
    const navigation = useNavigation();
    return (
        <HStack
            space={3}
            w="full"
            px={6}
            bg={Colors.main}
            py={4}
            alignItems="center"
            safeAreaTop
        >
            <Input
                placeholder="Search..."
                w="85%"
                bg={Colors.white}
                type="Search"
                variant="filled"
                h={12}
                borderWidth={0}
                _focus={{
                    bg: Colors.white,
                }}
            />
            <Pressable ml={3} onPress={() => navigation.navigate('Cart')}>
                <FontAwesome
                    name="shopping-basket"
                    size={24}
                    color={Colors.white}
                />
                <Box
                    px={1}
                    rounded="full"
                    position="absolute"
                    top={-13}
                    left={2}
                    bg={Colors.red}
                    _text={{
                        color: Colors.white,
                        fontSize: '11px',
                    }}
                >
                    5
                </Box>
            </Pressable>
        </HStack>
    );
}

export default HomeSearch;
