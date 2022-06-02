import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Utility/Loading';
const Register = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.confirm.value) {
            toast.error('Confirm password did not macthed properly')
            return
        }
        await createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
    }
    const [showPass, setShowPass] = useState(true)
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
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div className="flex items-center min-h-[500px] w-full">
            <div className="w-full bg-white rounded shadow-2xl p-8 m-4 sm:max-w-sm sm:mx-auto">
                <span className="block w-full text-xl uppercase font-bold mb-4 text-center">Register</span>
                <form className="mb-4" onSubmit={handleRegister}>
                    <div className="mb-4 sm:w-full">
                        <label htmlFor="name" className="block text-sm mb-1">Name</label>
                        <input className="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4 sm:w-full">
                        <label htmlFor="email" className="block text-sm mb-1">Email</label>
                        <input className="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4 sm:w-full relative">
                        <label htmlFor="password" className="block text-sm mb-1">Password</label>
                        <input className="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type={showPass ? 'password' : 'text'} name="password" id="password" placeholder="Your Password" required />
                        {showPass && <AiFillEye title="Show Password" className="absolute top-9 right-4 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}></AiFillEye>}
                        {!showPass && <AiFillEyeInvisible title="Hide Password" className="absolute top-9 right-4 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}></AiFillEyeInvisible>}
                    </div>
                    <div className="mb-6 sm:w-full">
                        <label htmlFor="confirm" className="block text-sm mb-1">Confirm Password</label>
                        <input className="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb]" type={showPass ? 'password' : 'text'} name="confirm" id="confirm" placeholder="Confirm Password" required />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded" type='submit'>Register</button>
                </form>
                <button className="flex items-center btn btn-info text-md w-full hover:bg-blue-500"><span className="mr-2" onClick={() => signInWithGoogle()}>Continue With Google</span><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default Register;