import DarkMode from '@/app/layouts/darkMode';
import { useRouter } from 'next/navigation'

const layoutNav = ({children}: any) => {

    const back = useRouter();


    const handleBack = (e:any) => {

        e.preventDefault()
		back.back()


    } 




    return (
        <>
        <DarkMode/>
        <div className="">
            <button onClick={handleBack} className="w-[40px] h-[40px] rounded-full border flex justify-center items-center absolute top-3 left-5">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.88421 0.414315C6.19994 0.673072 6.25112 1.14504 5.99855 1.46849L2.45993 5.99997L5.99855 10.5314C6.25112 10.8549 6.19993 11.3269 5.88421 11.5856C5.56849 11.8444 5.10779 11.7919 4.85521 11.4685L0.950737 6.46849C0.736839 6.19457 0.736839 5.80536 0.950737 5.53145L4.85521 0.531445C5.10779 0.207999 5.56849 0.155558 5.88421 0.414315Z" fill="#1B1E28"/>
            </svg>
            </button>

            

            {children}

        </div>
       
        </>
    )

}

export default layoutNav;