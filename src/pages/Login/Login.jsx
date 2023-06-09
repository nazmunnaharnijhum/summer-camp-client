import  { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    console.log(data);
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Login Successful',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#e79e37]">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In <br /> deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered pr-10" />
                <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" onClick={togglePasswordVisibility}>
  {showPassword ? <FaEyeSlash /> : <FaEye />}
</button>

              </div>
              {errors.password && <span className="text-red-600">Password is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-[#e79e37]" type="submit" value="Login" />
            </div>
          </form>
          <p className="m-4"><small>New Here? <Link to="/signup">Create an account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
