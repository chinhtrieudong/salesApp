import {
    Box,
    CheckIcon,
    FormControl,
    Heading,
    Select,
    Text,
    TextArea,
    VStack,
} from 'native-base';
import React, { useState } from 'react';
import Colors from '../Colors';
import Rating from './Rating';
import Message from './Notifications/Message';
import Buttone from './Buttone';

function Review({}) {
    const [ratings, setRatings] = useState('');
    return (
        <Box>
            <Heading bold fontSize={15} mb={2} mt={7}>
                REVIEW
            </Heading>
            {/* If there is no review */}
            {/* <Message
                color={Colors.main}
                bg={Colors.subGreen}
                children={'NO REVIEW'}
                bold
            /> */}

            {/* Review */}
            <Box p={3} bg={Colors.subGreen} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Due
                </Heading>
                <Rating value={4} />
                <Text my={2} fontSize={11}>
                    Oct 1 2023
                </Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={10}
                    children={
                        ' If you are starting a new project with NativeBase, we recommend using gluestack-ui instead. '
                    }
                />
            </Box>
            {/* Write review */}
            {/* <Box mt={6}>
                <Heading fontSize={15} bold mb={4}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Rating
                        </FormControl.Label>
                        <Select
                            bg={Colors.subGreen}
                            borderWidth={0}
                            rounded={5}
                            py={4}
                            placeholder="Choose Rate"
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon size={3} />,
                            }}
                            selectedValue={ratings}
                            value={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label="1 - Poor" value="1" />
                            <Select.Item label="2 - Fair" value="2" />
                            <Select.Item label="3 - Good" value="3" />
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea
                            h={20}
                            w="full"
                            placeholder="This product is good ......"
                            borderWidth={0}
                            bg={Colors.subGreen}
                            py={4}
                            _focus={{
                                bg: Colors.subGreen,
                            }}
                        ></TextArea>
                    </FormControl>
                    <Buttone bg={Colors.main} color={Colors.white}>
                        SUBMIT
                    </Buttone>
                 
                    <Messege
                        color={Colors.white}
                        bg={Colors.black}
                        size={10}
                        children={"Please 'Login' to write review"}
                    />
                </VStack>
            </Box> */}
        </Box>
    );
}

export default Review;
