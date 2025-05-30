import { Kbd } from "flowbite-react";

export default function CategorySection({text}){
    return(
     <>
         <div className="w-[52px] h-[52px]  flex items-center justify-center ">
             <Kbd className=" "> {text} </Kbd>
         </div>
     </>
    )
}