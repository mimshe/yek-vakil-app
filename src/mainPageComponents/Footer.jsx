

export default function Footer({imageSrc,text}){
    return(
        <>
            <footer className="w-[412px] h-[80px]  bottom-0   bg-white flex items-center justify-center  ">
                <div>
                    {imageSrc}
                    <span> {text} </span>
                </div>
            </footer>
        </>
    )
}