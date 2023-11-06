import { Box, Heading, ScrollView } from 'native-base';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import OrderInfo from '../Components/OrderInfo';
import OrderItem from '../Components/OrderItem';
import OrderModel from '../Components/OrderModel';

const OrderScreen = ({ route }) => {
    // const user = useSelector((state) => state.auth);
    // const { email, name } = user.currentUser;
    const [city, country, ...rest] = route.params;
    const payMethod = route.params.find((item) => item.pay);
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo
                        title="SHIPPING INFO"
                        subTitle="Shipping: Hackfb"
                        text={`Pay Method: ${payMethod.pay}`}
                        danger
                        icon={
                            <FontAwesome5
                                name="shipping-fast"
                                size={30}
                                color={Colors.white}
                            />
                        }
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Adress:"
                        text={`${country.data}, ${city.data}`}
                        danger
                        icon={
                            <Ionicons
                                name="location-sharp"
                                size={30}
                                color={Colors.white}
                            />
                        }
                    />
                </ScrollView>
            </Box>
            {/* Order Item */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItem />
                {/* Total */}
                <OrderModel data={route} />
            </Box>
        </Box>
    );
};

export default OrderScreen;
