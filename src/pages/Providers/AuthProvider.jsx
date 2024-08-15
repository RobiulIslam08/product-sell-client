/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";
import axios from "axios";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { auth } from "../../firebase/firebase.config";
// import { auth } from "../firebase/firebase.config";
// import { auth } from "../../firebase/firebase.config";
// import { auth } from "../firebase/firebase.config";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext('')

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')

    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const axiosCommon = useAxiosCommon()

    // save user
    const saveUser = async (user) => {
        const currentUser = {
            email: user?.email,
            role: 'Tourist',
            status: 'Verified',




        }

        console.log('current user', currentUser)
        if (currentUser) {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser)
            return data
        }


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            if (currentUser) {
                saveUser(currentUser)
                // get token and stored client
                const userInfo = {
                    email: currentUser.email,


                }
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                        setLoading(false)
                    })
            }
            else {
                // todo: remove token (if token stored in the client side : locla storage , caching, inmemory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }

        })
        return () => unSubscribe()
    }, [reload, axiosCommon])


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password,) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    // const logOut = async () => {
    //     setLoading(true)
    //     await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
    //       withCredentials: true,
    //     })
    //     return signOut(auth)
    //   }
    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }





    const authInfo = {
        updateUserProfile,
        signWithGithub,
        signWithGoogle,
        user,
        createUser,
        loginUser,
        logOut,
        loading,

        setReload
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;