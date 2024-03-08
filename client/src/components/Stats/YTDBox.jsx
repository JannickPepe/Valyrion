import { BsClipboardData } from "react-icons/bs";
import Wrapper from "../../assets/wrappers/ChartsContainer"


const YTDBox = () => {

    return (
        <Wrapper>
            <div className="flex items-center justify-center">
                <BsClipboardData color="#0a6c74" size={24} className="mr-1 -mt-2.5" />
                <h4>YTD Performance</h4>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 bg-slate-200 rounded-md py-4">
                <div className="col-span">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
                <div className="col-span">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
                <div className="col-span-1">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
                <div className="col-span">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
                <div className="col-span">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
                <div className="col-span">
                    Revenue (VAT excluded)<br/>
                    3.000.000 DKK
                </div>
            </div>
        </Wrapper>
    );

};

export default YTDBox
