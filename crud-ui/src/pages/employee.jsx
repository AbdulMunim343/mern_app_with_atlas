import { useNavigate } from "react-router-dom";
import HeaderNave from '../components/header'
import FooterBottom from '../components/footer'
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from 'react-toastify'

const Employee = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [employee, setEmployee] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const getEmployee = async () => {
        setIsLoading(true);
        const response = await fetch('https://mern-app-with-atlas.vercel.app/api/employee', {
            headers: { 'Authorization': `Bearer ${user.token}` }
        });

        const data = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            toast.error(data.error);
        }

        if (response.ok) {
            setIsLoading(false);
            //filling the eployee data
            setEmployee(data)

        }
    }

    useEffect(() => {
        if (user) {
            getEmployee();
        }
    }, [user])

    const handleToStudentClick = () => {
        navigate(`/addemployee/emp`);
    };

    const onEdit = (id) => {
        navigate(`/addemployee/${id}`);
    };

    const onDelete = async (id) => {
        setIsLoading(true);
        const response = await fetch(`https://mern-app-with-atlas.vercel.app/api/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });

        const data = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            toast.error(data.error);
        }

        if (response.ok) {
            getEmployee();
            setIsLoading(false);
            toast.error("Employee deleted successfully!");
        }
    };
    return (
        <>
            <HeaderNave />
            <div className="flex flex-row justify-center h-screen font-mono">
                <div className='basis-9/12 mt-20'>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-white">Employees</h2>
                        <button type="button" disabled={isLoading} className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm" onClick={handleToStudentClick}>
                            <span className={isLoading ? 'hidden' : 'block'}>
                                Add new employee
                            </span>

                            <span className={isLoading ? 'block' : 'hidden'}>
                                <svg aria-hidden="true" className="mr-2.5 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                Processing...
                            </span>
                        </button>
                    </div>
                    <div className="table_container_height table-wrp block mt-2.5">
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-blue-800 text-white sticky top-0">
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
                            {employee.length == 0? <tr><td className=" mt-2.5 bg-red-500 text-white font-bold rounded px-4 py-2" colSpan={5}> data not found</td></tr>
                            :
                            employee.map((emp, i) => (
                                <tr key={i}>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full object-cover"
                                                    src={'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium capitalize">{emp.employee_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-12 py-4">
                                        <div className="text-sm capitalize">{emp.title}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        {emp.status == 'active' ?
                                            <span className="inline-flex rounded-full bg-green-800 px-2 text-xs font-semibold leading-5 text-white capitalize">
                                                {emp.status}
                                            </span> :
                                            <span className="inline-flex rounded-full bg-red-800 px-2 text-xs font-semibold leading-5 text-white capitalize">
                                                {emp.status}
                                            </span>}

                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-sm capitalize">
                                        {emp.role}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                                        <span className="mr-2.5 cursor-pointer text-blue-600" onClick={() => onEdit(emp._id)}>
                                            Edit
                                        </span>
                                        <span className="mr-2.5 cursor-pointer text-red-600" onClick={() => onDelete(emp._id)}>
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </>
    )
}

export default Employee;