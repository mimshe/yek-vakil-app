
import YekVakilSvg from "../assets/svg/YekVakilSvg"

export default function HeaderForMainPage(){
    return(
        <>
            <div className="relative w-full max-w-md">
                <input type="search"  placeholder="جست و جو"  dir="rtl" className="w-50        pr-10 pl-4 py-2 border border-gray-300 rounded-md     " />
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  absolute top-3 right-3 "
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 strokeWidth={2} >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                 />
               </svg>
          </div> 
         <YekVakilSvg/>
        <img src="/Group%203.svg" alt={'img'}/>
        </>
    )
}