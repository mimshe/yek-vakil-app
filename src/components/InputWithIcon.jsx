export default function InputWithIcon({label, placeholder, icon}) {
    return (
        <>
            <form className="text-start ">
                <form className="mx-auto">
                    <label htmlFor="zip-input"
                           className="block mb-2  font-medium">{label}</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none text-primary">
                            {icon}
                        </div>
                        <input type="text" id="zip-input" aria-describedby="helper-text-explanation"
                               className="h-[52px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  "
                               placeholder={placeholder}/>
                    </div>

                </form>
            </form>
        </>
    )
}