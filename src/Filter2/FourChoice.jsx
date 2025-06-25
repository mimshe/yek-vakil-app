
export default function FourChoice(){
    return(
        <>
            <span className=""> نوع مشاوره </span>
            <div className="flex border-b ">
               <div className=" my-4 ml-20 ">
                    <label > متنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ml-16">
                    <label>  تلفنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-4 ml-16">
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