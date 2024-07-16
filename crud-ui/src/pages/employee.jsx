import { useNavigate } from "react-router-dom";
import HeaderNave from '../components/header'
import FooterBottom from '../components/footer'
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Employee = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [employee,setEmployee] = useState([]);
    const [error,setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(()=>{
        const getEmployee = async() =>{
            const response = await fetch('http://localhost:4000/api/employee',{
                headers:{'Authorization' : `Bearer ${user.token}`}
            });
    
            const data = await response.json();
    
            if(!response.ok){
                setError(data.error);
            }
    
            if(response.ok){
                //filling the eployee data
                setEmployee(data)
            }

        }

        if(user){
            getEmployee();
        }
    },[user])

    const handleToStudentClick = () => {
        navigate(`/addemployee/emp`);
    };

    const onEdit = (id) => {
        navigate(`/addemployee/${id}`);
    };

    const onDelete = async(id) => {
        const response = await fetch(`http://localhost:4000/api/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }
        
        if (response.ok) {
            setIsLoading(false);
        }
        
    };
    return (
        <>
        <HeaderNave/>
            <div className="flex flex-row justify-center h-screen font-mono">
                <div className='basis-9/12 mt-20'>
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
                    {employee.map((emp,i) => (
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
                                        <div className="text-sm font-medium">{emp.employee_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm">{emp.title}</div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    {emp.status}
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm ">
                                {emp.role}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                                <span  className="mr-2.5 cursor-pointer" onClick={()=>onEdit(emp._id)}>
                                    Edit
                                </span>
                                <span  className="mr-2.5 cursor-pointer" onClick={()=>onDelete(emp._id)}>
                                    Delete
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>

            <FooterBottom/>
        </>
    )
}

export default Employee;