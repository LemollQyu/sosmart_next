import Link from "next/link";
const Login = () => {
    return (
    <>
        <div
            className="auth page flex flex-col gap-12 font-nunito bottom-16 absolute left-1/2 -translate-x-1/2"
        >
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
            <form className="flex flex-col gap-4">
            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span className="absolute text-xs left-2 top-0">Nomor ponsel atau email</span>
                <input
                v-model="phoneOrEmail"
                type="text"
                className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
                />
            </div>

            <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
                <span className="absolute text-xs left-2 top-0">Password</span>
                <input
                v-model="password"
                type="password"
                className="font-bold w-full h-full bg-[#f1f1f1] outline-none"
                />
            </div>

            <button
            
                className="w-full border mt-5 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
            >
                Masuk
            </button>
            <div className="flex justify-center space-x-4">
            <p className="text-center">
                Lupa kata sandi?
                <span className="font-bold text-blue-500"
                ><Link href={"/lupa-password"}> Klik disini </Link></span>
            </p>
            </div>
            </form>

            <div className="flex justify-center space-x-2">
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