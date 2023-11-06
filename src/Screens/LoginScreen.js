import {
    Box,
    Button,
    Heading,
    FormControl,
    WarningOutlineIcon,
    Image,
    Input,
    VStack,
    Pressable,
    Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../Colors';
import { userLoginFetch } from '../store/auth-actions';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    const currentUser = useSelector((state) => state.auth);
    const currentUserData = currentUser.currentUser;

    const user = {
        username,
        password,
    };
    useEffect(() => {
        if (currentUserData.id) {
            console.log('currentUserData:', currentUserData.id);
            navigation.navigate('Bottom');
        }
    }, [currentUserData, navigation]);

    const handleSubmit = () => {
        dispatch(userLoginFetch(user));

        if (currentUserData.id) {
            setIsWrong(false);
        } else {
            setIsWrong(true);
        }
    };

    return (
        <>
            <Box flex={1} bg={Colors.black}>
                <Image
                    flex={1}
                    alt="Logo"
                    resizeMethod="resize"
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
                <FormControl isInvalid={isWrong}>
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

                        <FormControl.ErrorMessage
                            mt={-5}
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            Incorrect password or email address.
                        </FormControl.ErrorMessage>

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
                        <FormControl.ErrorMessage
                            mt={-5}
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            Incorrect password or email address.
                        </FormControl.ErrorMessage>
                    </VStack>
                </FormControl>
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
