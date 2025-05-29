


export default function Section({ imageSrc, text }){
    return(
         <div className="bg-gray-50 rounded-lg flex items-center gap-3 p-3 h-16 w-full">
            <p className="text-sm">{text}</p>
            <img src={imageSrc} alt="icon" className="w-12" />
        </div>
    )
}