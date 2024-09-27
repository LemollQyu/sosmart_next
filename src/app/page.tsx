import Link from "next/link";

export default function Home() {
  return (
    <>

    <div className="gap-5 flex flex-col mx-auto font-bold font-nunito absolute left-1/2 bottom-10 -translate-x-1/2">


    <Link href={"/registrasi"} className="w-[312px] h-[50px] flex justify-center items-center rounded-lg border-2 text-center border-black font-nunito">
      Buat akun baru
    </Link>




      <Link className="w-[312px] text-center h-[50px] flex justify-center items-center rounded-lg border-2 border-black" href={"/login"}>
      Login
      </Link>


      <h1 className="font-nunito font-extralight text-center">Atau</h1>
      <h1 className="font-nunito font-extralight text-center">Masuk</h1>




      <div className="mx-auto gap-[20px] flex">
      <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
          <img src="../wrapper.png"/>
      </div>
      <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
        <img src="../mobile.png" />

      </div>
      </div>
          


      </div>
    </>
  );
}
