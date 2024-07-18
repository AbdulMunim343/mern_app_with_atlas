import HeaderNave from '../components/header'
import FooterBottom from '../components/footer'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddEmployee = () => {
    const {user} = useAuthContext('')
    const [employee_name,SetName] = useState('');
    const [title,SetTitle] = useState('');
    const [status,SetStatus] = useState('');
    const [role,SetRole] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
     const getEmpById = async() =>{
        const response = await fetch(`http://localhost:4000/api/employee/${id}`,{
            headers:{'Authorization':`Bearer ${user.token}`},
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            toast.error(data.error)
        }

        if(response.ok){
            SetName(data.employee_name);
            SetTitle(data.title);
            SetStatus(data.status);
            SetRole(data.role);
        }
        }
        if(id !== 'emp'){
            getEmpById();
        }
    },[])

 const handleSubmit = async(e)=>{
    e.preventDefault();
    if(id === 'emp'){
        const response = await fetch('http://localhost:4000/api/employee',{
            method:'POST',
            headers:{'Content-Type': 'application/json','Authorization':`Bearer ${user.token}`},
            body: JSON.stringify({employee_name,title,status,role})
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            toast.error(data.error)
        }

        if(response.ok){
            setIsLoading(false);
            navigate('/');
            toast.success("Form submitted successfully!");
        }
    }else{
         const response = await fetch(`http://localhost:4000/api/employee/${id}`,{
            method:'PATCH',
            headers:{'Content-Type': 'application/json','Authorization':`Bearer ${user.token}`},
            body: JSON.stringify({employee_name,title,status,role})
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            toast.error(data.error)
        }

        if(response.ok){
            setIsLoading(false);
            navigate('/');
            toast.success("Updated employee successfully!");
        }
    }
        
 }
    return (
        <>
        <HeaderNave/>
            <div className="flex flex-row justify-center items-center h-screen font-mono">
                <div className='basis-9/12 mt-5'>
                <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-white">Add Employees</h2>
                    </div>
                    <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
                        <div className="w-full">
                            <label
                                className="text-base font-medium text-stone-50"
                                htmlFor="Name"
                            >
                                Name*
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your name"
                                id="Name"
                                value={employee_name}
                                onChange={(e)=>{SetName(e.target.value)}}
                            ></input>
                        </div>

                        <div className="w-full">
                            <label
                                className="text-base font-medium text-stone-50"
                                htmlFor="Title"
                            >
                                Title*
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your title"
                                id="Title"
                                value={title}
                                onChange={(e)=>{SetTitle(e.target.value)}}
                            ></input>
                        </div>

                        <div className="w-full">
                            <label
                                className="text-base font-medium text-stone-50"
                                htmlFor="Status"
                            >
                                Status*
                            </label>
                            <select
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your status"
                                id="Status"
                                value={status}
                                onChange={(e)=>{SetStatus(e.target.value)}}
                            >
                                <option value=" " className="text-black">Select</option>
                                <option value="active" className="text-black">Active</option>
                                <option value="inactive" className="text-black">Inactive</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label
                                className="text-base font-medium text-stone-50"
                                htmlFor="Role"
                            >
                                Role*
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your role"
                                id="Role"
                                value={role}
                                onChange={(e)=>{SetRole(e.target.value)}}
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-5">
                        <button type="submit" disabled={isLoading} className="w-40 rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm">
                            <span className={isLoading ? 'hidden' : 'block'}>
                                        Submit
                                    </span>

                                    <span className={isLoading ? 'block' : 'hidden'}>
                                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        Processing...
                                    </span>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <FooterBottom/>
        </>
    )
}

export default AddEmployee;