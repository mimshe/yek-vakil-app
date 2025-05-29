import { Badge } from "flowbite-react";
import Header from "../mainPageComponents/Header.jsx";



export default function MainPage() {
    return (
        <div>
            <Header/>
            <Badge color="gray" size="sm" className="h-16 w-[50%] my-4 ">
                <img src="/Group 12.svg" alt="img" className="w-[48px] "/>
                <p> مشاوره تلفنی </p>
            </Badge>
            <div className="flex m-4">
                <span> دسته بندی </span>
                <img src="/icon-wrapper.svg" alt="img"/>
                <p> مشاهده همه </p>
            </div>
            <Badge color="gray" size="sm" className="h-[52px] w-[82px] ">
               
                <p> خانواده  </p>
            </Badge>
             <div className="flex m-4">
                <span> دسته بندی </span>
                <img src="/icon-wrapper.svg" alt="img"/>
                <p> مشاهده همه </p>
            </div>
        
            
             <div color="gray" className="  border">
                <div className="flex">
                    <p> نیما سلیمانی </p>
                    <span> ۴.۷(۲۳۰) </span>
                    <img src="/Vector.svg " alt="img"/>
                </div>
                <img src="/_Avatar (1).svg" alt="img" className="w-[48px] "/>
                <p> وکیل پایه یک دادگستری </p>
                <div className="">
                    <span> شروع از ۲۰ دقیه </span>
                    <span> ۱۰۰,۰۰۰ تومان </span>
                </div>
            </div>
            


        </div>
    )

}