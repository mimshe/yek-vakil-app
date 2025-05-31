


export default function Section({ imageSrc, text }){
    return(
         <div className="bg-gray-50 rounded-lg flex items-center gap-3 p-3 h-16 w-full">
            <p className="text-md pr-2">{text}</p>
            <img src={imageSrc} alt="icon" className="w-16 " />
        </div>
    )
}