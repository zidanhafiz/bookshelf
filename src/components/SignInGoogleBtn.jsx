import { signInWithRedirect } from "firebase/auth";
import img from "../assets/google.svg";
import { auth, provider } from "../firebase-config";

function SignInGoogleBtn() {
  const signUpHandle = () => {
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="self-center justify-self-center text-center w-full">
      <h4 className="text-sm mb-3">
        Sign up first if you want to save the book
      </h4>
      <button className="btn btn-sm text-sm shadow-xl" onClick={signUpHandle}>
        <img src={img} alt="logo" className="w-5" />
        Sign Up with google
      </button>
    </div>
  );
}

export default SignInGoogleBtn;
