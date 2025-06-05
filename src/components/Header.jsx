import {useNavigate} from "react-router-dom";
export default function Header({title}) {
    const navigate = useNavigate();
    return (
        <>
            <div className=" flex row justify-start items-center  border-b py-3 ">
                <img onClick={()=>{
                    navigate(-1)
                }}  className={"cursor-pointer"} src="/back.svg" alt={"Back"}/>
                <span >{title}</span>
            </div>
        </>
    )
}