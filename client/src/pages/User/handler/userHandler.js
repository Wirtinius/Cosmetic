import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let authToken = window.localStorage.getItem("accessToken");
        if (!authToken) {
            // No token found, user is not logged in
            setUser(null);
            return;
        }

        try {
            let decodedToken = jwtDecode(authToken);
            const currentTime = Date.now() / 1000; // JWT exp is in seconds

            if (decodedToken.exp < currentTime) {
                // Token has expired
                console.log("Token expired.");
                setUser(null);
                // Optionally, clear the token from local storage or handle token refresh
                window.localStorage.removeItem("accessToken");
            } else {
                // Token is valid
                setUser(decodedToken);
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            setUser(null);
        }
    }, []); // This will only run once when the component mounts

    return user;
}

export default useUser;
