

const DropDown = () => {

    return (
        <div className="mt-3 relative inline-block text-left">
            <div className="group bg-gradient-to-br from-[#2cb1bc] to-[#0e7c86] rounded-full px-2">
                <button type="button" className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium">
                    <span className="text-white hover:text-black underline text-base">
                        April
                    </span>
                    <svg className="w-6 h-6 ml-2 -mr-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                </button>

                <div
                    className="absolute left-0 w-40 origin-top-left bg-gradient-to-br from-[#54d1db] to-[#2cb1bc] divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marts 2024</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feb 2024</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Jan 2024</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DropDown
