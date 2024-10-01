import { ReactNode } from "react"

const LayoutProducts = ({children}:{ children: ReactNode }) => {

    return (

        <>

        <div className="w-[360px] border">
            <div className="rounded-full absolute top-5 left-5 w-[44px] h-[44px] border bg-[#F7F7F9] flex items-center justify-center">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.88421 0.414315C6.19994 0.673072 6.25112 1.14504 5.99855 1.46849L2.45993 5.99997L5.99855 10.5314C6.25112 10.8549 6.19993 11.3269 5.88421 11.5856C5.56849 11.8444 5.10779 11.7919 4.85521 11.4685L0.950737 6.46849C0.736839 6.19457 0.736839 5.80536 0.950737 5.53145L4.85521 0.531445C5.10779 0.207999 5.56849 0.155558 5.88421 0.414315Z" fill="#1B1E28"/>
            </svg>

            </div>
        
            {children}
            </div>
        </>

    )

}

export default LayoutProducts;