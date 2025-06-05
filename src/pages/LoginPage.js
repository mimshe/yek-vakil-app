import Header from "../components/Header";
import InputWithIcon from "../components/InputWithIcon";
import Button from "../components/Button";
import PhoneSvg from "../assets/svg/PhoneSvg";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    return (
        <>
            <Header title={"ورود یا ثبت نام"}/>
            <Body/>
            <InputWithIcon label={"شماره موبایل"} placeholder={"09123456789"} icon={<PhoneSvg/>}/>
            <Button onClick={() => {
                navigate("/verify");
            }}>ورود یا ثبت نام</Button>
        </>
    )
}

function Body() {
    return (
        <>
        <span className=" flex justify-center m-5 font-bold"> 
            <img src="/یکـ%20وکیـل.svg" alt="یکـ وکیل لوگو"/> </span>
            <div className=" flex justify-center mb-6">
                <img src="/Group%205%20(2).svg" alt="Group"/>
            </div>
            <span className=" flex justify-center text-black-500 m-7">
             لطفا شماره موبایل خود را وارد کنید. 
        </span>
        </>
    )
}