

export default function Profile(){
    return(
        <>
          <div className="container-fluid grid-cols-3 flex gap-3 border  p-3 ">
            <div className=" ">
                <img src="/_Avatar (1).svg" alt="avatar"/>
            </div>
            <div className="grid grid-flow-row mx-8">
                <div className="grid-flow-col "> نیما سلیمانی  </div>
                <div className="grid-flow-col"> وکیل پایه یک دادگستری </div>
                <div className="grid-flow-col"> شروع از ۲۰ دقیقه </div>
            </div>
            <div className="flex">
                <div className="grid grid-flow-row ">
                <div className="grid-flow-col flex"> <spa> ۴.۷(۲۳۰) </spa> <img src="/Vector.svg" alt="star" className="w-[16px] h-[16px]"/>   </div>
                <div className="grid-flow-col text-start">  ۱۰۰,۰۰۰ تومان   </div>
            </div>
            </div>
        </div>
        </>
           
       
    )  
}