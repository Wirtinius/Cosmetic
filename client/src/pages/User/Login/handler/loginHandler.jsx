const useLogin = async (username, password) => {
    console.log('Submitting:', {
        username,
        password
    });


    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login user');
        }

        const data = await response.json();
        window.localStorage.setItem('accessToken', data.accessToken);
        console.log('User Login Successful');
        return { success: true };
        
    } catch (error) {
        console.error('Error during user login:', error);
    }
};

export default useLogin;
