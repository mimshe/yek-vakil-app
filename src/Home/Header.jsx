import Category from "../mainPageComponents/Category"
import CategorySection from "../mainPageComponents/CategorySection"
import Footer from "../mainPageComponents/Footer"
import HeaderForMainPage from "../mainPageComponents/Header"
import Profile from "../mainPageComponents/Profile"
import Sections from "../mainPageComponents/Sections"
import VakilSection from "../mainPageComponents/VakilSection"
import HomeSvg from "../assets/svg/HomeSvg"
import RequestSvg from "../assets/svg/RequestsSvg"
import ProfileSvg from "../assets/svg/ProfileSvg"



export default function Home(){
    return(
        <>
        <HeaderForMainPage/>
        <div className="flex justify-center my-3"> 
             <Profile />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
            <Sections imageSrc="/Group 12.svg" text="مشاوره تلفنی" />
            <Sections imageSrc="/Group 11.svg" text=" مشاوره متنی" />
            <Sections imageSrc="/Group 14.svg" text="تنظیم شکایت " />
            <Sections imageSrc="/Group 13.svg" text="تنظیم قرارداد  " />
        </div>
        <Category/>
        <div className="flex  gap-3">
                        <CategorySection  text=" خانواده"  />
                        <CategorySection  text=" ملکی"  />
                        <CategorySection  text=" مالیات"  />
                        <CategorySection  text=" کیفری"  />
                    </div>
        <VakilSection/>
         < div className="flex mt-9 ">
                        <Footer  imageSrc={<HomeSvg/>} text="مشاوره تلفنی"/>
                        <Footer  imageSrc={<RequestSvg/>} text="مشاوره تلفنی"/>
                        <Footer  imageSrc={<ProfileSvg/>} text="مشاوره تلفنی"/>
         </div>


        </>
    )
}