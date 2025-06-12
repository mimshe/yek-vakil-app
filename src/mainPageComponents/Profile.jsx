

export default function Profile({imageSrc}){
    return(
        <>
          <div className="container-fluid grid-cols-3 flex gap-3 border  p-3 ">
            <div className=" ">
                <img src="{imageSrc}" alt="profile"/>
                <img src="/avatar.svg" alt="avatar"/>
            </div>
            <div className="grid grid-flow-row mx-8">
                <div className="grid-flow-col text-lg font-bold"> نیما سلیمانی  </div>
                <div className="grid-flow-col text-gray-500"> وکیل پایه یک دادگستری </div>
                <div className="grid-flow-col text-gray-500"> شروع از ۲۰ دقیقه </div>
            </div>
            <div className="flex">
                <div className="grid grid-flow-row">
                <div className="grid-flow-col flex"> <span>  <span className="text-gray-300"> (۲۳۰) </span> ۴.۷</span> <img src="/star.svg" alt="star" className="w-[16px] h-[16px]"/>   </div>
                <div className="grid-flow-col text-start text-gray-500">  ۱۰۰,۰۰۰ تومان  </div>
            </div>
            </div> 
        </div>
        </>
    )  
}