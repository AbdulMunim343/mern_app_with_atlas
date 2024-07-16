const AddEmployee = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center h-screen font-mono">
                <div className='basis-9/12 mt-5'>
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
                            >
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
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-5">
                            <button type="button" className="w-40 rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm">
                                Submit
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee;