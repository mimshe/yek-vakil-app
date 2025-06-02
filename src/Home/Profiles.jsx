


export default function Profiles(){
    return(
        <>
           <div className="container-fluid grid-cols-3 flex gap-3 border  p-3 mt-4 w-[380px] h-[128px]">
                       <div className=" ">
                           <img src="/_Avatar (1).svg" alt="avatar"/>
                       </div>
                       <div className="grid grid-flow-row mr-1 text-sm">
                           <div className="grid-flow-col text-lg font-bold"> نیما سلیمانی  </div>
                           <div className="grid-flow-col text-gray-500"> وکیل پایه یک دادگستری </div>
                           <div className="grid-flow-col text-gray-500">  ۱۴۰۳/۱۱/۰۹ </div>
                           <div className="grid-flow-col text-gray-500">  نظرتون در مورد مشاور چی بود؟ </div>
                       </div>
                       <div className="flex">
                           <div className="grid grid-flow-row ">
                           <div className="grid-flow-col flex text-sm "> <spa>  <span className="text-gray-300 mr-8"> (۲۳۰) </span> ۴.۷</spa> <img src="/Vector.svg" alt="star" className="w-[16px] h-[16px]"/>   </div>
                           <div className="grid-flow-col text-start text-gray-500 mt-8 mr-10 text-sm ">  کد ۱۲۹۷۴۰   </div>
                           <div className="grid-flow-col text-start mr-1" > <button className="bg-primary  text-xs w-[94px] h-[24px] "> ثبت نظر </button>    </div>
                       </div>
                       </div> 
                   </div>
        </>
    )
}