
import {Link} from "react-router-dom";

export default function Category (){
    return(
        <>
         <div className="flex m-4 justify-between ">
                <span className="font-bold text-lg"> دسته بندی </span>
                <div className="flex w-32">
                     <img src="/icon-wrapper.svg" alt="img"/>
                     <Link to={"../Home"} className="mr-2" > مشاهده همه </Link>
                </div>
            </div>
        
        
        </>
    )
        
    
}