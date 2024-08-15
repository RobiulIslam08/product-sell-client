import {  useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";




const RegisterPage = () => {
    const {createUser,updateUserProfile,signWithGoogle} = useAuth()
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const passwordLengthPattern = /.{6,}/;
    const passwordLowercasePattern = /[a-z]/;
    const passwordUppercasePattern = /[A-Z]/;
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data)=>{ 
		
        const { email, password,photo, name } = data;
        createUser(email, password)
        // eslint-disable-next-line no-unused-vars
        .then(result => {
            updateUserProfile(name,photo)
            .then(()=>{
                toast("Successful Register"); 
                navigate("/")
            
            })
           
        })
        .catch(err =>{
            console.log(err)
        })
       
    }
    const handleGoogleLogin = ()=>{
        signWithGoogle()
        .then(()=>{
           
            navigate(location?.state? location.state: '/')
            toast("Successful Login"); 
        })
        .catch((err)=>{
            console.log(err)
        })
      }

    return (
        <div className="my-24">
            <Helmet>
                <title>Sing in page</title>
            </Helmet>
   
            <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign In </h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" {...register("name")} placeholder="your name" className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" {...register("email")} placeholder="email" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" {...register("photo")} placeholder="photo url" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <label className="flex  items-center ">
                            <input  {...register("password", {
                                validate: {
                                    length: value => passwordLengthPattern.test(value) || "Password must be at least 6 characters",
                                    lowercase: value => passwordLowercasePattern.test(value) || "Password must contain at least one lowercase letter",
                                    uppercase: value => passwordUppercasePattern.test(value) || "Password must contain at least one uppercase letter"
                                }
                            })} type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-800" />
                            <span className="relative right-7" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEye></FaEye>
                                        : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </label>
                        {/* Indicate the error messages for password validation */}
                        {errors.password && (
                            <>
                                {errors.password.type === "length" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "lowercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                                {errors.password.type === "uppercase" && <span className="text-red-500 font-semibold text-sm">{errors.password.message}</span>}
                            </>
                        )}

                    </div>

                    <button  className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Log in with Google" className=" btn rounded-xl btn-accent w-full btn-sm"> Google
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                  
                    
                </div>
              
             
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already Have Account?
                    <Link to="/sign-up" className="underline text-purple-600">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;