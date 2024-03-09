import { BsClipboardData } from "react-icons/bs";
import Wrapper from "../../assets/wrappers/ChartsContainer"
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import DropDownYear from "./DropDownYear";

const YTDBox = () => {

    return (
        <Wrapper>
            <div className="flex items-center justify-center mb-2">
                <BsClipboardData color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                <h4>YTD Performance</h4>
            </div>

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
                        <div className="flex items-center justify-center">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The total exposure is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Total Exposure
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">2.000.000 DKK</span>
                        <div className="flex items-center justify-center">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Full return is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Full Return
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">0</span>
                        <div className="flex items-center justify-center">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The total return is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Total Return
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                        <div className="flex items-center justify-center">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">-17 units</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold    bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The total order is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Total Order
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">3456</span>
                        <div className="flex items-center justify-center">
                            <BsGraphDownArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-red-500 font-semibold">-10 units</span><span className="text-xs font-light ml-1"> from last year</span>
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
                        <span className="font-semibold">555 DKK</span>
                        <div className="flex items-center justify-center">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Pending orders is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Pending Orders
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                        <div className="flex items-center justify-center">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="font-semibold bg-white rounded-xl py-1">
                        <span className="group relative">
                            <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div className="bottom-full right-0 rounded bg-[#14919b] px-4 py-1 text-xs text-white whitespace-nowrap">
                                    The return rate is about...
                                    <svg className="absolute left-0 top-full h-2 w-full text-[#14919b]" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            Return Rate
                        </span>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">1%</span>
                        <div className="flex items-center justify-center">
                            <BsGraphUpArrow className="mr-1 hidden md:block" size={14}/><span className="text-xs text-green-500 font-semibold">25.15%</span><span className="text-xs font-light ml-1"> from last year</span>
                        </div>
                    </div>

                    <div className="">
                        <DropDownYear />
                    </div>
                </div>

            </div>

        </Wrapper>
    );

};

export default YTDBox
