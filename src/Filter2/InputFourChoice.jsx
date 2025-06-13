
export default function InputFourChoice(){
    return(
        <>
            <span> نوع وکیل </span>
            <div className="flex w">
               <div className=" my-4 ml-20 ">
                    <label > همه </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ml-20">
                    <label> پایه یک</label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ">
                    <label> کارشناس </label>
                    <input type="radio" name="sender"/>
                </div>
            </div>
        </>
    )
}