import React from 'react';
import { Box } from 'native-base';
import Colors from '../Colors';
import HomeProducts from '../Components/HomeProducts';
import HomeSearch from '../Components/HomeSearch';

const HomeScreen = () => {
    return (
        <Box flex={1} bg={Colors.subGreen}>
            <HomeSearch />
            <HomeProducts />
        </Box>
    );
};

export default HomeScreen;

//rnfe
