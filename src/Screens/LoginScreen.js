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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import { useDispatch } from 'react-redux';
import { getProfileFetch, userLoginFetch } from '../store/auth-actions';
import { useEffect } from 'react';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const state = {
        email,
        username,
        password,
    };

    useEffect(() => {
        // Use useEffect to replace componentDidMount
        dispatch(getProfileFetch());
    }, []);

    const handleSubmit = () => {
        dispatch(userLoginFetch(state));
    };

    // console.log(AsyncStorage.getItem('token'));

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
                px={6}
                justifyContent="center"
            >
                <Heading>LOGIN</Heading>
                <VStack space={8} pt={6}>
                    <Input
                        InputLeftElement={
                            <MaterialIcons
                                name="email"
                                size={24}
                                color={Colors.main}
                            />
                        }
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="70%"
                        pl={2}
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                    />
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
                        value={password}
                        onChangeText={(password) => setPassword(password)}
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
                        handleSubmit();
                    }}
                >
                    LOGIN
                </Button>
                <Pressable
                    mt={4}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text color={Colors.deepGray}>SIGN UP</Text>
                </Pressable>
            </Box>
        </>
    );
};

export default LoginScreen;
