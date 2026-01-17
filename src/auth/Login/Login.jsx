import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const authData = use(AuthContext);
    const { loginUser, setUser, user } = authData;

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        loginUser(email, password)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <form onSubmit={handleLogin} className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              perferendis.
            </p>
              <Link className="btn" to='/'>Back to Home</Link>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name='password'
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
