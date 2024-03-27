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

        const responseData = await response.json();

        if (response.ok) {
            window.localStorage.setItem('accessToken', responseData.accessToken);
            console.log('User Login Successful');
            window.location.href = "./";
            return { success: true };
        } else {
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Login User failed:', responseData);
                return { error: 'Login User failed' };
            }
        }

        } catch (error) {
            console.error('Error during user login:', error);
        }
};

export default useLogin;
