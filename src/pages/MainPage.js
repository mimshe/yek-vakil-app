import Header from "../mainPageComponents/Header.jsx";
import Section from "../mainPageComponents/Sections.jsx";
import Category from "../mainPageComponents/Category.jsx";
import CategorySection from "../mainPageComponents/CategorySection.jsx";
import VakilSection from "../mainPageComponents/VakilSection.jsx";
import Profile from "../mainPageComponents/Profile.jsx";
import BottomNavigation from "../components/bottom-navigation/BottomNavigation";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-4 p-4">
                <Section imageSrc="/Group 12.svg" text="مشاوره تلفنی" 
                onClick={() => navigate('/home')} />
                <Link to="/Home" >
                     <Section imageSrc="/Group 11.svg" text=" مشاوره متنی"/>
                </Link>
                <Section imageSrc="/Group 14.svg" text="تنظیم شکایت "/>
                <Section imageSrc="/Group 13.svg" text="تنظیم قرارداد  "/>
            </div>

            <Category/>
            <div className="flex  gap-3">
                <CategorySection text=" خانواده"/>
                <Link to={"/home"}>
                <CategorySection text=" ملکی" />
                </Link>
                <CategorySection text=" مالیات"/>
                <CategorySection text=" کیفری"/>
            </div>

            <VakilSection/>
            <Profile imageSrc="/_Avatar_1.svg"/>
            <BottomNavigation/>
        </div>
    )

}