import Footer from "../mainPageComponents/Footer";
import HomeSvg from "../assets/svg/HomeSvg";
import ProfileSvg from "../assets/svg/ProfileSvg";

export default function BottomNavigation() {
    return (
        <div className="flex mt-9 border border-gray-100">
            <Footer imageSrc={<HomeSvg/>} text="مشاوره تلفنی"/>
            <Footer text="مشاوره تلفنی" imgSrc={"/Icon (1).svg"}/>
            <Footer path={"/login"} imageSrc={<ProfileSvg/>} text="حساب کاربری"/>
        </div>
    );
}