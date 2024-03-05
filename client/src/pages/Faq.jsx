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
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1">
            <div className="col-span-1 lg:col-span-2">
                <div className="mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-4xl mt-2 tracking-tight flex items-center">
                            <FaQuestionCircle size={24} className="mr-2" />
                            FAQ
                        </h2>
                        <p className="text-neutral-500 text-xl mt-3">
                            Frequenty asked questions
                        </p>
                    </div>
                    <div className="grid divide-y divide-neutral-200 max-w-[650px] mx-auto mt-8">
                        
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span className=""> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-indigo-400">
                                    <span> What is a SAAS platform?</span>
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
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                        SAAS platform is a cloud-based software service that allows users to access
                                        and use a variety of tools and functionality.
                                    </p>
                                </motion.div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-1">
                <div className="px-4">
                    <h4 className="mt-2 font-bold tracking-tight mb-6">
                        Additional Info
                    </h4>
                
                    <button type="button" onClick={handleOpen} className="my-8 text-indigo-400 font-semibold hover:scale-105 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        Point Of Contact <MdOutlineKeyboardArrowRight size={20} className="display inline-block" />
                    </button>
                    <Modal isOpen={open} onClose={handleClose}>
                        <div className="bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
                            <div className="flex-shrink-0">
                                <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/" alt="Map 1" className="w-32 h-32 object-cover rounded-full" />
                            </div>
                            <div className="ml-4 flex flex-col justify-between">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center mr-2">
                                        <FaUserCircle size={20}/>
                                    </div>
                                    <h2 className="text-xl font-semibold">Jannick Pedersen</h2>
                                </div>
                                <div className="flex">
                                    <div className="mr-4">
                                        <p>Tel: (+45)12336655</p>
                                        <hr className="my-2" />
                                        <p>Mail: jannickhello@live.dk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <div className="relative inline-flex group hover:scale-105">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] to-[#2814da] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="#" title="Support Line"
                            className="relative inline-flex text-sm items-center justify-center px-4 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
    );

};

export default Faq;