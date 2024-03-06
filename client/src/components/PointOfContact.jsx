import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import Modal from "../components/Modal";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const PointOfContact = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen} className=" mt-3 text-indigo-500 hover:text-indigo-400 font-bold hover:scale-105 relative w-fit 
                block after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:w-full after:scale-x-0 
                after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
                <p>Point Of Contact<MdOutlineKeyboardArrowRight size={22} className="inline-block" /></p> 
            </button>
            <Modal isOpen={open} onClose={handleClose}>
                <div className="modal-faq bg-slate-700 shadow-lg max-w-[600px] rounded p-2 lg:p-6 mb-4 flex">
                    <div className="flex-shrink-0">
                        <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/" alt="Map 1" className="w-32 h-32 object-cover rounded-full" />
                    </div>
                    <div className="ml-4 flex flex-col justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center mr-2">
                                <FaUserCircle color="white" size={24}/>
                            </div>
                            <h2 className="text-base lg:text-2xl font-semibold text-white">Jannick Pedersen</h2>
                        </div>
                        <div className="flex">
                            <div className="text-base lg:text-xl mr-4 text-white">
                                <IoCallOutline className="inline-block mr-2" size={24} />
                                <p className="inline-block">(+45)12336655</p>
                                <hr className="my-2" />
                                <IoMailOutline className="inline-block mr-2" size={24} />
                                <p className="inline-block underline decoration-solid text-sky-400">jannickhello@live.dk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );

};

export default PointOfContact;
