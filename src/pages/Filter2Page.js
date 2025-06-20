import Header from "../components/Header";
import CategoryInput from "../Filter2/CategoryInput";
import CheckBox from "../Filter2/CheckBox";
import FourChoice from "../Filter2/FourChoice";
import InputFourChoice from "../Filter2/InputFourChoice";
import Section from "../Filter2/Section";



export default function Filter2page(){
    return(
        <>
         <Header title={"  فیلتر "}/>
         <CategoryInput/>
         <Section/>
         <CheckBox/>
         <InputFourChoice/>
         <FourChoice/>
        </>
    )
}