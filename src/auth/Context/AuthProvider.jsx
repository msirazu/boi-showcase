import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const authData = {
        email: 'a@b.com',
        pass: 1234
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;