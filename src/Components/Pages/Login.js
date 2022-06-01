import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Utility/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(e.target.email.value, e.target.password.value)

    }
    const handleForgetPassword = async (e) => {
        e.preventDefault()
        await sendPasswordResetEmail(e.target.email.value)
        toast.success(`Sent Email to ${e.target.email.value} Successfully`)
    }
    useEffect(() => {
        if (error) {
            toast.error(error.message)
        }
        if (error1) {
            toast.error(error1.message)
        }
    }, [error, error1])
    useEffect(() => {
        if (user || user1) {
            navigate('/')
        }
    }, [user, user1])
    const [showPass, setShowPass] = useState(true)
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div class="flex items-center min-h-[500px] w-full">
            <div class="w-full bg-white rounded shadow-2xl p-8 m-4 sm:max-w-sm sm:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4 text-center">Login</span>
                <form class="mb-4" onSubmit={handleLogin}>
                    <div class="mb-4 sm:w-full">
                        <label for="email" class="block text-sm mb-1">Email</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div class="mb-6 sm:w-full relative">
                        <label for="password" class="block text-sm mb-1">Password</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type={showPass ? 'password' : 'text'} name="password" id="password" placeholder="Your Password" required />
                        {showPass && <AiFillEye title="Show Password" className="absolute top-9 right-4 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}></AiFillEye>}
                        {!showPass && <AiFillEyeInvisible title="Hide Password" className="absolute top-9 right-4 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}></AiFillEyeInvisible>}
                    </div>
                    <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded" type='submit'>Login</button>
                </form>
                <label for="my-modal-3" class="text-primary text-center text-sm btn btn-ghost">Forgot password?</label>
                <button className="flex items-center btn btn-info text-md w-full mt-2 hover:bg-blue-500"><span className="mr-2" onClick={() => signInWithGoogle()}>Continue With Google</span><FcGoogle></FcGoogle></button>


                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold mb-3">Reset Your Password</h3>
                        <form onSubmit={handleForgetPassword}>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" class="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" required />
                            <button className="btn btn-primary my-3 mx-auto block" type="submit">Reset Password</button>
                        </form>
                        {sending && <div className="flex justify-center">
                            <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;