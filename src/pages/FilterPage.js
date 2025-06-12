import Profile from "../mainPageComponents/Profile"
import Buttons from "../Filter/Buttons"
import Navbar from "../Filter/Navbar"

export default function FilterPage(){
    return(
        <>
        
        <Navbar/>
        <Buttons/>
        <div className="my-2">
            <Profile />
            <Profile imageSrc="/_Avatar(1).svg"/>
            <Profile imageSrc="/_Avatar(1).svg"/>
            <Profile imageSrc="/_Avatar(1).svg"/>
            <Profile imageSrc="/_Avatar(1).svg"/>
        </div>
        </>
    )
}