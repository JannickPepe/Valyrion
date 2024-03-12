
import { IoIosArrowDown } from "react-icons/io";
import { FaQuestionCircle,  } from "react-icons/fa";
import { motion } from "framer-motion";
import { PointOfContact } from "../components";
import { faq } from "../utils/data";
import React from "react";

const Faq = () => {

    return (
        <div className="mx-auto">
            <div className="">
                <div className="mx-auto">

                    <div className="flex flex-col items-start ml-2 lg:ml-16">
                        <h2 className="font-bold text-4xl mt-2 tracking-tight flex items-start">
                            FAQ
                            <FaQuestionCircle size={24} className="ml-2 text-[#2cb1bc]" />
                        </h2>
                        <p className="text-neutral-500 text-xl mt-3 mb-1 max-w-[800px]">
                            Do you have a question about ViaAds?<br/> Dont worry we will provide you with the most frequently 
                            asked questions and advertising rescources.
                        </p>
                        <PointOfContact />
                    </div>

                    <div className="mt-6 lg:ml-12 max-w-[800px] mb-4 items-start grid divide-y divide-neutral-200 bg-[#2cb1bc] px-4 rounded-lg">
                        {faq.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="py-5">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className="text-lg">{item.title}</span>
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
                                            <p className="text-slate-700 max-w-[600px] font-semibold mt-3 group-open:animate-fadeIn ">
                                                {item.text}
                                            </p>
                                        </motion.div>
                                    </details>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div> 
        </div>
            
    );

};

export default Faq;