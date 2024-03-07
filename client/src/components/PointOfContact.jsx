/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";


const PointOfContact = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="mt-2.5">
            <button  onClick={() => setIsOpen(true)} className="group text-base font-bold text-center transition-all duration-300 ease-in-out">
                <span className='bg-left-bottom bg-gradient-to-r from-[#2cb1bc] to-[#0a6c74] bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out'> 
                    Point of Contact <BsArrowRight size={16} className="group-hover:translate-x-1 transition inline-block" />
                </span> 
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-[#5eb7bf] to-[#0a6c74] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                >
                    <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                    <div className="relative z-10">
                        <div className=" p-4 rounded-lg max-w-full" onClick={() => setIsOpen(false)}>
                            <div className="mx-auto">
                                <div className="card md:flex max-w-lg">
                                    <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                                        <img className="object-cover rounded-full" src="https://tailwindflex.com/public/images/user.png" />
                                    </div>
                                    <div className="flex-grow text-center md:text-left">
                                        <p className="font-bold text-slate-800">Point Of Contact.</p>
                                        <h3 className="text-xl heading text-slate-900">Jannick Pedersen.</h3>
                                        <p className="mt-2 mb-3">Reach out for any questions.</p>
                                        <hr />
                                        <div className="flex gap-1 my-2 text-slate-900 font-bold"><MdPhoneIphone size={22} color="black"/>(+45)45668455</div>
                                        <div className="flex gap-1 text-slate-900 font-bold underline"><IoMailOutline size={22} color="black"/>JohnDoe@live.dk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}</AnimatePresence>
    );
};

export default PointOfContact;