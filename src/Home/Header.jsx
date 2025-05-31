import Category from "../mainPageComponents/Category"
import CategorySection from "../mainPageComponents/CategorySection"
import Footer from "../mainPageComponents/Footer"
import HeaderForMainPage from "../mainPageComponents/Header"
import Profile from "../mainPageComponents/Profile"
import Sections from "../mainPageComponents/Sections"
import VakilSection from "../mainPageComponents/VakilSection"




export default function Home(){
    return(
        <>
        <HeaderForMainPage/>
        <div className="flex justify-center my-3"> 
             <Profile />
        </div>
        <Sections/>
        <Category/>
        <CategorySection/>
        <VakilSection/>
        


        </>
    )
}