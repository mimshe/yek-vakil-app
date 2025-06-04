export default function Header({title}) {
    return (
        <>
            <div className=" flex row justify-start items-center  border-b py-3 ">
                <img  className={"cursor-pointer"} src="/back.svg" alt={"Back"}/>
                <span >{title}</span>
            </div>
        </>
    )
}