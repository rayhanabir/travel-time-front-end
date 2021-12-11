import React, {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =() =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google sign in

    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        .catch(err=>{
            console.log(err.message);
        })
    }
    // create user with email and password

    const createNewUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password);
    }

    //existing user sign in

    const existingUserLogin = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    //observer
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=>unsubscribe;
    },[])

    return{
        user,
        setUser,
        logOut,
        signInUsingGoogle,
        createNewUser,
        existingUserLogin,
        isLoading,
        setIsLoading
    }


}
export default useFirebase;