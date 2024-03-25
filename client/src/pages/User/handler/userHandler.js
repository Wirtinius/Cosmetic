import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

function useUser() {

    let authToken = window.localStorage.getItem("accessToken");
    let user = jwtDecode(authToken);
    if (user) {
        return user;
    }
}

export default useUser;
