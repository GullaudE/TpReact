import {createContext, useState, useEffect} from "react";

import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import  {auth, db} from "../Firebase"
import {setDoc, doc, updateDoc, getDocs, getFirestore} from "firebase/firestore"

export const UserContext = createContext()
export function UserContextProvider(props){

    const signUp = async (email, pwd) => {
        createUserWithEmailAndPassword(auth, email, pwd)
        await setDoc(doc(db, "RickMorty", email),
            {
                favoris: []
            })

    }
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingDate] = useState(true)



    async function UpdateFavoris(arrayFavoris, email) {

        const fav = doc(this.db, "RickMorty", email)
        await updateDoc(fav, {
            favoris: [12, 50, 300]
        })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            setCurrentUser(currentUser)
            setLoadingDate(false)
        })
        return unsubscribe

    },[])

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if(modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    return (

        <UserContext.Provider value={{modalState, toggleModals, signUp, signIn, currentUser}}>
            {!loadingData && props.children }
        </UserContext.Provider>

    )

}