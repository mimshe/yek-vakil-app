import { Link } from "react-router-dom"

export default function CategoryInput(){
    return(
        <>
           <div className="my-6 ">
                <label className="font-bold m-3 text-xl"> دسته بندی </label>
                <select name="category" className="flex w-[380px] h-[52px]  border border-gray-400 m-2 text-gray-400 p-2 my-5">
                    <option value={"item1"}> دسته بندی </option>
                    <option value={"item2"}> ۲دسته بندی </option>
                    <option value={"item3"}> ۳دسته بندی </option>
                </select>
           </div>
       
        </>

    )
}