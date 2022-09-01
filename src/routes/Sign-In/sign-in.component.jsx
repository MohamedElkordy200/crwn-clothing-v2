import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn=()=>{
 
    const logGoogleUser= async ()=>{

        const userAuth=( await signInWithGooglePopup()).user;
        console.log(userAuth);
         createUserDocumentFromAuth(userAuth)

    }
    
    

    return (
    <div>
        <h1> sign in Page</h1>
        <button onClick={logGoogleUser}> Sign In by google popup </button>


    </div>
    );
}



export default SignIn;