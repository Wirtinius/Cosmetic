const useCreateCategory = async (value, imageFile) => {
    console.log('Submitting:', {
        value,
        image: imageFile, 
    });

    const formData = new FormData();
    formData.append('value', value);
    formData.append('image', imageFile); 
    
    try {
        const response = await fetch('http://localhost:3000/category/create', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
            },
            body: formData, 
        });

        if (response.ok) {
            console.log('Category Creation Successful');
            window.location.href = "./";
            return { success: true };
        } else {
            const responseData = await response.json();
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Category Creation failed:', responseData);
                return { error: 'Category Creation failed' };
            }
        }
        
    } catch (error) {
        console.error('Error creating category:', error);
    }
};

export default useCreateCategory;
