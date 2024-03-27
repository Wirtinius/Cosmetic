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

        const responseData = await response.json();

        if (response.ok) {
            console.log('Successfully Added To Cart');;
            return { success: true };
        } else {
            if (response.status === 401) {
                // window.location.href = "../login";
                return { error: responseData };
            }
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Login User failed:', responseData);
                return { error: 'Login User failed' };
            }
        }
        
    } catch (error) {
        console.error('Error Adding To Cart:', error);
    }
};

export default useAddToCart;
