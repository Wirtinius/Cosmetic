import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const useBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/category', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch brands');
                }

                const data = await response.json();
                setBrands(data);

            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchData();
    }, []);

    return brands;
};

export default useBrands;
