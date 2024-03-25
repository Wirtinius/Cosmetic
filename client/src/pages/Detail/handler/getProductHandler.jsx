import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const useProduct = (id) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }

                const data = await response.json();
                setProduct(data);

            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchData();
    }, []);

    return product;
};

export default useProduct;
