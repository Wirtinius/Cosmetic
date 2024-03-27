const useCreateBrand = async (value, imageFile) => {
    console.log('Submitting:', {
        value,
        image: imageFile, 
    });

    const formData = new FormData();
    formData.append('value', value);
    formData.append('image', imageFile); 
    
    try {
        const response = await fetch('http://localhost:3000/brand/create', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
            },
            body: formData, 
        });

        if (response.ok) {
            console.log('Brand Creation Successful');
            window.location.href = "./";
            return { success: true };
        } else {
            const responseData = await response.json();
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Brand Creation failed:', responseData);
                return { error: 'Brand Creation failed' };
            }
        }
        
    } catch (error) {
        console.error('Error creating brand:', error);
    }
};

export default useCreateBrand;
