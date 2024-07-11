import {toast} from 'sonner'

const useCreateProduct = async (name, description, price, category, countInStock, brand, imageFile) => {
    console.log('Submitting:', {
        name,
        description,
        price,
        category,
        countInStock,
        brand,
        image: imageFile.name, 
    });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('countInStock', countInStock);
    formData.append('brand', brand);
    formData.append('image', imageFile); 

    try {
        const response = await fetch('http://localhost:3000/product/create', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
            },
            body: formData, 
        });

        if (response.ok) {
            console.log('Product Creation Successful');
            toast.success('Product created successfully!');
            window.location.href = "./";
            return { success: true };
        } else {
            const responseData = await response.json();
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Product Creation failed:', responseData);
                return { error: 'Product Creation failed' };
            }
        }
        
    } catch (error) {
        console.error('Error creating product:', error);
    }
};

export default useCreateProduct;