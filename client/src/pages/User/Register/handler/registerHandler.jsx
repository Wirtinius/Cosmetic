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

        const responseData = await response.json();

        if (response.ok) {
            console.log('User Register Successful');
            window.location.href = "./";
            return { success: true };
        } else {
            if (response.status === 400) {
                return { error: responseData };
            } else {
                console.error('Register User failed:', responseData);
                return { error: 'Register User failed' };
            }
        }
        
    } catch (error) {
        console.error('Error during user register:', error);
    }
};

export default useRegister;
