

const DashboardPOT = () => {

    return (
        <div className='mt-2 px-4 lg:pl-10  mx-auto flex justify-start'>
            <div className=" bg-white dark:bg-[#0e7c86] rounded-lg overflow-hidden shadow-lg">
                <div className="border-b px-4 py-2">
                    <div className="text-center my-2">
                        <p className='text-lg font-bold'>Point of Contact</p>
                        <img className="h-16 w-16 rounded-full border-4 border-white dark:border-white mx-auto my-2"
                            src="https://bit.ly/3I9nL2D" alt="" />
                        <div className="py-1">
                            <h3 className="font-bold text-base text-gray-800 dark:text-white underline">John Doe</h3>
                        </div>
                    </div>
                    <div className="flex gap-2 px-2">
                        <button
                            className="text-sm flex-1 rounded-full bg-[#54d1db] text-black hover:text-white antialiased font-bold hover:bg-indigo-800 px-2 py-1">
                            Message
                        </button>
                    </div>
                </div>
                <div className="px-2 py-2">
                    <div className="inline-flex text-gray-700 dark:text-gray-300 items-center underline">
                        <svg className="h-5 w-5 text-white dark:text-white mr-1" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        </svg>
                        New York, NY
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DashboardPOT;
