
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeLwbNthXq2WVDxS4nkEN43DEL6Xx5HDY",
  authDomain: "myprject-1.firebaseapp.com",
  projectId: "myprject-1",
  storageBucket: "myprject-1.appspot.com",
  messagingSenderId: "965807283273",
  appId: "1:965807283273:web:6e931675bca22e17867398",
  measurementId: "G-J5X22KDJBY"
};

// initialize of things which we are importing
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
///////////////////////////////////////////////////////////////////////

//SignUP

let signuoButton=document.getElementById("Sign-up");

// //SignUp data from html + firebase sign up

let signupUser =()=>{

// Taking user data from html and storing in object
let username=document.getElementById("fullname").value;
let userphone=document.getElementById("phonenumber").value;
let useremail=document.getElementById("email").value;
let userpassword=document.getElementById("password").value;

// user object
let userprofile={
name:username,
phone:userphone,
email:useremail,
password:userpassword
}
console.log("userobject",userprofile)
// sign up through firebase
createUserWithEmailAndPassword(auth,userprofile.email,userprofile.password)
  .then((userCredential) => {
    const user = userCredential.user; 
    console.log("user made at sign up",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Sign Up Error",errorMessage);
  });
}
signuoButton.addEventListener("click",signupUser)
//////////////////////////////////////////////////////////////////////////////////

//Sign In

let signinButton=document.getElementById("signinbtn");

// //SignUp data from html + firebase sign up

let signinUser = async ()=>{

// Taking user data from html and storing in object

let signinUseremail=document.getElementById("signinemail").value;
let signinUserpassword=document.getElementById("signinpassword").value;


// sign in through firebase
await signInWithEmailAndPassword(auth, signinUseremail,signinUserpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User which is signed in ",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error of sign in",errorMessage)
  });
}
signinButton.addEventListener("click",signinUser)