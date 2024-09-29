"use client"
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import NavBack from "../../layout/layoutNavigasi"
import Link from "next/link";

export default function OtpInput() {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(Number(element.target.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.target.value;
    setOtp(newOtp);

    // Pindah ke input berikutnya setelah input terisi
    if (element.target.value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (


<NavBack>
        <div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2  top-24"
        >

       
            <div className="flex flex-col gap-2">

                <h1 className="text-xl text-center font-nunitoBold">Verifikasi OTP</h1>
                <span className="w-full text-center text-md px-10"><p className="font-nunitoLight">Cek email anda </p>
                    <p className="font-nunitoLight">untuk mendapatkan kode OTP</p></span>

            </div>
        
            
            <form  className="flex flex-col gap-4 w-[312px]">
            <p className="text-center font-nunitoBold">Kode OTP</p>

            <div className=" w-full h-[53px] flex justify-between items-center rounded-lg px-2 pt-4  relative ">
            
            

            {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              className="w-[65px] h-[56px] text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-[#f1f1f1]  text-lg"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
            </div>
        
            
            <Link href={"/authentikasi/sandi-baru"}>
            <button
            onClick={() => alert(`Entered OTP is: ${otp.join("")}`)}
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black "
            >
                Reset kata sandi
            </button>
            </Link>

            
            
            </form>

            <span className=" inline-block flex flex-col justify-center items-center">
                <p className="font-nunitoLight">Belum menerima code?</p>
                <button className="text-blue-400 font-nunito">Kirim code ulang</button>
            </span>

            
        </div>
        </NavBack>


  );
}
