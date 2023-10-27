const { createContext, useState } = require('react');

const authContext = createContext();



const AuthProvider = ({ children }) => {
    // const [value, setValue] = useState('');
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null,
    });
    const value = {};
    return (
        <>
            <authContext.Provider value={value}>
                {children}
            </authContext.Provider>
        </>
    );
};

export default AuthProvider;
