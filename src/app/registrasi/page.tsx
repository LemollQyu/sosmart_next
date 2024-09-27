 "use client"
 
import PostRegistrasi from '@/api/registrasi';
import axios from 'axios';
 import Link from 'next/link'
 import { useEffect, useState } from "react"
 import { useRouter } from "next/navigation"



 type RegisterResponse = {
    code: number,
    message: string,
    data: {
        username: string,
        email: string,
       
    }
 }

 const Register = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ resError, setResError ] = useState<any>(null);
    const [ resData, setResData ] = useState<any>(null);

    const router = useRouter();

    

    const handleSubmit = async () => {        
        // const data = {name, email, password}

        setResError(null);

        try{
            const response = await PostRegistrasi({
                email: email,
                name: name,
                phone: phone,
                password: password,
                password_confirmation: password
            })
            const dataResponse: RegisterResponse = response.data
            console.log(dataResponse)
            setResData(dataResponse);

            if(dataResponse.code == 201) {
                router.push('/login');
			    router.refresh();
            }

        } catch (error: any) {
            console.log(error.response)
            setResError(error.response.data);

            
        }

       


    }

    // console.log(resData.code);

    useEffect(() => {
        console.log(resError);
    }, [resError])

    const PassSpan = () => {
        if(password.length == 0 ) {
			return	<div className=" h-5 flex items-center justify-between"></div>
		} else if ( password.length <= 4 ) {
			return ( 
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
			</div>
			
			</>
			)
		} else if ( password.length >= 5 && password.length <= 7 ){
			return (
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
			</div>
		
			</>
			)
		} else if (password.length >= 8) {
			return (
			<>
			<div className=" h-5 flex items-center">
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
				<span className="inline-block w-[90px] h-[2px] bg-black"></span>
			</div>
		
			</>
			)
		}
    }
    


    return (
        <>
        <div className="auth page flex flex-col gap-5 font-nunito bottom-5 top-0 absolute left-1/2 -translate-x-1/2 border">
                <div className="flex flex-col gap-2">
                    <h1 className="text-center text-xl font-bold">Daftar sekarang</h1>
                    <p className="text-center font-extralight text-sm">Silakan isi detail dan buat akun</p>
                    </div>
                <form action={handleSubmit} className="flex flex-col gap-4">
                    <div className="border w-[312px] h-[47px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                        <span className="absolute text-xs left-2 top-0">Nama lengkap</span>
                        
                        <input value={name}
						       onChange={(e) => setName(e.target.value)}
                               type="text" className="font-bold w-full outline-none h-full bg-[#f1f1f1]"/>
                    </div>

                    <span className="text-red-400 text-xs underline">{resError && resError.message?.username?.[0] !== undefined ? resError.message.username[0] : "" }</span>

                    <div className="border w-[312px] h-[47px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                        <span className="absolute text-xs left-2 top-0">No Telepon</span>
                        <input value={phone}
						       onChange={(e) => setPhone(e.target.value)}
                               type="text" className="font-bold w-full outline-none h-full bg-[#f1f1f1]"/>
                    </div>

                    <span className="text-red-400 text-xs underline">{resError && resError.message?.phone?.[0] !== undefined ? resError.message.phone[0] : "" }</span>

                    <div className="border w-[312px] h-[47px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                        <span className="absolute text-xs left-2 top-0">Email</span>
                        <input value={email}
						       onChange={(e) => setEmail(e.target.value)} 
                               type='email' 
                               className="font-bold w-full h-full bg-[#f1f1f1] outline-none" />
                    </div>  

                    <span className="text-red-400 text-xs underline">{resError && resError.message?.email?.[0] !== undefined ? resError.message.email[0] : "" }</span>

                    <div className="border w-[312px] h-[47px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                        <span className="absolute text-xs left-2 top-0">Password</span>
                        <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="font-bold w-full h-full bg-[#f1f1f1] outline-none" type="password"/>

                        <PassSpan />
                    </div>
                    <span className="text-red-400 text-xs underline">{resError && resError.message?.password?.[0] !== undefined ? resError.message.password[0] : "" }</span>
                    
                    <p className="text-sm font-extralight">Kata sandi minimal 5 karakter</p>

                    <button className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black">Daftar</button>
                </form> 

                <Link href={"/login"}><p className="text-center">Sudah punya akun? <span className="font-bold text-blue-500"> Login</span></p></Link>
                

                <p className="text-center">Atau</p>

                <div className="mx-auto gap-[20px] flex">
                    <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
                        <img src="../../wrapper.png"/>
                    </div>
                    <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
                        <img src="../../mobile.png" />

                    </div>
                </div>

            </div>

        </>
    )
}

export default Register;
