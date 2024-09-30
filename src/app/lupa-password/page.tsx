import Link from "next/link";
const LupaPassword = () => {
    return (
    <>
  <div
    className="auth page flex flex-col gap-12 font-nunito bottom-20 absolute left-1/2 -translate-x-1/2"
  >

    <h1 className="text-2xl font-semibold mt-10 text-center">Lupa Kata Sandi</h1>
    <p className="mt-2 text-gray-600 text-center">
      Masukkan nomor ponsel atau email untuk mereset kata sandi
    </p>

    <div className="auth page flex flex-col gap-12 font-nudssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdsnito mt-10">
      <div className="border w-[312px] h-[53px] rounded-lg px-2 pt-4 bg-[#f1f1f1] relative">
        <span className="absolute text-xs left-2 top-1"> Nomor ponsel atau email </span>
        <input
          v-model="phoneOrEmail"
          type="text"
          className="font-bold w-full outline-none h-full bg-[#f1f1f1]"
        />
      </div>
    </div>

    <button
      className="w-full max-w-md h-12 mt-28 rounded-lg h-[50px] flex items-center justify-center border-2 border-black"
    >
      Selanjutnya
    </button>
  </div>

  </>
    )
}

export default LupaPassword;