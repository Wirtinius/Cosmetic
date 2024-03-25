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
            body: formData, 
        });

        if (!response.ok) {
            throw new Error('Failed to create product');
        }

        console.log('Product Creation Successful');
        return { success: true };
        
    } catch (error) {
        console.error('Error creating product:', error);
    }
};

export default useCreateProduct;
