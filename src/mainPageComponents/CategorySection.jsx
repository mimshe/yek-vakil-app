import { Kbd } from "flowbite-react";

export default function CategorySection({text}){
    return(
     <>
         <div className="flex gap-1 ">
             <Kbd className="w-[82px] h-[52px] rounded-full flex items-center justify-center border"> {text} </Kbd>
         </div>
     </>
    )
}