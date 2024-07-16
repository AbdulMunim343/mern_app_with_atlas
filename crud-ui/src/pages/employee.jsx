import { useNavigate } from "react-router-dom";

const Employee = () => {
    const navigate = useNavigate();

    const handleToStudentClick = () => {
        navigate('/addemployee');
    };
    const people = [
        {
            name: 'John Doe',
            title: 'Front-end Developer',
            department: 'Engineering',
            email: 'john@devui.com',
            role: 'Developer',
            image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
            name: 'Jane Doe',
            title: 'Back-end Developer',
            department: 'Engineering',
            email: 'jane@devui.com',
            role: 'CTO',
            image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },
    ]


    return (
        <>
            <div className="flex flex-row justify-center h-screen font-mono">
                <div className='basis-9/12 mt-5'>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-white">Employees</h2>
                        <button type="button" className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm" onClick={handleToStudentClick}>
                            Add new employee
                        </button>
                    </div>

                <table className="min-w-full divide-y divide-gray-200 mt-2.5">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal">
                            <span>Employee</span>
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal">
                            Title
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal">
                            Status
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal">
                            Role
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-white">
                    {people.map((person) => (
                        <tr key={person.name}>
                            <td className="whitespace-nowrap px-4 py-4">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover"
                                            src={person.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium">{person.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm">{person.title}</div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    Active
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm ">
                                {person.role}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                                <a href="#" className="">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>

            
        </>
    )
}

export default Employee;