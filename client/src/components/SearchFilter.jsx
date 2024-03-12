

const SearchFilter = () => {

    return (
        <div className="mx-auto max-w-[600px] lg-6 lg:mb-10">
            <form className="flex flex-col md:flex-row gap-3">
                <div className="flex">
                    <input type="text" placeholder="Search your field"
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#54d1db] focus:outline-none focus:border-[#54d1db]"
                        />
                    <button type="submit" className="bg-[#54d1db] text-white rounded-r px-2 md:px-3 py-0 md:py-1 hover:text-black">Search</button>
                </div>
                <select id="pricingType" name="pricingType"
                    className="w-full h-10 border-2 border-[#54d1db] focus:outline-none focus:border-[#54d1db] text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">All</option>
                    <option value="Freemium">YTD</option>
                    <option value="Free">Monthly</option>
                    <option value="Paid">Table Order</option>
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
