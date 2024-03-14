import { BsClipboardData } from "react-icons/bs";
import Wrapper from "../../assets/wrappers/ChartsContainer";
import DropDown from "./DropDown";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";


const MonthlyBox = () => {

    return (
        <Wrapper>
            <div className="flex items-center justify-center">
                <BsClipboardData color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                <h4 className="text-2xl md:text-3xl lg:text-3xl">Monthly Performance</h4>
            </div>
            <FaExchangeAlt className="mx-auto mb-2 hover:scale-110 text-[#2cb1bc] hover:text-black" size={20} />
        
            <div className="bg-gradient-to-br from-[#54d1db] to-[#2cb1bc] rounded-lg">

                <div className="px-3 gap-3 text-lg grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 text-black rounded-md py-4">
                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The revenue is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Revenue
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">3.000.000 DKK</span>
                        <div className="flex items-center justify-center mb-1 hover:scale-110 transition-transform">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The generated orders is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Orders Generated
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">1.420</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">26.92%</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The avg order value is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Avg Order Value
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">604</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">2.19%</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The audience exposed is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Audience exposed
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">2.19%</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold    bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The total exposures is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Total Exposures
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">3456</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">2.19%</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Thefull return is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Full Return
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">555 DKK</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">0 DKK</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Partial returns is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Partial Returns
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                        <div className="flex items-center justify-center hover:scale-110 transition-transform">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">0 units</span><span className="text-xs font-light ml-1"> from last month</span>
                        </div>
                    </div>

                    <div className="">
                        <DropDown />
                    </div>
                </div>

</div>

        </Wrapper>
    );

};

export default MonthlyBox;
