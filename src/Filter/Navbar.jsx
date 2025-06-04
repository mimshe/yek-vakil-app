



export default function Navbar(){
    return(
        <>
           <div className=" flex row justify-start items-center  border-b py-3 ">
                <img  className={"cursor-pointer"} src="/back.svg" alt={"Back"}/>
                <span className="font-bold text-xl"> مشاوره تلفنی </span>
            </div>
            <div className=" border-b flex gap-2 py-3">
                <img src="/Vector (1).svg" alt=" VectorLogo"/>
                <button> مشاوره تلفنی </button>
                <span> / </span>
                <button className="text-gray-400"> مشاوره ملکی </button>
                
            </div>
        </>
    )
    
} 