import HomeSvg from "../../assets/svg/HomeSvg";
import ProfileSvg from "../../assets/svg/ProfileSvg";
import BottomNavigationItem from "./BottomNavigationItem";

export default function BottomNavigation() {
    return (
        <div className="flex mt-9 border border-gray-100">
            <BottomNavigationItem imageSrc={<HomeSvg/>} text="مشاوره تلفنی"/>
            <BottomNavigationItem text="مشاوره تلفنی" imgSrc={"/Icon (1).svg"}/>
            <BottomNavigationItem path={"/login"} imageSrc={<ProfileSvg/>} text="حساب کاربری"/>
        </div>
    );
}

