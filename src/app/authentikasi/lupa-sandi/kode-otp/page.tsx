"use client"

import {useState} from "react"

const KodeOTP = () => {

    const handleSubmit = (e:any) => {


    }


    return (
    <>

<div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2  top-24"
        >

       
            <div className="flex flex-col gap-2">

                <h1 className="text-xl text-center font-nunitoBold">Verifikasi OTP</h1>
                <span className="w-full text-center text-md px-10"><p className="font-nunitoLight">Masukan email untuk mereset kata sandi</p></span>

            </div>
        
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative mx-auto">

                <span className="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
                <input
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
                />
            </div>
        
            

            <button
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black absolute bottom-0"
            >
                Selanjutnya
            </button>
            
            </form>

            
        </div>

    
    </>
    )
}

export default KodeOTP;