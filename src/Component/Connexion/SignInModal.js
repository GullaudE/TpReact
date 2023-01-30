import React, {useContext, useRef, useState}from "react";
import {UserContext} from "../Context/UserContext";
import {useNavigate, useNavigation} from "react-router-dom";


export default function SignInModal(){


    const {modalState, toggleModals, signIn} = useContext(UserContext);

    const navigate = useNavigate()




    const [validation, setValidation] = useState("")

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()

        const email = inputs.current[0].value;



        try {

            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )

            formRef.current.reset();
            setValidation("")
            //navigate("/Private/PrivateFav/Favoris")
        }catch{

            setValidation("Email ou mot de passe invalide")


        }
    }

    const closeModal= () => {
        setValidation("")
        toggleModals("close")
    }

    return (

        <>

            {modalState.signInModal && (





                <div className="position-fixed top-0 vw-100 vh-100">
                    <div className="w-100 h-100 bg-dark bg-opacity-75">
                        <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"> Connexion
                                        </h5>
                                        <button
                                            onClick={()=>toggleModals("close")}
                                            className="btn-close">
                                        </button>
                                    </div>

                                    <div className="modal-body">


                                        <form
                                            ref={formRef}
                                            onSubmit={handleForm}
                                            className="sign-up-form">

                                            <div className="mb-3">

                                                <label htmlFor="signInEmail" className="form-label">Email
                                                </label>
                                                <input
                                                    ref={addInputs}
                                                    name="email"
                                                    required
                                                    type="email"
                                                    className="form-control"
                                                    id="signUpEmail"
                                                />


                                            </div>
                                            <div className="mb-3">

                                                <label htmlFor="signInPwd" className="form-label">Mot de passe
                                                </label>
                                                <input
                                                    ref={addInputs}
                                                    name="pwd"
                                                    required
                                                    type="password"
                                                    className="form-control"
                                                    id="signUpPwd"
                                                />
                                                <p className="text-danger mt-1">{validation}</p>

                                            </div>



                                            <button className="btn btn-primary">Enregistrer</button>

                                        </form>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            ) }

        </>
    );

}


