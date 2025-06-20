
export default function FourChoice(){
    return(
        <>
            <span> :نوع مشاوره </span>
            <div className="flex w">
               <div className=" my-4 ml-20 ">
                    <label > متنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ml-20">
                    <label>  تلفنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ">
                    <label> شکایت </label>
                    <input type="radio" name="sender"/>
                </div>
                 <div className=" my-4 ">
                    <label> قرارداد </label>
                    <input type="radio" name="sender"/>
                </div>
            </div>
        </>
    )
}