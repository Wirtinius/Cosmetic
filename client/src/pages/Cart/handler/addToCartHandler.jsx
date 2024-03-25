const useAddToCart = async (products) => {
    console.log('Submitting:', {
        products
    });

    try {
        const response = await fetch('http://localhost:3000/cart/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
            },
            body: JSON.stringify({ products }), 
        });

        if (!response.ok) {
            throw new Error('Failed To Add To Cart');
        }

        console.log(' Successfully Added To Cart');
        const data = await response.json();
        console.log(data)
        return { success: true };
        
    } catch (error) {
        console.error('Error Adding To Cart:', error);
    }
};

export default useAddToCart;
