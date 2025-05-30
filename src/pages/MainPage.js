
import Header from "../mainPageComponents/Header.jsx";
import Section from "../mainPageComponents/Sections.jsx";
import Category from "../mainPageComponents/Category.jsx";
import CategorySection from "../mainPageComponents/CategorySection.jsx";
import VakilSection from "../mainPageComponents/VakilSection.jsx";
import Profile from "../mainPageComponents/Profile.jsx";



export default function MainPage() {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-4 p-4 ]">
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
        
            
             
            


        </div>
    )

}