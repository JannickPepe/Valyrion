import { RiMailSendLine, RiSendPlaneLine } from "react-icons/ri";


const Contact = () => {

    return (
        <div>
            <h3 className="px-8 md:px-16">Support and Services</h3>
            <div className="grid grid-cols-4 gap-8 p-8 md:p-16 mt-6 md:mt-2">
                <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#2cb1bc] rounded-xl ">
                    <span className="absolute -top-6 p-3 border-2 border-[#2cb1bc] rounded-full bg-[#2cb1bc]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true" className="w-7 h-7 text-yellow-640">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                            </path>
                        </svg>
                    </span>
                    <h2 className="my-1 gradient-red text-lg uppercase tracking-wide">
                        Instructions
                    </h2>
                    <p className="py-2 text-center text-sm">
                        Some of the components require fews modifications in your Tailwind config or
                        CSS file. I obviously give you these instructions alongside the code.
                    </p>
                </div>

                <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#2cb1bc] rounded-xl">
                    <span className="absolute -top-6 p-3 border-2 border-[#2cb1bc] rounded-full bg-[#2cb1bc]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true" className="w-7 h-7 text-yellow-640">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
                            </path>
                        </svg>
                    </span>
                    <h2 className="my-1 gradient-red text-lg uppercase tracking-wide">
                        Legal Use
                    </h2>
                    <p className="py-2 text-center text-sm">
                        Simply copy and paste the code I provide to implement Fancy Tailwind
                        components in your projects.
                    </p>
                </div>


                <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#2cb1bc] rounded-xl ">
                    <span className="absolute -top-6 p-3 border-2 border-[#2cb1bc] rounded-full bg-[#2cb1bc]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true" className="w-7 h-7 text-yellow-640">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </span>
                    <h2 className="my-1 gradient-red text-lg uppercase tracking-wide">
                        Point Of Contact
                    </h2>
                    <p className="py-2 text-center text-sm">
                        What makes Fancy Tailwind awesome is that our Tailwind CSS components are -
                        for the most - animated, beautiful and responsive, which make them so cool.
                    </p>
                </div>

                <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-[#2cb1bc] rounded-xl ">
                    <span className="absolute -top-6 p-3 border-2 border-[#2cb1bc] rounded-full bg-[#2cb1bc]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true" className="w-7 h-7 text-yellow-640">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                            </path>
                        </svg>
                    </span>
                    <h2 className="my-1 gradient-red text-lg uppercase tracking-wide">
                        Terms of Service
                    </h2>
                    <p className="py-2 text-center text-sm">
                        Complex components may need some cooking and the JavaScript needed to make
                        them awesome is included. So dont worry, you will get it all !
                    </p>
                </div>
            </div>

            <div className="max-w-[600px] md:px-16">
                <h4 className="inline-block flex items-center text-3xl"><RiMailSendLine className="mr-2 inline-block" size={30}/>Support</h4>
                <p className="py-4 text-sm">We will reply fast as possible!</p>
                <div className="p-6 border border-[#2cb1bc] sm:rounded-md">
                    <form method="POST" action="https://herotofu.com/start">
                        <label className="block mb-6">
                            <span className="">Your name</span>
                            <input type="text" name="name" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Joe Bloggs"/>
                        </label>
                        <label className="block mb-6">
                            <span className="">Email address</span>
                            <input name="email" type="email"
                            className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="joe.bloggs@example.com" required />
                        </label>
                        <label className="block mb-6">
                            <span className="">Message</span>
                            <textarea name="message"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="3"
                            placeholder="Tell us what you're thinking about...">
                            </textarea>
                        </label>
                        <div className="mb-4">
                            <button type="submit" className="text-base font-semibold hover:text-white hover:scale-110 h-10 px-5 text-slate-900 bg-gradient-to-r from-[#75ebeb] to-[#53c9d4] rounded-lg transition-colors duration-150 focus:shadow-outline"
                            >
                            Contact <RiSendPlaneLine className="inline-block" size={16}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );

};

export default Contact;