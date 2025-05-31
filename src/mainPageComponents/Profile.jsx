

export default function Profile(){
    return(
        <>

            <div color="gray" className="border p-2  flex items-center w-[356px] h-[104px]">
                 <img src="/_Avatar (1).svg" alt="avatar" className="w-[80px] h-[80px]" />
                <div className="flex flex-col items-center flex-grow">
                    <section className="flex items-center gap-2">
                         <p>نیما سلیمانی</p>
                        <div className="flex  gap-1">
                          <span>۴.۷(۲۳۰)</span>
                          <img src="/Vector.svg" alt="star" />
                        </div>
                   </section>
                     <p className="mt-2 bg-zinc-700 ">وکیل پایه یک دادگستری</p>
                    <div className="flex gap-2 mt-1">
                        <span>شروع از ۲۰ دقیقه</span>
                        <span>۱۰۰,۰۰۰ تومان</span>
                    </div>
                </div>
           </div>    
        </>
    )  
}