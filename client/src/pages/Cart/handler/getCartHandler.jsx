import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/cart/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }

                const data = await response.json();
                setCart(data);

            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchData();
    }, []);

    return cart;
};

export default useCart;
