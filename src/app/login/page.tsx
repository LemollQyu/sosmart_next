"use client"
import Link from "next/link";
import { useState } from "react";

const Login = () => {

    const [ emailPhone, setEmailPhone ] = useState("");
    const [ password, setPassword ] = useState("");


    const handleSubmit = (e:any) => {
      

        const data = {emailPhone, password};

        console.log(data);
    }



    return (
    <>
        <div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2"
        >
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
            <form action={handleSubmit} className="flex flex-col gap-4">
            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span className="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
                <input
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
                type="text"
                className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
                />
            </div>

            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span className="absolute text-xs left-2 top-0">Password</span>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="font-bold w-full h-full bg-[#f1f1f1] outline-none"
                />
            </div>

            <button
            
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
            >
                Masuk
            </button>
            <p className="text-center font-bold text-blue-500">
                Lupa kata sandi?
                <Link href={"/password"} className="font-bold text-blue-500">Klik di sini</Link>
            </p>
            </form>

            <div className="flex justify-center space-x-4">
            <p className="text-center">
                Belum punya akun?
                <span className="font-bold text-blue-500"
                ><Link href={"/registrasi"}> Daftar </Link></span>
            </p>
            </div>
        </div>
    
    
    </>
    )
}

export default Login;