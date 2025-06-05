import { Button } from "flowbite-react";

export default function Buttons(){
    return(
        <>
            <div className="flex flex-wrap gap-2 my-3">
      
      <Button color="light" pill className="border-primary bg-green-200 w-[91px] h-[36px] font-bold">
        <img src="Vector (2).svg" alt="Vector 2"/>
        فیلتر(۲)
       
      </Button>
      <Button color="light" pill className="border-primary bg-green-200 w-[68px] h-[36px] font-bold">
        ملکی
       
      </Button>
      <Button color="light" pill className="border-primary bg-green-200 w-[73px] h-[36px] font-bold">
        آنلاین
        
      </Button>
      <Button color="light" pill className="border-green-300 w-[60px] h-[36px] font-bold">
        پایه یک
      </Button>
      <Button color="light" pill className="border-green-300 w-[67px] h-[36px] font-bold">
        کارشناس
      </Button>
      
      
      </div>
        </>
    )
}