import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };
    return (
        <>
            <div className="flex flex-row justify-center h-screen items-center font-mono">
                <div className='basis-4/12'>
                    <div className="mb-2 flex justify-center">
                        <img src='/devlogic.png' className='w-15 h-20' />
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-stone-50">
                        Sign Up
                    </h2>
                    <div className="mt-2 text-center text-stone-50 flex mb-5">
                        Don&apos;t have an account?
                        <div
                            onClick={handleLoginClick}
                            className="font-semibold cursor-pointer text-blue-600 transition-all duration-200 hover:underline ml-1">
                            Sign In
                        </div>
                    </div>
                    <form>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-stone-50">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-stone-50">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-800 px-3.5 py-2.5 font-semibold leading-7 text-white font-mono">
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp