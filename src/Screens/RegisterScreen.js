import React, { useState } from 'react';
import {
    Box,
    Button,
    Heading,
    Image,
    Input,
    VStack,
    Pressable,
    Text,
} from 'native-base';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../Colors';
import { userPostFetch } from '../store/auth-actions';
import { useDispatch } from 'react-redux';

const RegisterScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const state = {
        userName,
        password,
        email,
    };

    // console.log(state);

    const handleSubmit = (event) => {
        // event.preventDefault();
        dispatch(userPostFetch(state));
    };

    return (
        <>
            <Box flex={1} bg={Colors.black}>
                <Image
                    flex={1}
                    alt="Logo"
                    resizeMethod="cover"
                    size={'lg'}
                    w={'full'}
                    source={require('../../assets/cover.png')}
                />
            </Box>
            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="6px"
                justifyContent="center"
            >
                <Heading>SIGN UP</Heading>
                <VStack space={8} pt="6">
                    {/* USER NAME */}
                    <Input
                        InputLeftElement={
                            <FontAwesome
                                name="user"
                                size={20}
                                color={Colors.main}
                            />
                        }
                        variant="underlined"
                        placeholder="John Doe"
                        w="70%"
                        pl={2}
                        type="text"
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                    />
                    {/* EMAIL */}
                    <Input
                        InputLeftElement={
                            <MaterialIcons
                                name="email"
                                size={20}
                                color={Colors.main}
                            />
                        }
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="70%"
                        pl={2}
                        type="email"
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                        onChangeText={(text) => setEmail(text)}
                    />
                    {/* PASSWORD */}
                    <Input
                        InputLeftElement={
                            <Ionicons
                                name="eye"
                                size={20}
                                color={Colors.main}
                            />
                        }
                        variant="underlined"
                        placeholder="********"
                        w="70%"
                        type="password"
                        pl={2}
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                        onChangeText={(text) => setPassword(text)}
                    />
                </VStack>
                <Button
                    _pressed={{
                        bg: Colors.main,
                    }}
                    _text={{
                        color: Colors.white,
                    }}
                    my={30}
                    w="40%"
                    rounded={50}
                    bg={Colors.main}
                    onPress={() => {
                        // navigation.navigate('Bottom');
                        handleSubmit();
                    }}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
                    <Text color={Colors.deepGray}>LOGIN</Text>
                </Pressable>
            </Box>
        </>
    );
};

export default RegisterScreen;
