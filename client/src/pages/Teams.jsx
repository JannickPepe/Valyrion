import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import Modal from "../components/Modal";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


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

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="flex flex-col">
            <h3 className="text-slate-700 font-bold py-2">Team Members</h3>
            <h5 className="text-slate-500 text-lg font-medium pb-4">Manage your team members and permission here</h5>
            <div className="flex col-span-1 gap-4 lg:gap-8">
                <button 
                    className="my-2 max-w-[200px] group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50  rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-indigo-800 border border-indigo-500 border-b-indigo-400 border-b-4 hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50  active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base"
                    href="">
                    <IoAddOutline size={20} />
                    <span className="ml-2">Add team member</span>
                </button>
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
        
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" >
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                        Role
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map(person => (
                                    <tr key={person.email}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {person.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                <div className="text-sm text-gray-500 underline decoration-solid">{person.email}</div>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.title}</div>
                                            <div className="text-sm text-gray-500">{person.department}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                            className="px-2 inline-flex text-xs leading-5
                                            font-semibold rounded-full bg-green-100 text-green-800"
                                            >
                                            Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {person.role}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                <FaRegEdit size={20} />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a className="text-red-500 hover:text-red-700" href="#">
                                            <FaTrash size={20} />
                                            </a>
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