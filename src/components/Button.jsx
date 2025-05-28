export default function Button({children = "ثبت"}) {
    return (
        <>
            <button type="button"
                    className=" mt-5 h-[52px] text-white w-full bg-primary hover:bg-lightPrimary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{children}
            </button>

        </>
    )
}