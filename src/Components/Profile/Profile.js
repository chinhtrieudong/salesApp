import React from 'react';
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base';
import Colors from '../../Colors';
import Buttone from '../Buttone';

const Inputs = [
    {
        label: 'USERNAME',
        type: 'text',
    },
    {
        label: 'EMAIL',
        type: 'text',
    },
    {
        label: 'NEW PASSWORD',
        type: 'password',
    },
    {
        label: 'CONFIRM PASSWORD',
        type: 'password',
    },
];

const Profile = () => {
    return (
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {Inputs.map((i, index) => (
                        <FormControl key={index}>
                            <FormControl.Label
                                _text={{
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    // color: Colors.black,
                                }}
                            >
                                {i.label}
                            </FormControl.Label>
                            <Input
                                borderWidth={0.2}
                                borderColor={Colors.main}
                                bg={Colors.subGreen}
                                py={4}
                                type={i.type}
                                color={Colors.main}
                                fontSize={15}
                                _focus={{
                                    bg: Colors.subGreen,
                                    borderColor: Colors.main,
                                    borderWidth: 1,
                                }}
                            ></Input>
                        </FormControl>
                    ))}
                    <Buttone bg={Colors.main} color={Colors.white}>
                        UPDATE PROFILE
                    </Buttone>
                </VStack>
            </ScrollView>
        </Box>
    );
};

export default Profile;
