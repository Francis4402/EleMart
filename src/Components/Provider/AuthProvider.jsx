import {GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup} from 'firebase/auth'
import app from "../firebase/firebase.config.js";
import {createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('token', res.data.token);
                            setloading(false);
                        }
                    })
            } else {
                localStorage.removeItem('token');
                setloading(false);
            }
        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const userInfo = {createUser, user, logOut, signIn, googleSignIn, updateUserProfile, loading}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;