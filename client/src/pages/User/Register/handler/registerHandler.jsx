const useRegister = async (username, email, gender, password, confirmPassword) => {
    console.log('Submitting:', {
        username,
        email,
        gender,
        password,
        confirmPassword
    });

    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                    username,
                    email,
                    gender,
                    password,
                    confirmPassword}),
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        const data = await response.json();
        console.log('User Register Successful');
        return { success: true };
        
    } catch (error) {
        console.error('Error during user register:', error);
    }
};

export default useRegister;
