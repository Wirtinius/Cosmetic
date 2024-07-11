import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const useCategoryBrand = (id) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/brand/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products by category');
                }

                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.error('Error fetching products by category:', error);
            }
        };

        fetchData();
    }, []);

    return products;
};

export default useCategoryBrand;
