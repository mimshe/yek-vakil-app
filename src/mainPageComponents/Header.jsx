
import MagnifierSvg from "../assets/svg/Magnifiersvg"
import YekVakilSvg from "../assets/svg/YekVakilSvg"


export default function HeaderForMainPage(){
    return(
        <>
            <div className=" flex relative w-full max-w-md pl-4 mb-5 mt-2">
                <YekVakilSvg />
                <input type="search"  placeholder="جست و جو" className=" pr-9 pl-4 py-2 border border-gray-300 rounded-md flex-grow      " />
                 <MagnifierSvg className="absolute right-3 top-1/2 -translate-y-1/2"/>
                  
            </div> 
           
           
            <img src="/Group%203.svg" alt={'img'}/>
        </>
    )
}