import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error, errorMessage);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center py-5 text-5xl font-bold">Login Page</h2>
      <div className="shadow-lg mt-10 p-12 rounded-lg mx-auto max-w-3xl">
        <form>
          <input
            className="w-full bg-slate-100 p-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <input
            className="w-full bg-slate-100 p-4 mt-5"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <div className="text-center">
            <input
              className="w-1/2 mx-auto bg-black p-4 mt-5 text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>

        <p className="text-center my-5">Or Login With</p>
        {user ? (
          <div className="text-center mt-10">
            <button
              onClick={handleSingOut}
              className="bg-black px-4 py-2 text-white rounded-lg"
            >
              Sing Out
            </button>
          </div>
        ) : (
          <div className="text-center space-x-4">
            <button
              onClick={handleGoogle}
              className="bg-black px-4 py-2 text-white rounded-lg"
            >
              Google
            </button>
            <button className="bg-black px-4 py-2 text-white rounded-lg">
              GitHub
            </button>
            <button className="bg-black px-4 py-2 text-white rounded-lg">
              Twitter
            </button>
          </div>
        )}
      </div>

      {user && (
        <div>
          <p>User: {user.displayName}</p>
          <p>Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
