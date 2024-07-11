const useLogout = async (username, password) => {
    window.localStorage.removeItem('accessToken');
    window.location.href = "./login";
    return { success: true };
};

export default useLogout;
