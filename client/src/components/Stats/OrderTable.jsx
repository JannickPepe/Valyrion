
import { LuClipboardList } from "react-icons/lu";
import { CiImport } from "react-icons/ci";
import complete from "../../assets/images/check.png";
import pending from "../../assets/images/clockwise.png";
import fail from "../../assets/images/close.png";

const OrderTable = () => {

    return (
        <div className="overflow-x-auto mt-10 lg:mt-20">
            <h3 className="text-xl font-semibold flex items-center mb-3">
                <LuClipboardList className="mr-1" size={24} color="#0a6c74" />
                Sale Order - <span className="underline">Febraury</span>
            </h3>
            <table className="min-w-full bg-white font-[sans-serif]">
                <thead className="whitespace-nowrap">
                    <tr>
                        <th className="pl-6 w-8">
                            <input id="checkbox" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox"
                                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-black rounded overflow-hidden"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                    <path
                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                    data-name="7-Check" data-original="#000000" />
                                </svg>
                            </label>
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Buyer
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Order Date
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-white inline cursor-pointer ml-2"
                            viewBox="0 0 401.998 401.998">
                                <path d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                data-original="#000000" />
                            </svg>
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Total Amount
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Total Refund
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Total (ex. VAT)
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                            Status
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-white inline cursor-pointer ml-2"
                            viewBox="0 0 401.998 401.998">
                            <path d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                data-original="#000000" />
                            </svg>
                        </th>
                        <th className="px-2 py-3 text-left text-sm font-semibold text-black hover:text-white">
                            <button className="bg-[#54d1db] p-2 rounded-lg flex items-center">
                                Import<CiImport className="ml-1" size={20} />
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody className="whitespace-nowrap">
                    <tr className="odd:bg-[#2cb1bc]">
                        <td className="pl-6 w-8">
                            <input id="checkbox1" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox1"
                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-white rounded overflow-hidden"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                    <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                    data-name="7-Check" data-original="#000000" />
                                </svg>
                            </label>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            <div className="ml-4">
                                <p className="text-sm text-black">#3566</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            <div className="ml-4">
                                <p className="text-sm text-black">Gladys Jones</p>
                                <p className="text-xs text-white font-bold">gladys@example.com</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            06/03/2024
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            999.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            0
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            769,99.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <img src={complete} alt="complete" className="max-w-[30px] text-white bg-white rounded-full" />
                        </td>
                        <td>
                            
                        </td>
                    </tr>

                    <tr className="odd:bg-[#2cb1bc]">
                        <td className="pl-6 w-8">
                            <input id="checkbox2" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox2"
                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-black rounded overflow-hidden"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                    <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                    data-name="7-Check" data-original="#000000" />
                                </svg>
                            </label>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                                <div className="ml-4">
                                    <p className="text-sm text-black">#4225</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                                <div className="ml-4">
                                    <p className="text-sm text-black">Jennie Cooper</p>
                                    <p className="text-xs text-black font-bold">jennie@example.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            06/03/2024
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            999.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            0
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            769,99.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <img src={complete} alt="complete" className="max-w-[30px]" />
                        </td>
                        <td>

                        </td>
                    </tr>

                    <tr className="odd:bg-[#2cb1bc]">
                        <td className="pl-6 w-8">
                            <input id="checkbox3" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox3"
                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-white rounded overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                <path
                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                data-name="7-Check" data-original="#000000" />
                            </svg>
                            </label>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            <div className="ml-4">
                                <p className="text-sm text-black">#6543</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                                <div className="ml-4">
                                    <p className="text-sm text-black">Philip Steward</p>
                                    <p className="text-xs text-white font-bold">philip@example.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            06/03/2024
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            999.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            0
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            769,99.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <img src={pending} alt="complete" className="max-w-[30px] rounded-full" />
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr className="odd:bg-[#2cb1bc]">
                        <td className="pl-6 w-8">
                            <input id="checkbox4" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox4"
                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-black rounded overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                <path
                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                data-name="7-Check" data-original="#000000" />
                            </svg>
                            </label>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            <div className="ml-4">
                                <p className="text-sm text-black">#2354</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            
                            <div className="ml-4">
                                <p className="text-sm text-black">Jorge Black</p>
                                <p className="text-xs text-black font-bold">jorge@example.com</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            06/03/2024
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            999.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            0
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            769,99.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <img src={complete} alt="complete" className="max-w-[30px]" />
                        </td>
                        <td>

                        </td>
                    </tr>

                    <tr className="odd:bg-[#2cb1bc]">
                        <td className="pl-6 w-8">
                            <input id="checkbox5" type="checkbox" className="hidden peer" />
                            <label htmlFor="checkbox5"
                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-[#0a6c74] border border-white rounded overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                <path
                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                data-name="7-Check" data-original="#000000" />
                            </svg>
                            </label>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            <div className="ml-4">
                                <p className="text-sm text-black">#2345</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-sm">
                            <div className="flex items-center cursor-pointer">
                            
                            <div className="ml-4">
                                <p className="text-sm text-black">Evan Flores</p>
                                <p className="text-xs text-white font-bold">evan@example.com</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-sm">
                            06/03/2024
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            999.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            1
                        </td>
                        <td className="px-6 py-3 underline font-bold">
                            769,99.-
                        </td>
                        <td className="px-6 py-3 text-sm">
                            <img src={fail} alt="complete" className="max-w-[30px] rounded-full" />
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

export default OrderTable;
