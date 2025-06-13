import Header from "../components/Header";
import CategoryInput from "../Filter2/CategoryInput";
import InputFourChoice from "../Filter2/InputFourChoice";



export default function Filter2page(){
    return(
        <>
         <Header title={"  فیلتر "}/>
         <CategoryInput/>
         <InputFourChoice/>
        </>
    )
}