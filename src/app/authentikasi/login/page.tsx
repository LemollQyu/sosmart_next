"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBack from "../layout/layoutNavigasi"
import { useRouter } from "next/navigation";
import postLogin from "@/api/login";
import axios, { AxiosError } from 'axios';
import saveToken from "@/cookie/saveToken";



type LoginResponse = {
    code: number,
    message: string,
    data: {
        access_token: string,
        refresh_token: string,
        expires_in: number,
        token_type: string
    }
 }

const Login = () => {

    const [ emailPhone, setEmailPhone ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ resData, setResData ] = useState<any>(null);
    const [ resErr, setResErr ] = useState<any>(null);

    // const [error, setError] = useState<string>('');

    const router = useRouter();
    


    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();


        const data = {emailPhone, password};

        // try {
        //     const response = await axios.post<LoginResponse>('/api/login', { 
        //       account: emailPhone,
        //       password: password,
        //      });
      
        //     if (response.status === 200) {
        //       // Redirect ke halaman protected setelah login berhasil
        //       router.push('/dashboard');
        //     }
        //   } catch (err: any) {
        //     if (axios.isAxiosError(err)) {
        //       setError((err as AxiosError<LoginResponse>).response?.data.message || 'Terjadi kesalahan');
        //     }
        //   }
       

        try{
            const response = await postLogin({

                account: emailPhone,
                password: password,
            })
            const dataResponse: LoginResponse = response.data
            console.log(dataResponse);

            setResData(dataResponse);

            console.log(dataResponse.code)
            console.log(dataResponse.message)

            await saveToken(dataResponse.data)
            


        } catch (error: any) {
            console.log(error.response)
            setResErr(error.response);
            

            // console.log(error.response.data.message.account[0]);

        //    console.log(error.response.data.code)
            
        }

        // await router.push("/");

        

  
    }

    useEffect(() => {
        console.log(resErr);
    }, [resErr])


    return (
    <>
    <NavBack>
        <div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2"
        >
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto overflow-hidden">
               <img src="../../parrot.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span className="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
                <input
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
                type="text"
                className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
                />
                <div className="w-full pt-1">
                        <p className="text-red-400 text-xs underline">{resErr && resErr.data.message.account[0] !== undefined ? resErr.data.message.account[0] : "" }</p>
                </div>
            </div>
            

            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative mt-2">
                <span className="absolute text-xs left-2 top-0">Password</span>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="font-bold w-full h-full bg-[#f1f1f1] outline-none"
                />
                <div className="w-full pt-1">
                        <p className="text-red-400 text-xs underline">{resErr && resErr.data.message.account[0] !== undefined ? resErr.data.message.account[0] : "" }</p>
                </div>
            </div>

            <p className="text-red-400 text-xs underline">{resData && resData.message !== undefined ? resData.message : "" }</p>

            

            

            <button
            
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
            >
                Masuk
            </button>
            <p className="text-center font-bold">
                
                <Link href={"/authentikasi/lupa-sandi"} className="font-bold text-blue-500">Lupa kata sandi?</Link>
            </p>
            </form>

            <div className="flex justify-center space-x-4">
            <p className="text-center">
                Belum punya akun?
                <span className="font-bold text-blue-500"
                ><Link href={"/authentikasi/registrasi"}> Daftar </Link></span>
            </p>
            </div>
        </div>
        </NavBack>
    
    
    </>
    )
}

export default Login;


