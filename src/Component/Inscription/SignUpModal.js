import React, {useContext, useRef, useState}from "react";
import {UserContext} from "../Context/UserContext";
import {useNavigate} from "react-router-dom";


export default function SignUpModal(){


    const {modalState, toggleModals, signUp} = useContext(UserContext);

    const navigate = useNavigate()

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


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

        if (!emailRegex.test(email)) {
            setValidation("Email non valide");
            return;
        }

        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 8) {
            setValidation("8 caractères minimum")
            return
        } else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Mot de passe différent")
            return
        }

        try {

            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )

            formRef.current.reset()
            setValidation("")

        }catch (err){
           if (err.code === "auth/invalid-email"){
               setValidation("Format email incorrect")
           }
            if (err.code === "auth/email-already-in-use"){
                setValidation("Email déjà utilisé")
            }

        }
    }

    const closeModal= () => {
        setValidation("")
        toggleModals("close")
    }

    return (

        <>

        {modalState.signUpModal && (

                <div className="position-fixed top-0 vw-100 vh-100">
                    <div className="w-100 h-100 bg-dark bg-opacity-75">
                        <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"> Inscription
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

                                                <label htmlFor="signUpEmail" className="form-label">Email
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

                                                <label htmlFor="signUpPwd" className="form-label">Mot de passe
                                                </label>
                                                <input
                                                    ref={addInputs}
                                                    name="pwd"
                                                    required
                                                    type="password"
                                                    className="form-control"
                                                    id="signUpPwd"
                                                />


                                            </div>

                                            <div className="mb-3">

                                                <label htmlFor="repeatPwd" className="form-label">Confirmer le mot de passe
                                                </label>
                                                <input
                                                    ref={addInputs}
                                                    name="pwd"
                                                    required
                                                    type="password"
                                                    className="form-control"
                                                    id="repeatPwd"
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


