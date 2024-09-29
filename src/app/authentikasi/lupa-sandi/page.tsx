"use client"

import {useState} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import NavBack from "../layout/layoutNavigasi"

const LupaPassword = (e: React.FormEvent) => {
    const router = useRouter();

    const [ email,setEmail ] = useState<string>("");
    


    const handleSubmit = () => {

        



    }


    return (

        <>

    <NavBack>
        <div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2  top-24"
        >

       
            <div className="flex flex-col gap-2">

                <h1 className="text-xl text-center font-nunitoBold">Lupa Kata Sandi</h1>
                <span className="w-full text-center text-md px-10"><p className="font-nunitoLight">Masukan email untuk mereset kata sandi</p></span>

            </div>
        
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative mx-auto">

                <span className="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
                />
            </div>
        
            

            {/* <button
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black absolute bottom-0"
            >
                Reset kata sandi
            </button> */}

            <Link href={"/authentikasi/lupa-sandi/kode-otp"}
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black absolute bottom-0"
            >
                Reset kata sandi
            </Link>
            
            </form>

            
        </div>
        </NavBack>
        
        
        
        
        </>
    )



}


export default LupaPassword;