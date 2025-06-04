
import Header from "../mainPageComponents/Header.jsx";
import Section from "../mainPageComponents/Sections.jsx";
import Category from "../mainPageComponents/Category.jsx";
import CategorySection from "../mainPageComponents/CategorySection.jsx";
import VakilSection from "../mainPageComponents/VakilSection.jsx";
import Profile from "../mainPageComponents/Profile.jsx";
import Footer from "../mainPageComponents/Footer.jsx";
import HomeSvg from "../assets/svg/HomeSvg.js";
import RequestSvg from "../assets/svg/RequestsSvg.js";
import ProfileSvg from "../assets/svg/ProfileSvg.js"


export default function MainPage() {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-4 p-4">
                <Section imageSrc="/Group 12.svg" text="مشاوره تلفنی" />
                <Section imageSrc="/Group 11.svg" text=" مشاوره متنی" />
                <Section imageSrc="/Group 14.svg" text="تنظیم شکایت " />
                <Section imageSrc="/Group 13.svg" text="تنظیم قرارداد  " />
            </div>
            
            <Category/>
            <div className="flex  gap-3">
                <CategorySection  text=" خانواده"  />
                <CategorySection  text=" ملکی"  />
                <CategorySection  text=" مالیات"  />
                <CategorySection  text=" کیفری"  />
            </div>
          
             <VakilSection/>
             <Profile/>
            < div className="flex mt-9 border border-gray-100">
                <Footer  imageSrc={<HomeSvg/>} text="مشاوره تلفنی"/>
                <Footer  text="مشاوره تلفنی" imgSrc={"/Icon (1).svg" } />
                <Footer  imageSrc={<ProfileSvg/>} text="مشاوره تلفنی"/>
             </div>

             
        
            
             
            


        </div>
    )

}