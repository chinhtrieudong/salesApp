import { useState } from 'react';
import {
    Box,
    Center,
    FormControl,
    Input,
    ScrollView,
    Text,
    VStack,
    WarningOutlineIcon,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors';
import Buttone from '../Components/Buttone';

const ShippingInputs = [
    { name: 'city', inputData: '', label: 'ENTER CITY', type: 'text' },
    { name: 'country', inputData: '', label: 'ENTER COUNTRY', type: 'text' },
    {
        name: 'postalCode',
        inputData: '',
        label: 'ENTER POSTAL CODE',
        type: 'text',
    },
    {
        name: 'emailAddress',
        inputData: '',
        label: 'ENTER ADDRESS',
        type: 'text',
    },
];

const ShippingScreen = () => {
    const navigation = useNavigation();
    // const isFirstSubmit = false
    const [data, setData] = useState(ShippingInputs);
    const [firstSubmit, setFirstSubmit] = useState(false);
    const handleChange = (value, index) => {
        const clonedData = [...data];
        clonedData[index].inputData = value;
        setData(clonedData);
    };

    const payloadData = data.map((item) => ({
        name: item.name,
        data: item.inputData,
    }));

    const state = payloadData.reduce((result, item) => {
        result[item.name] = item.data;
        return result;
    }, {});

    // console.log('payloadData: ', payloadData);
    const handleSumit = () => {
        setFirstSubmit(true);
        if (payloadData.every((item) => item.data !== '')) {
            navigation.navigate('Checkout', state);
        }
    };

    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            {/* Inputs */}
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {data.map((i, index) => (
                            <FormControl
                                key={index}
                                isInvalid={payloadData.find(
                                    (item) =>
                                        item.name === i.name &&
                                        item.data === '',
                                )}
                            >
                                <FormControl.Label
                                    _text={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
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
                                    value={i.inputData}
                                    _focus={{
                                        bg: Colors.subGreen,
                                        borderWidth: 1,
                                        borderColor: Colors.main,
                                    }}
                                    onChangeText={(value) =>
                                        handleChange(value, index)
                                    }
                                />
                                {firstSubmit &&
                                    payloadData.find(
                                        (item) =>
                                            item.name === i.name &&
                                            item.data === '',
                                    ) && (
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Not empty!
                                        </FormControl.ErrorMessage>
                                    )}
                            </FormControl>
                        ))}
                        <Buttone
                            onPress={() => handleSumit()}
                            bg={Colors.main}
                            color={Colors.white}
                            mt={5}
                        >
                            CONTINUE
                        </Buttone>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default ShippingScreen;
