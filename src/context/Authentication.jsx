import { createContext, useContext, useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";

export const AuthenticationContext = createContext({});

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userTemp, setUserTemp] = useState(null);

  const createUser = () => {
    const userRef = doc(db, "users", user.uid);
    setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      createdAt: user.metadata.creationTime,
      lastLogin: serverTimestamp(),
    })
      .then(() => {
        console.log("create new user success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserTemp = () => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          setUserTemp(user);
          console.log("login success");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          // console.log(errorMessage);
        });
    }
  };

  const authValue = {
    user,
    setUser,
    getUserTemp,
    createUser,
    userTemp,
  };
  return (
    <AuthenticationContext.Provider value={authValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
