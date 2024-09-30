import Link from "next/link";
import DarkMode from "../layouts/darkMode";

const Home = () => {
    return (

        <>
<DarkMode />

<div className="gap-5 flex flex-col mx-auto font-bold font-nunito absolute left-1/2 bottom-10 -translate-x-1/2">


<Link href={"/authentikasi/registrasi"} className="w-[312px] h-[50px] flex justify-center items-center rounded-lg border-2 text-center border-black font-nunito">
  Buat akun baru
</Link>




  <Link href={"/authentikasi/login"} className="w-[312px] text-center h-[50px] flex justify-center items-center rounded-lg border-2 border-black">
  Login
  </Link>


  <h1 className="font-nunito font-extralight text-center">Atau</h1>
  <h1 className="font-nunito font-extralight text-center">Masuk</h1>




  <div className="mx-auto gap-[20px] flex">
  <Link href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/oauth-google`} className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
      <img src="../wrapper.png"/>
  </Link>
  <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
    <img src="../mobile.png" />

  </div>
  </div>
      


  </div>

        
        
        </>
    )


}

export default Home;