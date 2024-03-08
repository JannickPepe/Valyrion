import { BsClipboardData } from "react-icons/bs";
import Wrapper from "../../assets/wrappers/ChartsContainer"


const YTDBox = () => {

    return (
        <Wrapper>
            <div className="flex items-center justify-center mb-2">
                <BsClipboardData color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                <h4>YTD Performance</h4>
            </div>

            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg">
                <div className="flex flex-row text-white rounded-md py-4 space-y-4 ">
                    <div className="basis-1/2 lg:mt-4 font-semibold">
                        Revenue<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">3.000.000 DKK</span>
                    </div>
                    <div className="basis-1/2">
                        Total Exposures<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">2.000.000 DKK</span>
                    </div>
                    <div className="basis-1/2">
                        Full Returns<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">0</span>
                    </div>
                    <div className="basis-1/2">
                        Total Return<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                    </div>
                </div>

                <div className="flex flex-row text-white rounded-md py-4 space-y-4 ">
                    <div className="basis-1/2 lg:mt-4">
                        Total Orders<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">3456</span>
                    </div>
                    <div className="basis-1/2">
                        Avg Order Value<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">555DKK</span>
                    </div>
                    <div className="basis-1/2">
                        Pending Orders<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">19</span>
                    </div>
                    <div className="basis-1/2">
                        Return Rate<br/>
                        <hr className="max-w-[120px] mx-auto my-1 border-black border-b-1"/>
                        <span className="font-semibold">1%</span>
                    </div>
                </div>
                
            </div>
        </Wrapper>
    );

};

export default YTDBox
