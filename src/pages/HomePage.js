import Category from "../mainPageComponents/Category.jsx"
import CategorySection from "../mainPageComponents/CategorySection.jsx"
import Footer from "../mainPageComponents/Footer.jsx"
import HeaderForMainPage from "../mainPageComponents/Header.jsx"
import Sections from "../mainPageComponents/Sections.jsx"
import VakilSection from "../mainPageComponents/VakilSection.jsx"
import HomeSvg from "../assets/svg/HomeSvg.js"
import ProfileSvg from "../assets/svg/ProfileSvg.js"
import Profiles from "../Home/Profiles.jsx"

export default function HomePage(){
    return(
        <>
         <HeaderForMainPage/>
        <Profiles/>
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
         < div className="flex mt-9 border border-gray-100">
                        <Footer  imageSrc={<HomeSvg/>} text="مشاوره تلفنی"/>
                        <Footer  imageSrc={<img src="/Icon (1).svg" alt="icon"/>} text="مشاوره تلفنی" className=" mx-auto" />
                        <Footer  imageSrc={<ProfileSvg/>} text="مشاوره تلفنی"/>
         </div>

        </>
    )
}