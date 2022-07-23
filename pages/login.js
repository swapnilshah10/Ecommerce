import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router'
let url = "";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let onTitleChange = (e) => {
    setEmail(e.target.value);
  };

  let onpassChange = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password: password,
    };
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  const router = useRouter();
  const getFromStorage = (key) => {
    if(typeof window !== 'undefined'){
         if(window.localstorage.getItem("token")){
          router.push('/homepage')
         }
    }
    }

  return (
    <div style = {{ display: "flex", alignItems: "center" , justifyContent: "center" }}>
      <div className="login-form"   >
        <form>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onTitleChange}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onpassChange}
              />
            </div>
          </div>
          <div className="action">
            <Link href = "/register">
            <button style={{ backgroundColor: "#1e90ff"}}>Register</button>
            </Link>
            <Link href="/homepage">
              <button style={{ backgroundColor: "#1e90ff" }}>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// function login() {
//   return (
//     <div>
//       <Link href = "/homepage">
//         <button style={{ backgroundColor: "#1e90ff" }}>Login</button>
//       </Link>
//     </div>
//   );
// }

// export default login;
