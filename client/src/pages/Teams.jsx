import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { PointOfContact } from "../components";



const people = [
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://bit.ly/33HnjK0',
    },
    {
        id: 2,
        name: 'John Doe',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Tester',
        email: 'john.doe@example.com',
        image: 'https://bit.ly/3I9nL2D',
    },
    {
        id: 3,
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
];

const Teams= () => {

    return (
        <div className="flex flex-col">
            <h3 className="text-slate-700 font-bold py-2">Team Members</h3>
            <h5 className="text-slate-500 text-lg font-medium pb-4 my-1">Manage your team members and permission here</h5>
            <div className="md:flex gap-4 lg:gap-8">
                <button 
                    className="max-w-[200px] group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50  rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-slate-800
                    border border-[#2cb1bc] border-b-[#2cb1bc] border-b-4 hover:border active:border bg-white hover:text-[#2cb1bc] hover:bg-gray-50  active:bg-gray-100 active:text-slate-800 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base"
                    href="">
                    <IoAddOutline size={20} />
                    <span className="ml-2">Add team member</span>
                </button>
                <PointOfContact />
            </div>
        
            <div className="mt-6 mb-4 pb-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-sm font-bold text-left text-[#14919b] uppercase" >
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#14919b] uppercase tracking-wider" >
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#14919b] uppercase tracking-wider" >
                                        Mail
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#14919b] uppercase tracking-wider" >
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#14919b] uppercase tracking-wider" >
                                        Role
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map(person => (
                                    <tr key={person.email}>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {person.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-14 w-14">
                                                    <img className="h-14 w-14 rounded-full" src={person.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-base font-medium text-gray-900">
                                                        {person.name}
                                                    </div>
                                                    <div className="flex items-center py-2 gap-4 lg:gap-6">
                                                        <a href="#" className="text-[#2cb1bc] hover:text-indigo-900">
                                                            <FaRegEdit size={22} />
                                                        </a>
                                                        <a className="text-red-500 hover:text-red-700" href="#">
                                                            <FaTrash size={22} />
                                                        </a>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                            className="text-sm text-[#14919b] font-bold underline decoration-solid"
                                            >
                                            {person.email}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-base text-gray-900">{person.title}</div>
                                            <div className="text-sm text-[#14919b]">{person.department}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#14919b]">
                                            {person.role}
                                        </td>
                                    
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Teams;