import React from "react";
import Modal from "../components/Modal";
import { IoIosArrowDown } from "react-icons/io";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";


const Faq = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="mx-auto">
            <div className="">
                <div className="mx-auto">
                    <div className="flex flex-col items-start ml-2 lg:ml-16">
                        <h2 className="font-bold text-4xl mt-2 tracking-tight flex items-start">
                            FAQ
                            <FaQuestionCircle size={24} className="ml-2 text-indigo-500" />
                        </h2>
                        <p className="text-neutral-500 text-xl mt-3 max-w-[700px]">
                            Do you have a question about ViaAds? Dont worry we will provide you with the most frequently 
                            asked questions and advertising rescources.
                        </p>
                        <button type="button" onClick={handleOpen} className="my-4 text-indigo-500 hover:text-indigo-400 font-bold hover:scale-105 relative w-fit 
                            block after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:w-full after:scale-x-0 
                            after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <p>Point Of Contact<MdOutlineKeyboardArrowRight size={22} className="display inline-block" /></p> 
                        </button>
                        <Modal isOpen={open} onClose={handleClose}>
                            <div className="modal-faq bg-slate-700 shadow-lg max-w-[600px] rounded p-6 mb-4 flex">
                                <div className="flex-shrink-0">
                                    <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/" alt="Map 1" className="w-32 h-32 object-cover rounded-full" />
                                </div>
                                <div className="ml-4 flex flex-col justify-between">
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center mr-2">
                                            <FaUserCircle color="white" size={20}/>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-white">Jannick Pedersen</h2>
                                    </div>
                                    <div className="flex">
                                        <div className="text-xl mr-4 text-white">
                                            <p>Tel: (+45)12336655</p>
                                            <hr className="my-2" />
                                            <p>Mail: jannickhello@live.dk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="lg:ml-16 max-w-[700px] mb-4 items-start grid divide-y divide-neutral-200 bg-slate-600 px-4 rounded-lg">
                        
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-100">
                                    <span className="text-lg"> What is a SAAS platform?</span>
                                    <span className="transition group-open:rotate-180">
                                        <IoIosArrowDown size={22} className="mx-2" />
                                    </span>
                                </summary>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p className="text-slate-300 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
            
    );

};

export default Faq;