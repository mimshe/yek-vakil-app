import Category from "../mainPageComponents/Category.jsx"
import CategorySection from "../mainPageComponents/CategorySection.jsx"
import HeaderForMainPage from "../mainPageComponents/Header.jsx"
import Sections from "../mainPageComponents/Sections.jsx"
import VakilSection from "../mainPageComponents/VakilSection.jsx"
import Profiles from "../Home/Profiles.jsx"
import BottomNavigation from "../components/bottom-navigation/BottomNavigation"; 


export default function HomePage(){
    return(
        <>
         <HeaderForMainPage/>
        <Profiles/>
        <div className="grid grid-cols-2 gap-4 p-4">
            <Sections imageSrc="/phone.svg" text="مشاوره تلفنی"/>
            <Sections imageSrc="/message.svg" text=" مشاوره متنی"/>
            <Sections imageSrc="/complaint.svg" text="تنظیم شکایت "/>
            <Sections imageSrc="/contract.svg" text="تنظیم قرارداد "/>
        </div>
        <Category/>
        <div className="flex  gap-3">
                        <CategorySection  text=" خانواده"/>
                        <CategorySection  text=" ملکی"/>
                        <CategorySection  text=" مالیات"/>
                        <CategorySection  text=" کیفری"/>
                    </div>
        <VakilSection/>

        <BottomNavigation/>
         
        </>
    )
}