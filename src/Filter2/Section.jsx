import {Link} from "react-router-dom"
export default function Section(){
    return(
        <>
           <span className=" my-2  mb-3"> سایر</span>
           <div className="flex justify-between border-b my-2">
                <section className=" my-2">
                    <p className="bg-info "> استان</p>  
                </section>
                <div className="flex my-2">
                     <Link to={"filter"} className="mx-2"> کل ایران</Link> 
                     <img src="/alt-arrow-left.svg" alt="alt-arrow-left"/>
                </div>
           </div>
        </>
    )
}