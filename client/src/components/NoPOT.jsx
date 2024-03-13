import { FaQuestionCircle } from "react-icons/fa";


const NoPOT = () => {

    return (
        <div className="mt-2">
            <div className="max-w-[180px] text-center mx-auto">
                <div className="tooltip">
                    <a to="" ><FaQuestionCircle className="mx-auto mt-3 mb-1" size={20} color="#54d1db" /></a>
                    <div className="mx-auto px-2 py-2 bg-[#2cb1bc] rounded-md z-20  invisible tooltip-item ">
                        <p className="font-medium text-sm text-center text-white">
                            No Point of Contact to be shown! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default NoPOT;
