import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Hàm tính totalPrice dựa trên cart
export const calculateTotalPrice = (cart) => {
    if (Array.isArray(cart.itemList)) {
        return cart.itemList.reduce((acc, curr) => acc + curr.totalPrice, 0);
    }
    return 0;
};

export const OrdersInfos = () => {
    const cart = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Cập nhật totalPrice khi cart thay đổi
        setTotalPrice(calculateTotalPrice(cart));
    }, [cart]);

    return [
        {
            title: 'Products',
            price: totalPrice,
            color: 'black',
        },
        {
            title: 'Shipping',
            price: 10.0,
            color: 'black',
        },
        {
            title: 'Tax',
            price: 5.0,
            color: 'black',
        },
        {
            title: 'Total Amount',
            price: totalPrice + 5 + 10,
            color: 'main',
        },
    ];
};
