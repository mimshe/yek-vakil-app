export default function ButtonNavigationItem({text, imageSrc}) {
    return (
        <div className="w-[412px] h-[80px]  bottom-0   bg-white flex items-center justify-center">
            <div>
                {imageSrc}
                <span> {text} </span>
            </div>
        </div>
    )
}